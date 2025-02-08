import React, { useState, useEffect } from 'react'
import { Home, Search, Bell, User } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Search' },
  { icon: Bell, label: 'Notifications' },
  { icon: User, label: 'Profile' },
]

export default function BottomDock() {
  const [activeItem, setActiveItem] = useState('Home')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={` w-[30%] fixed left-1/2 transform -translate-x-1/2 bottom-4 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <ul className="flex justify-around items-center">
        {navItems.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => setActiveItem(item.label)}
              className={`flex flex-col items-center p-2 rounded-full transition-all duration-200 ease-in-out ${
                activeItem === item.label
                  ? 'text-blue-600 bg-blue-100 transform scale-110'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span className="text-xs">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}