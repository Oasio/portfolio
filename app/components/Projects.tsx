"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Share2 } from "lucide-react"
import { AnimatedGradient } from "./ui/animated-gradient"

const projects = [
  {
    title: "Jeu d'échec",
    statut: "En Développement",
    description:
      "J'ai développé le système de connexion des utilisateurs et la logique des échecs. Je travaille maintenant sur l'implémentation du mode multijoueur en ligne.",
    image:
        "/application_chess.png",
    technologies: ["C#", "WPF", "TDD (Test Driven Development)", "Clean Architecture", "SQLite", "MVVM (Model, View, View-Model)"],
  },
  {
    title: "Hevalia",
    statut: "En maintenance",
    description:
        "Il s'agit mon serveur Minecraft. Je m'occupe du développement, de la communication, de la gestion de la boutique et de l'équipe de modération. Il s'agit d'un OP Prison, un mode de jeu proche du simulateur.",
    image:
        "/logo_hevalia.png",
    technologies: ["Skript", "Java", "SQLite", "Gestion équipe", "Gestion boutique"],
  },
  {
    title: "Game Jam 2025",
    statut: "Disponible",
    description:
        "Avec une équipe de 5 amis, j'ai participé à cet événement où le but était de créer un jeu en 26 heures sur un thème donné. Je me suis occupé de toute la partie back-end et de la logique du jeu.",
    image:
        "https://codegamejam.extragames.fr/wp-content/uploads/2024/11/CGJ2025-Affiche-9e-edition.jpg",
    link: "https://github.com/ArnavJ19/Spotify-User-Engagement-Analysis",
    technologies: ["GDscript", "Godot", "Travail en équipe", "Plein rush"],
  },
  {
    title: "Application Médical",
    statut: "Disponible",
    description:
        "Dans le cadre de mes études, en groupe de 6, nous avons développé une application mobile médicale. J’ai conçu des interfaces permettant le suivi des traitements médicamenteux, ainsi que l’identification de leurs effets secondaires ou interactions à risque pour les patients.",
    image:
        "/application_medical.png",
    link: "",
    technologies: ["Kotlin", "SQLite", "MongoDB", "TypeScript", "NodeJS", "Travail en équipe"],
  },
  {
    title: "Epice&Halle",
    statut: "https://cdn.discordapp.com/attachments/936678410242105444/1346560000536870912/Adobe_Express_-_file.png?ex=67c8a13a&is=67c74fba&hm=0f1a44c6922760f4805aa40af96b55570232b94d1120614e6caf64cf425a198d&",
    description:
        "Dans le cadre de notre formation à l’IUT, en groupe de 3, nous avons réalisé un projet visant à créer un site e-commerce sur un thème libre. Je me suis chargé de toute la logique du site ainsi que de la gestion de la base de données.",
    image:
        "/logo_epice&halle.png",
    technologies: ["Symfony", "PHP", "HTML", "CSS", "Twig", "MariaDB"],
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
      <section id="projects" className="py-20 bg-[#0A0A0A] font-poppins">
        <div className="container mx-auto px-6">
          <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              ref={ref}
          >
            <AnimatedGradient className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-white px-4 py-2">Mes Projets</h2>
            </AnimatedGradient>
          </motion.div>

          <div className="space-y-20">
            {projects.map((project, index) => (
                <motion.div
                    key={project.title}
                    className="flex flex-col lg:flex-row gap-8 items-center bg-[#1A1A1A] rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                      className={`lg:w-1/2 flex justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                  >
                    <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="rounded-xl shadow-2xl object-cover max-w-full h-auto"
                    />
                  </motion.div>
                  <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <motion.h3
                        className="text-3xl font-bold text-white mb-4"
                        whileHover={{ color: "#60A5FA" }}
                        transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                        className="text-gray-400 mb-8 text-lg"
                        whileHover={{ color: "#9CA3AF" }}
                        transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                          <motion.span
                              key={tech}
                              className="px-3 py-1 bg-[#252525] text-gray-300 rounded-full text-sm"
                              whileHover={{ scale: 1.1, backgroundColor: "#3B82F6", color: "#FFFFFF" }}
                              transition={{ duration: 0.3 }}
                          >
                            {tech}
                          </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Projects
