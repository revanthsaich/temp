import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import Hero from './Hero';
import Models from'./Models';
import Reviews from './Reviews';
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      <Models/>
      <Reviews/>
      {/* Main Content */}
      {/* <main className="flex flex-col items-center mt-16">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl px-8"
        >
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            <SpotlightCard
              className="custom-spotlight-card flex-1 p-8 h-96 flex flex-col justify-center"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Feeling Unwell?</h3>
                <p className="text-gray-300 mb-4">
                  If you're experiencing any health issues, click below to get a diagnosis.
                </p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
                  Diagnose
                </button>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="custom-spotlight-card flex-1 p-8 h-96 flex flex-col justify-center"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Need Tips?</h3>
                <p className="text-gray-300 mb-4">
                  Get personalized advice for your diet or fitness goals.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all">
                    Diet
                  </button>
                  <button className="px-6 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all">
                    Gym
                  </button>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </motion.section>
      </main> */}
    </div>
  );
}