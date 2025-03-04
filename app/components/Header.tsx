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
          <Link href="/" className="text-2xl font-bold text-white">
            Elouan DANILO
          </Link>
          <ul className="flex space-x-6">
            {navigationItems.map((item) => (
                <li key={item.french}>
                  <button
                      onClick={() => scrollToSection(item.english)}
                      className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.french.charAt(0).toUpperCase() + item.french.slice(1)}
                  </button>
                </li>
            ))}
          </ul>
        </nav>
      </motion.header>
  )
}

export default Header
