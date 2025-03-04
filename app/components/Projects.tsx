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
      "Actuellement, j'ai mis en place le système de connexion des utilisateurs et la logique du jeu d'échecs, avec la gestion des mouvements des pièces et des règles du jeu. Je travaille maintenant sur l'implémentation du système multijoueur, permettant aux joueurs de s'affronter en ligne.",
    image:
      "https://cdn.discordapp.com/attachments/1044951456953937931/1330903514683019314/image.png?ex=67c70afc&is=67c5b97c&hm=faa98496569987a11d3515393d5f342d105859c47988c128dd6c9be8869c5fe8&",
    technologies: ["C#", "WPF", "TDD (Test Driven Development)", "Clean Architecture", "SQLite", "MVVM (Model, View, View-Model)"],
  },
  {
    title: "Hevalia",
    statut: "En maintenance",
    description:
      "C’est mon serveur Minecraft sur lequel je passe beaucoup de temps. Je m'occupe du développement, de la communication, de la gestion de la boutique et de l'équipe de modération. Il s'agit d'un OP Prison, un mode de jeu proche du simulateur. C'est un serveur à but non lucratif.",
    image:
      "https://cdn.discordapp.com/attachments/859160802195144735/1336426892072452097/logo_hevalia2.jpg?ex=67c75c88&is=67c60b08&hm=f533564caeca3fe713f1c2b9a300b6472dc1a872a084d3d1d03430f11fb289cc&",
    technologies: ["Skript", "Java", "SQLite", "Gestion équipe", "Gestion boutique"],
  },
  {
    title: "Game Jam 2025",
    statut: "Disponible",
    description:
      "Il s'agit d'un événement où le principe est de développer un jeu sur un moteur graphique en groupe de 3 à 6 en 26 heures. Le thème pour cette année était Melody à l'infini. On était 5 et nous avons fait un jeu dans le même style qu'Isaac.",
    image:
      "https://codegamejam.extragames.fr/wp-content/uploads/2024/11/CGJ2025-Affiche-9e-edition.jpg",
    link: "https://github.com/ArnavJ19/Spotify-User-Engagement-Analysis",
    technologies: ["GDscript", "Godot", "Travail en équipe", "Plein rush"],
  },
  {
    title: "Application Médical",
    statut: "Disponible",
    description:
      "Il s'agit d'un projet dans le cadre de l'IUT, en groupe de 6 avec 3 initiaux et 3 alternant. Il faut concevoir et développer une application mobile multi-plateforme de suivi des traitements médicamenteux et de leurs possibles effets secondaires ou interactions risquées pour les patients. L'application doit permettre une gestion efficace du régime médicamenteux chez le patient, avec déclaration aux autorités en cas d’effet(s) indésirable(s).",
    image:
      "https://cdn.discordapp.com/attachments/936678410242105444/1346400056806215712/image.png?ex=67c80c44&is=67c6bac4&hm=7f2c4e6814d79a36445e29a76f40bdbacfb7807ef94dd59dd5c3a8985e2c33cd&",
    link: "https://github.com/ArnavJ19/TradeAnalysis",
    technologies: ["Kotlin", "SQLite", "MongoDB", "TypeScript", "NodeJS", "Travail en équipe"],
  },
  {
    title: "Epice&Halle",
    statut: "",
    description:
      "Dans le cadre de notre formation à l’IUT, nous avons réalisé un projet en groupe de trois, qui consistait à concevoir un site de e-commerce sur un thème libre. Ce projet devait être développé en PHP en utilisant un framework, ce qui nous a permis d’appliquer des concepts avancés de programmation et de structurer notre code de manière efficace. Afin de garantir un code maintenable et évolutif, nous avons intégré plusieurs design patterns, notamment Strategy, Factory et State",
    image:
      "https://cdn.discordapp.com/attachments/1159399284895121418/1193067426393378856/logo.jpg?ex=67c7e4a0&is=67c69320&hm=bd8c78a366bf98d75f0698fb1a6d9395f8c16cdc008eed8cd1561339ccde94b7&",
    technologies: ["Symfony", "PHP", "HTML", "CSS", "Twig", "MariaDB"],
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Projects</h2>
          </AnimatedGradient>
          <p className="text-gray-400">Quelque projet que j'ai fait</p>
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
                className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
              <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <motion.h3
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ color: "#60A5FA" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-400 mb-6"
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

