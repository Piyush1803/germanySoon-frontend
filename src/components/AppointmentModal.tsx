import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { X } from "lucide-react";
import { MagneticButton } from "@/components/effects/MagneticButton";

const API_BASE_URL = "https://germanysoon.com/api";

interface AppointmentModalProps {
  closeModal: () => void;
}

const AppointmentModal = ({ closeModal }: AppointmentModalProps) => {
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [availableSlots, setAvailableSlots] = useState<
    { id: number; time: Date; isBooked: boolean }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [closeModal]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/appointments/available-dates`)
      .then((res) => {
        setAvailableDates(res.data.map((dateStr: string) => new Date(dateStr)));
      })
      .catch((err) => console.error("Error fetching dates", err));
  }, []);

  const handleDateChange = (date: Date | null) => {
    if (!date) return;
    setSelectedDate(date);
    setSelectedDateTime(null);

    const selectedDateStr = date.toLocaleDateString("en-CA");
    axios
      .get(`${API_BASE_URL}/appointments/available?date=${selectedDateStr}`)
      .then((res) => {
        const slotTimes = res.data.map(
          (slot: { id: number; startTime: string; is_booked: boolean }) => ({
            id: slot.id,
            time: new Date(slot.startTime),
            isBooked: slot.is_booked,
          })
        );
        setAvailableSlots(slotTimes);
      })
      .catch((err) => console.error("Error fetching slots", err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSlotSelect = (slot: { time: Date; isBooked: boolean }) => {
    if (!slot.isBooked) setSelectedDateTime(slot.time);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDateTime) {
      alert("Please select a valid date and time.");
      return;
    }

    const selectedSlot = availableSlots.find(
      (slot) =>
        slot.time.getTime() === selectedDateTime.getTime() && !slot.isBooked
    );

    if (!selectedSlot) {
      alert("Selected time is not available. Please choose another time.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        slotId: selectedSlot.id,
        name: formData.name,
        email: formData.email,
      };
      const res = await axios.post(
        `${API_BASE_URL}/payments/create-checkout-session`,
        payload
      );

      if (res.data?.url) {
        window.location.href = res.data.url;
      } else {
        throw new Error("Stripe session URL not received.");
      }
    } catch (error) {
      console.error("Error redirecting to payment:", error);
      alert("Failed to initiate. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-modal-title"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
          onClick={closeModal}
          aria-hidden
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative z-[101] w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-card shadow-elegant"
        >
          <div className="relative bg-gradient-accent px-8 py-7 text-center">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full p-2 text-accent-foreground/80 transition-colors hover:bg-black/10 hover:text-accent-foreground"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            <h2
              id="appointment-modal-title"
              className="font-display text-2xl font-bold text-accent-foreground"
            >
              Book an Appointment
            </h2>
            <p className="mt-1 text-sm text-accent-foreground/80">
              Select your preferred date and time
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 p-8">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gold" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-xl border border-border bg-muted/50 py-3 pl-10 pr-4 outline-none transition-all focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gold" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-border bg-muted/50 py-3 pl-10 pr-4 outline-none transition-all focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20"
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="relative flex flex-col">
              <label className="mb-1.5 text-sm font-medium">Select Date</label>
              <FaCalendarAlt className="absolute left-3 top-11 text-brand-gold" />
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                includeDates={availableDates}
                dateFormat="yyyy-MM-dd"
                placeholderText="Pick a date"
                className="w-full rounded-xl border border-border bg-muted/50 py-3 pl-10 pr-4"
                required
                disabled={isSubmitting}
              />
            </div>

            {selectedDate &&
              (availableSlots.length > 0 ? (
                <div className="text-sm">
                  <p className="mb-2 font-medium">Available slots</p>
                  <div className="flex flex-wrap gap-2">
                    {availableSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot.id}
                        disabled={slot.isBooked || isSubmitting}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                          slot.isBooked
                            ? "cursor-not-allowed border-border bg-muted text-muted-foreground"
                            : selectedDateTime?.getTime() === slot.time.getTime()
                              ? "border-brand-gold bg-gradient-accent text-accent-foreground shadow-button"
                              : "border-brand-gold/40 text-brand-gold hover:bg-brand-gold/10"
                        }`}
                        onClick={() => handleSlotSelect(slot)}
                      >
                        {slot.time.toLocaleTimeString("en-GB", {
                          hour: "2-digit",
                          minute: "2-digit",
                          timeZone: "UTC",
                        })}
                        {slot.isBooked && " (Booked)"}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-destructive">No available slots on this date.</p>
              ))}

            <MagneticButton
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full rounded-xl bg-gradient-accent py-3.5 text-base font-semibold text-accent-foreground shadow-button disabled:opacity-60"
            >
              {isSubmitting ? "Processing..." : "Confirm Booking"}
            </MagneticButton>

            <button
              type="button"
              onClick={closeModal}
              className="w-full rounded-xl border border-border py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted"
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AppointmentModal;
