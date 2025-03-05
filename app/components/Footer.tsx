import Link from "next/link"

const Footer = () => {
  return (
      <footer className="bg-[#0A0A0A] text-white py-8 font-poppins">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold">
                Elouan DANILO
              </Link>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/elouan-danilo-158a94296/" className="hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="mailto:elouan2003.danilo@gmail.com" className="hover:text-blue-400 transition-colors">
                Email
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Elouan DANILO. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer
