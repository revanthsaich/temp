import React from 'react'
import { motion } from 'framer-motion'

export default function SectionCard({ title, description, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center p-6 rounded-lg shadow-md bg-white"
    >
      <img src={image} alt={title} className="w-64 h-48 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  )
}