"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const navigationItems = [
  { french: "Profil", english: "about" },
  { french: "Compétences", english: "skills" },
  { french: "Projets", english: "projects" },
  { french: "Expériences", english: "experience" },
  { french: "Contact", english: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
      <motion.header
          className={`fixed w-full z-50 transition-all duration-300 ${
              isScrolled ? "bg-[#0A0A0A] shadow-lg" : "bg-transparent"
          } font-poppins`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-4xl font-bold text-white hidden lg:block">
            Elouan DANILO
          </Link>
          <div className="hidden lg:flex space-x-6">
            {navigationItems.map((item) => (
                <Link key={item.french} href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.english)
                      }}
                      className="text-lg text-gray-300 hover:text-white transition-colors"
                >
                  {item.french.charAt(0).toUpperCase() + item.french.slice(1)}
                </Link>
            ))}
          </div>
          <button
              className="lg:hidden flex flex-col items-center justify-center w-8 h-8 bg-gray-800 rounded absolute top-4 right-4 z-20"
              onClick={handleToggleMenu}
          >
            <span className={`block h-1 w-6 bg-white ${isMenuOpen ? 'rotate-45 translate-y-2' : ''} transition-transform`}></span>
            <span className={`block h-1 w-6 bg-white ${isMenuOpen ? 'opacity-0' : ''} transition-opacity`}></span>
            <span className={`block h-1 w-6 bg-white ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''} transition-transform`}></span>
          </button>
          {isMenuOpen && (
              <ul className="lg:hidden flex flex-col absolute top-16 right-6 bg-[#0A0A0A] p-4 w-40 border border-gray-800 rounded">
                {navigationItems.map((item) => (
                    <li key={item.french} className="py-2">
                      <button
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.english);
                            handleToggleMenu();
                          }}
                          className="text-lg text-gray-300 hover:text-white transition-colors"
                      >
                        {item.french.charAt(0).toUpperCase() + item.french.slice(1)}
                      </button>
                    </li>
                ))}
              </ul>
          )}
        </nav>
      </motion.header>
  )
}

export default Header