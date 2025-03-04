"use client"

import Image from 'next/image';

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AnimatedGradient } from "./ui/animated-gradient"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Présentation
  const presentation = {
    title: "Mon Profil",
    texts: [
      "Je suis étudiant en 3ème année de BUT informatique à Nantes avec de bonnes compétences en développement. Je suis passionnée par le développement d'application et les métiers qui sont dans la big data",
      "Grâce a mon expérience chez IT AUTOMATION j'ai pu mettre en pratique mes connaissances dans de vrai projet qui auront un impact sur d'autre personne.",
      "Je fais constament des projets personnel autour de mes passions qui me permette de développer ma méthodologie, mon autonomie ainsi que mes connaissance. Je fais notamment de la veille technologique pour découvrir/appronfondir de nouvelle technologie.",

    ],
  }

  const passions = [
    {
      "title": "Les échecs",
      "image": {
        "src": "https://www.freelogovectors.net/svg05/fide-logo-international-chess-federation.svg",
        "alt": "Image de développement d'application"
      },
      "description": "Ils me permettent de réfléchir même durant mon temps libre. J'aime réfléchir sur mes erreurs, les analyser et les corriger."
    },
    {
      "title": "Le vélo",
      "image": {
        "src": "https://th.bing.com/th/id/OIP.Bx4hQ6IgWRYJsye8I3t8HQAAAA?rs=1&pid=ImgDetMain",
        "alt": "Image de vélo"
      },
      "description": "Il n'y a rien de mieux pour voir du paysage et faire du sport en même temps."
    },
    {
      "title": "La natation",
      "image": {
        "src": "https://img.olympics.com/images/image/private/t_s_w860/t_s_1_1_g_auto/f_auto/primary/jkih3pdmfjrojxl60buz",
        "alt": "Image de natation"
      },
      "description": "C'est pour le sentiment de détente et de bien-être, j'en fais maintenant depuis 14 ans."
    },
    {
      "title": "Jeux vidéo",
      "image": {
        "src": "https://art.pixilart.com/1c020ec9c3ce31a.png",
        "alt": "Image de jeux vidéo"
      },
      "description": "J'aime tout type de jeux mais en particulier Minecraft pour la liberté créative immense."
    },
  ]

  // Objectifs
  const objectifs = {
    title: "Mes Objectifs",
    texts: [
      "Mon objectif à long terme est d'améliorer considérablement mon anglais et d'acquérir une expérience professionnelle dans un pays étranger.",
      "Je souhaite également développer mes compétences en développement d'applications et tout ce qui touche à la base de données.",
      "Je suis déterminée à atteindre mes objectifs et à poursuivre mes rêves.",
    ],
  }

  return (
      <section id="about" className="py-20 bg-[#0A0A0A] font-poppins">
        <div className="container mx-auto px-6">
          <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              ref={ref}
          >
            <AnimatedGradient className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-white px-4 py-2">{presentation.title}</h2>
            </AnimatedGradient>
          </motion.div>
          <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
          >
            {presentation.texts.map((text, index) => (
                <motion.p
                    key={index}
                    className="text-lg md:text-xl text-gray-300 mb-6"
                    whileHover={{ scale: 1.05, color: "#60A5FA" }}
                    transition={{ duration: 0.2 }}
                >
                  {text}
                </motion.p>
            ))}
            <h3 className="text-3xl font-bold text-white mb-4">Mes Passions</h3>
            <div className="flex flex-wrap justify-center">
              {passions.map((passion, index) => (
                  <div key={index} className="mb-12 w-1/1 lg:w-1/1 xl:w-2/4 p-4 flex flex-col items-center">
                    <div className="bg-[#1A1A1A] rounded-lg shadow-md p-4 w-full h-full flex flex-col items-center">
                      <h5 className="text-2xl font-bold text-white mb-4">{passion.title}</h5>
                      <Image
                          src={passion.image.src}
                          alt={passion.image.alt}
                          width={200}
                          height={100}
                          className="w-full h-full object-cover filter brightness-100 hover:brightness-110 transition-all mb-4"
                      />
                      <p className="text-lg text-gray-300 mb-6">{passion.description}</p>
                    </div>
                  </div>
              ))}
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">{objectifs.title}</h3>
            {objectifs.texts.map((text, index) => (
                <motion.p
                    key={index}
                    className="text-lg md:text-xl text-gray-300 mb-6"
                    whileHover={{ scale: 1.05, color: "#60A5FA" }}
                    transition={{ duration: 0.2 }}
                >
                  {text}
                </motion.p>
            ))}
          </motion.div>
        </div>
      </section>
  )
}

export default About
