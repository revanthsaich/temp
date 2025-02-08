import React from 'react'
import { motion } from 'framer-motion'

export default function SectionCard({ title, description, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center p-6 rounded-lg"
    >
      <img src={image} alt={title} className="w-64 h-48 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
      <div className="card-actions">
        <button  className="btn-primary my-[20px] py-3 px-6 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out border-[0.5px] border-white hover:border-blue-300">
          Try Now
        </button>
      </div>
    </motion.div>
  )
}