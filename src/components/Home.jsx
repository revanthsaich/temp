import React from 'react'
import { motion } from 'framer-motion'
import SpotlightCard from './SpotLightCard'
export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center">
        {/* First Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-screen max-w-6xl flex items-center justify-center px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Left Half: Logo */}
            <div className="flex justify-center">
              <img
                src="/logo.svg"
                alt="MedApp Logo"
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Right Half: Text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Welcome to MedApp</h2>
              <p className="text-gray-600">
                MedApp is a dynamic platform designed to provide medical assistance,
                including diagnostics, diet plans, and fitness tracking, all from the
                comfort of your home.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Second Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full h-screen max-w-6xl flex flex-col items-center justify-center px-8 bg-black text-white"
        >
          {/* Top Part: Project Details */}
          <div className="w-full text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">About the Project</h3>
            <p className="text-lg text-gray-300">
              This web application aims to revolutionize healthcare by providing
              accessible and personalized solutions for users. Whether you're looking
              for health diagnostics, fitness tracking, or nutritional guidance,
              MedApp has got you covered.
            </p>
          </div>

          {/* Bottom Part: Spotlight Cards */}
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            {/* Spotlight Card for Diagnose */}
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

            {/* Spotlight Card for Diet/Gym */}
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
      </main>
    </div>
  )
}