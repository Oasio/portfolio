"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'

export default function ResumePage() {
  return (
      <div className="min-h-screen bg-[#0A0A0A] pt-20">
        <div className="container mx-auto px-4">
          <Link
              href="/#contact"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Link>
          <div className="w-full bg-[#1A1A1A] rounded-lg p-4 shadow-lg">
            <Image
                src="https://cdn.discordapp.com/attachments/936678410242105444/1346419413439614976/Grey_Clean_CV_Resume_Photo.png?ex=67c96fcb&is=67c81e4b&hm=2f7ab56bf6a79e8fdeef97817d097ff9d8c83221d87f5d6f4870dfececad4ef7&"
                alt="Resume"
                width={400} // nouvelle largeur
                height={500} // nouvelle hauteur
                className="w-full h-auto object-contain"
            />

          </div>
        </div>
      </div>
  )
}
