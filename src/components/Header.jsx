import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-50 flex items-center justify-center shadow-sm">
      <div className="relative w-8 h-8">
        <img src="/logo.svg" alt="Logo" className="object-contain" />
      </div>
    </header>
  )
}