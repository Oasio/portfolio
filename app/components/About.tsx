"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AnimatedGradient } from "./ui/animated-gradient"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Mon Profil</h2>
          </AnimatedGradient>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
              "Je suis étudiant en 3ème année de BUT informatique à Nantes avec de bonnes compétences en développement. Je suis passionnée par le développement d'application et dans la big data",
            "Grâce a mon expérience chez IT AUTOMATION j'ai pu mettre en pratique mes connaissances dans de vrai projet qui auront un impact sur d'autre personne.",
            "Je fais constament des projets personnel autour de mes passions qui me permette de développer ma méthodologie, mon autonomie ainsi que mes connaissance. Je fais notamment de la veille technologique pour découvrir/appronfondir de nouvelle technologie."
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-gray-300 mb-6"
              whileHover={{ scale: 1.05, color: "#60A5FA" }}
              transition={{ duration: 0.2 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

