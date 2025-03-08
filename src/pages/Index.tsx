import React from "react";
import { motion } from "framer-motion";
import { Bell, MapPin, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import TypewriterEffect from "./TypewriterEffect";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <div className="pt-14">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-20">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Empowering Gig Workers
            </motion.h1>

            <TypewriterEffect />

            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8 sm:mb-10 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Own Your Hustle, Secure Your Future, Thrive on Your Terms!
            </motion.p>
            <Link to="/login">
              <motion.button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full flex items-center gap-2 text-lg font-semibold shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.button>
            </Link>
            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-20 w-full max-w-4xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {[
                {
                  icon: Bell,
                  title: "Emergency Alerts",
                  desc: "Quick access to emergency services",
                },
                {
                  icon: MapPin,
                  title: "Location Tracking",
                  desc: "Real-time location sharing with trusted contacts",
                },
                {
                  icon: Users,
                  title: "Support Network",
                  desc: "Connect with your safety circle",
                },
              ].map(({ icon: Icon, title, desc }, index) => (
                <motion.div
                  key={title}
                  className="glass-card p-6 rounded-xl shadow-lg"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {title}
                  </h3>
                  <p className="text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
