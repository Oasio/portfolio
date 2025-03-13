"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedGradient } from "./ui/animated-gradient"
import { Spotlight } from "./ui/spotlight"

const scrollToContact = () => {
  const section = document.getElementById("contact")
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

const Hero = () => {
  return (
      <Spotlight className="min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden font-poppins">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <motion.div
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              <span className="text-blue-400">Elouan DANILO</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 relative">
              Étudiant en BUT informatique en 3eme année
              <motion.span
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
              />
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Étudiant en 3ᵉ année de BUT Informatique et alternant chez IT Automation, je suis passionné par le développement et la Big Data. Curieux et en quête d'amélioration continue, j’explore sans cesse de nouvelles technologies pour repousser mes limites.
            </p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >

              <motion.a
                  onClick={scrollToContact}
                  className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-transform duration-300 ease-out hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
              >
                <span className="relative text-white font-semibold text-xl">Contact</span>
              </motion.a>


            </motion.div>
          </motion.div>
          <motion.div
              className="md:w-1/2 mt-12 md:mt-0 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99],
              }}
          >
            <div className="relative w-full h-0 pb-[100%] md:pb-[0%]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-30 animate-pulse" />
              <div className="absolute inset-0">
                <Image
                    src=""
                    alt="Elouan Avatar"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
                    priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Spotlight>
  )
}

export default Hero
