"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { AnimatedGradient } from "./ui/animated-gradient"

const skillGroups = [
  {
    category: "Outil & logiciel",
    skills: [
      {
        name: "Visual Studio Code",
        icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      },
      { name: "Visual Studio", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg" },
      { name: "Intellj IDEA", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg" },
      { name: "Sublime Text", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Sublime_text.png" },
      { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/0/03/Git_format.png" },
      { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
      { name: "Docker", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg"},
      { name: "Godot", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg"},
      { name: "Unity", icon: "https://th.bing.com/th/id/R.0e4ed77d950cdaaacc2df0842317e4e1?rik=hWZZFkk730NCFA&pid=ImgRaw&r=0"},
      { name: "Suite Office", icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/OfficeSuite_logo.png"},
      { name: "Wireshark", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Wireshark_icon_new.png"},
      { name: "Android Studio", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg"},
      { name: "Mermaid", icon: "https://mermaid.live/favicon.svg"},
      { name: "TwinCat", icon: "https://pro6b7cc670-pic13.ysjianzhan.cn/upload/Beckhoff_Logo.png"}
    ],
  },
  {
    category: "Front-End",
    skills: [
      {
        name: "TailwindCSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        name: "HTML",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      },
      {
        name: "CSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Javascript_Logo.png/640px-Javascript_Logo.png",
      },
      { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png"},

    ],
  },
  {
    category: "Back-End",
    skills: [
      {
        name: "NodeJS",
        icon: "https://th.bing.com/th?id=ODLS.b0732124-0856-4a73-92c5-ab3814676014&w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
      },
      {
        name: "PHP",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png",
      },
      {
        name: "Java",
        icon: "https://th.bing.com/th?id=ODLS.794b5f0d-2272-46a8-aed2-f22b075e0a52&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
      },
      {
        name: "Kotlin",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/640px-Kotlin_Icon.svg.png",
      },
      {
        name: "Golang",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/640px-Go_Logo_Blue.svg.png",
      },
      {name: "C#", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/197px-C_Sharp_Logo_2023.svg.png"},
      {name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png"},
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "PostgreSQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
      {
        name: "MongoDB", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Mongodb-icon.svg/640px-Mongodb-icon.svg.png"
      },
      {
        name: "Oracle", icon: "https://th.bing.com/th?id=ODLS.83319e60-2790-4801-9940-a479e71ffcad&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
      },
      {
        name: "SQLite", icon: "https://www.bing.com/th?id=OIP.ETx8nIzcPv_qPyYy2v4zSQHaEK&w=174&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
      }
    ],
  },
  {
    category: "Framework",
    skills: [
      { name: "Symfony (PHP)", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Symfony.jpg/640px-Symfony.jpg" },
      {
        name: "WPF (C#)",
        icon: "https://th.bing.com/th?id=ODLS.d8b89526-4169-4411-b322-1f2a9672ac5f&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2",
      },
      {
        name: "Spring (Java)", icon: "https://th.bing.com/th?id=ODLS.794b5f0d-2272-46a8-aed2-f22b075e0a52&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2"
      },
      {
        name: "Vue.JS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png"
      },
      { name: "React (JS)", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" },
    ],
  },
  {
    category: "Langue",
    skills: [
      {
        name: "Français - Langue maternelle",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Flag_of_France_official.svg/640px-Flag_of_France_official.svg.png",
      },
      { name: "Anglais - B2", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/640px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" },
      {
        name: "Espagnol - A2",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_the_Kingdom_of_Spain_%28%22Correct%22_Heraldic_Coat_of_Arms%29.svg/640px-Flag_of_the_Kingdom_of_Spain_%28%22Correct%22_Heraldic_Coat_of_Arms%29.svg.png",
      },
    ],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
      <section id="skills" className="py-20 bg-[#0A0A0A] font-poppins">
        <div className="container mx-auto px-6">
          <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              ref={ref}
          >
            <AnimatedGradient className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-white px-4 py-2">Mes Compétences</h2>
            </AnimatedGradient>
          </motion.div>

          {skillGroups.map((group, groupIndex) => (
              <motion.div
                  key={group.category}
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-blue-400">{group.category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {group.skills.map((skill, index) => (
                      <motion.div
                          key={skill.name}
                          className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-lg transition-colors"
                          whileHover={{ scale: 1.05, backgroundColor: "#252525" }}
                          transition={{ duration: 0.3 }}
                      >
                        <motion.div
                            className="w-12 h-12 mb-3 relative"
                        >
                          <Image
                              src={skill.icon || "/placeholder.svg"}
                              alt={skill.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-contain filter brightness-100 hover:brightness-110 transition-all"
                          />
                        </motion.div>
                        <span className="text-mb-6 text-gray-300 text-center">{skill.name}</span>
                      </motion.div>
                  ))}
                </div>
              </motion.div>
          ))}
        </div>
      </section>
  )
}

export default Skills
