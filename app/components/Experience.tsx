"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AnimatedGradient } from "./ui/animated-gradient"

const experiences = [

  {
    title: "Application WPF",
    company: "IT AUTOMATION",
    location: "Derval, France",
    period: "Septembre 2024 – Aujourd'hui",
    description: [
      "Développement application avec le Framework WPF pour un client",
      "Utilisation de la Clean Architecture pour simplifier la lisibilité ainsi que la maintenabilité du code",
      "Adoption de l'architecture MVVM, permettant une séparation la logique métier, l'interface utilisateur et la gestion des interactions.",
      "Rendez-vous chez le client pour présenter l'avancement du projet et recueillir ses retours"
    ],
    tools: "WPF, C#, SQLite, Rider, Visual Studio, TwinCat, TDD (Test Driven Development), SCRUM",
  },
  {
    title: "Simulateur machine spécialisée",
    company: "IT AUTOMATION",
    location: "Derval, France",
    period: "Avril 2024 – Septembre 2024",
    description: [
      "Automatisation et optimisation de la conception CAO",
      "Simulation des actionneurs avec visualisation des déplacement progressif",
      "Liaison entre l'automate et le moteur graphique",
      "Tester les automates avec le moteur graphique",
      "Documentation du logiciel pour assurer ça compréhension"],
    tools: "Godot, C#, GitLab, Visual Studio, Python, FreeCAD, TwinCat, SCRUM",
  },
]

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-white px-4 py-2">Mes Expériences</h2>
          </AnimatedGradient>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="mb-8 bg-[#111111] rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3
                className="text-2xl font-semibold text-blue-400 mb-4"
                whileHover={{ color: "#60A5FA" }}
                transition={{ duration: 0.3 }}
              >
                {exp.title}
              </motion.h3>
              <motion.p className="text-gray-300 mb-1" whileHover={{ color: "#9CA3AF" }} transition={{ duration: 0.3 }}>
                {exp.company}
              </motion.p>
              <motion.p
                className="text-sm text-gray-400 mb-4"
                whileHover={{ color: "#D1D5DB" }}
                transition={{ duration: 0.3 }}
              >
                {exp.location} | {exp.period}
              </motion.p>
              <ul className="text-lg list-disc pl-5 text-gray-300 mb-4">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    className="mb-2"
                    whileHover={{ color: "#60A5FA", x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.p
                className="text-sm text-gray-400"
                whileHover={{ color: "#9CA3AF" }}
                transition={{ duration: 0.3 }}
              >
                Outils: {exp.tools}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

