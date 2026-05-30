import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { AuroraBackground } from "@/components/effects/AuroraBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <AuroraBackground className="flex min-h-screen items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="section-container text-center"
      >
        <p className="font-display text-8xl font-bold gradient-text md:text-9xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-6 py-3 font-semibold text-accent-foreground shadow-button transition-shadow hover:shadow-glow"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-muted"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default NotFound;
