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
        "https://cdn.discordapp.com/attachments/936678410242105444/1346847078143361148/image.png?ex=67c9ac96&is=67c85b16&hm=63b5c1d5ebbd51edc0860eb3ff819a85c1f855fdb5b1255e53ff5032b04823e2&",
    technologies: ["C#", "WPF", "TDD (Test Driven Development)", "Clean Architecture", "SQLite", "MVVM (Model, View, View-Model)"],
  },
  {
    title: "Hevalia",
    statut: "En maintenance",
    description:
        "C’est mon serveur Minecraft sur lequel je passe beaucoup de temps. Je m'occupe du développement, de la communication, de la gestion de la boutique et de l'équipe de modération. Il s'agit d'un OP Prison, un mode de jeu proche du simulateur.",
    image:
        "https://cdn.discordapp.com/attachments/936678410242105444/1346846878641291355/logo_hevalia2.png?ex=67c9ac67&is=67c85ae7&hm=3b8fd7700d5380b7308974b87651279456a0768642883f456082666e84db4927&",
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
        "https://cdn.discordapp.com/attachments/936678410242105444/1346563094297710633/Capture_d_ecran_2025-03-04_200634-removebg-preview.png?ex=67c8a41b&is=67c7529b&hm=6757ca05082ccd87381f92dd22b614d01299644f248c22ceaea5a97ed67cf203&",
    link: "https://github.com/ArnavJ19/TradeAnalysis",
    technologies: ["Kotlin", "SQLite", "MongoDB", "TypeScript", "NodeJS", "Travail en équipe"],
  },
  {
    title: "Epice&Halle",
    statut: "https://cdn.discordapp.com/attachments/936678410242105444/1346560000536870912/Adobe_Express_-_file.png?ex=67c8a13a&is=67c74fba&hm=0f1a44c6922760f4805aa40af96b55570232b94d1120614e6caf64cf425a198d&",
    description:
        "Dans le cadre de notre formation à l’IUT, nous avons réalisé un projet en groupe de trois, qui consistait à concevoir un site de e-commerce sur un thème libre. Ce projet devait être développé en PHP en utilisant un framework, ce qui nous a permis d’appliquer des concepts avancés de programmation et de structurer notre code de manière efficace. Afin de garantir un code maintenable et évolutif, nous avons intégré plusieurs design patterns, notamment Strategy, Factory et State",
    image:
        "https://cdn.discordapp.com/attachments/936678410242105444/1346846524268871690/logo.png?ex=67c9ac12&is=67c85a92&hm=5ae8eb3a74f7d900f4d1e9673094f20fdac972873c68598bab030b47532911dd&",
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
