import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function OptionsPage() {
  const options = [
    { label: 'Diagnose', path: '/diagnose' },
    { label: 'Diet', path: '/diet' },
    { label: 'Fitness', path: '/fitness' },
  ]

  return (
    <div className="flex flex-col items-center py-20 px-4">
      <h1 className="text-3xl font-bold mb-8">Choose an Option</h1>
      <div className="flex flex-col space-y-4">
        {options.map((option, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link
              to={option.path}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              {option.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}