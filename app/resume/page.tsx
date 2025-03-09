"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] pt-20">
            <div className="container mx-auto px-4">
                <Link
                    href="/"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour
                </Link>
                <div className="w-75% bg-[#1A1A1A] rounded-lg p-4 shadow-lg">
                    <div className="flex justify-center">
                        <Image
                            src="/CV.png"
                            alt="Resume"
                            width={500} // taille agrandie
                            height={650} // taille agrandie
                            className="object-contain"
                        />
                    </div>
                    <div className="text-center mt-4">
                        <a
                            href="/CV.pdf"
                            download
                            className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
                        >
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
