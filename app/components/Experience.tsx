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
      "L'adoption de la Clean Architecture pour l'application WPF en C# assure un code structuré et maintenable. Les couches Infrastructure et Application ont été regroupées pour une meilleure organisation",
      "Après avoir connecté les repositories, les services et les DAO à la base de données SQLite, des tests ont été réalisés pour valider le bon fonctionnement de l’application.",
      "L'architecture MVVM a été adoptée pour structurer l'application WPF, permettant une séparation entre la logique métier, l'interface utilisateur et la gestion des interactions.",
      "Un rendez-vous chez le client est prévu pour présenter l'avancement du projet et recueillir ses retours dans le cadre de la méthodologie SCRUM.",

    ],
    tools: "WPF, C#, SQLite, Rider, Visual Studio, TwinCat, TDD (Test Driven Development), SCRUM",
  },
  {
    title: "Simulateur machine spécialisée",
    company: "IT AUTOMATION",
    location: "Derval, France",
    period: "Avril 2024 – Septembre 2024",
    description: [
      "Critères de sélection : Le logiciel doit être open source, gratuit, compatible avec C# et bénéficier de mises à jour régulières.",
      "Intégration de modèles 3D : Transfert de modèles 3D de SolidWorks vers des moteurs de jeu, avec optimisation des performances.",
      "Communication entre l'automate et Godot Engine : Développement d'objets interactifs pour simuler des mécanismes réels, avec une version test fonctionnelle.",
      "Tests et validation : Tests sur l'interaction entre l'automate et Godot Engine, ainsi que sur le fonctionnement interne des objets développés.",
      "Documentation : Rédaction de guides et de tutoriels pour faciliter la prise en main des outils développés.",
    ],
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

