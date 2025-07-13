import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaUser, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
const API_BASE_URL = "https://germanysoon.com/api";

const AppointmentModal = ({ closeModal }) => {
  const [availableDates, setAvailableDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {
    // Fetch available dates from backend on load
    axios.get(`${API_BASE_URL}/appointments/available-dates`)
      .then(res => {
        setAvailableDates(res.data.map(dateStr => new Date(dateStr)));
      })
      .catch(err => console.error("Error fetching dates", err));
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedDateTime(null); // reset selected time when date changes
    const selectedDateStr = date.toLocaleDateString("en-CA"); // e.g., "2025-05-25"
    axios.get(`${API_BASE_URL}/appointments/available?date=${selectedDateStr}`)
      .then(res => {
        const slotTimes = res.data.map(slot => {
          return {
            id: slot.id,
            time: new Date(slot.startTime),
            isBooked: slot.is_booked
          };
        });
        setAvailableSlots(slotTimes);
      })
      .catch(err => console.error("Error fetching slots", err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSlotSelect = (slot) => {
    setSelectedDateTime(slot.time);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDateTime) {
      alert("Please select a valid date and time.");
      return;
    }

    const selectedSlot = availableSlots.find(
      (slot) => slot.time.getTime() === selectedDateTime.getTime() && !slot.isBooked
    );

    if (!selectedSlot) {
      alert("Selected time is not available. Please choose another time.");
      return;
    }

    try {
      const payload = {
        slotId: selectedSlot.id,
        name: formData.name,
        email: formData.email
      };
      const res = await axios.post(`${API_BASE_URL}/payments/create-checkout-session`, payload);

      if (res.data && res.data.url) {
        window.location.href = res.data.url;
      } else {
        throw new Error("Stripe session URL not received.");
      }
    } catch (error) {
      console.error("Error redirecting to payment:", error);
      alert("Failed to initiate. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay with fade-in */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn z-40" onClick={closeModal} />
      {/* Modal Card with scale/fade animation */}
      <div className="relative z-50 w-full max-w-lg mx-4 sm:mx-auto animate-scaleIn">
        <div className="bg-white p-0 rounded-2xl shadow-2xl overflow-hidden">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 py-6 px-8 text-center">
            <h2 className="text-2xl font-bold text-white tracking-wide drop-shadow">Book an Appointment</h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-8">
            {/* Name Input with Icon */}
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="pl-10 border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-400 outline-none bg-gray-50"
                onChange={handleChange}
                required
              />
            </div>
            {/* Email Input with Icon */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="pl-10 border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-400 outline-none bg-gray-50"
                onChange={handleChange}
                required
              />
            </div>
            {/* Date Picker with Icon */}
            <div className="relative flex flex-col">
              <label className="mb-1 font-medium">Select Date</label>
              <FaCalendarAlt className="absolute left-3 top-11 text-purple-400" />
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                includeDates={availableDates}
                dateFormat="yyyy-MM-dd"
                placeholderText="Pick a date"
                className="pl-10 border border-gray-300 p-3 rounded-lg w-full bg-gray-50"
                required
              />
            </div>

            {/* Available Slots List as Pills */}
            {selectedDate && (
              availableSlots.length > 0 ? (
                <div className="mt-2 text-sm text-gray-600">
                  <p className="font-medium mb-2">Available slots:</p>
                  <div className="flex flex-wrap gap-2">
                    {availableSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot.id}
                        disabled={slot.isBooked}
                        className={`px-4 py-2 rounded-full border text-base font-semibold transition-all
                          ${slot.isBooked ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed" :
                            (selectedDateTime?.getTime() === slot.time.getTime() ? "bg-purple-600 text-white border-purple-600" : "bg-white text-purple-700 border-purple-400 hover:bg-purple-50 hover:border-purple-600")}
                        `}
                        onClick={() => !slot.isBooked && handleSlotSelect(slot)}
                      >
                        {slot.time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })}
                        {slot.isBooked && " (Booked)"}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-2 text-sm text-red-600">
                  <p>No available slots on this date.</p>
                </div>
              )
            )}

            {/* Buttons */}
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 text-white py-3 rounded-lg hover:brightness-110 transition text-lg font-semibold shadow-md mt-2"
            >
              Confirm Booking
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition text-lg font-semibold shadow-sm"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        .animate-fadeIn { animation: fadeIn 0.3s; }
        .animate-scaleIn { animation: scaleIn 0.3s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

export default AppointmentModal;