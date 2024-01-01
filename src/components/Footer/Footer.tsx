import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[var(--c3)] text-white flex items-start justify-center w-full">
      <div className="w-[1280px] max-w-[1280px] px-4 py-8 sm:p-8 flex flex-col sm:flex-row items-start sm:justify-between">
        <div className="mb-8">
          <div className="flex items-center">
            <p className="gradient text-4xl font-bold">THE</p>
            <p className="w-[45px] h-7 ml-2 mt-1 rounded-[50px] bg-[var(--c2)]"></p>
          </div>
          <div className="gradient flex items-center text-4xl font-bold">
            <p>M</p>
            <p className="w-7 h-7 mt-2 rounded-[50%] bg-[var(--c2)]"></p>
            <p>VIE</p>
          </div>
          <div className="flex items-center">
            <p className="w-[55px] h-7 mr-2 mt-2 rounded-[50px] bg-[var(--c2)]"></p>
            <p className="gradient text-4xl font-bold">DB</p>
          </div>
        </div>
        <div className="mb-8">
          <div>
            <p className="text-2xl font-bold">Tech Stack </p>
            <div className="flex flex-col items-start mt-4">
              <Link href="#" className="flex items-center mb-2">
                <span className="bg-white text-black rounded-full mr-2 p-1">
                  <SiNextdotjs />
                </span>
                Next.js
              </Link>
              <Link href="#" className="flex items-center mb-2">
                <span className="bg-white text-[#3178c6] rounded-[50%] mr-2 p-1">
                  <SiTypescript />
                </span>
                Typescript
              </Link>
              <Link href="#" className="flex items-center mb-2">
                <span className="bg-white text-[#3178c6] rounded-[50%] mr-2 p-1">
                  <SiTailwindcss />
                </span>
                Tailwind
              </Link>
              <Link href="#" className="flex items-center mb-2">
                <span className="bg-white text-[#1a202c] rounded-[50%] mr-2 p-1">
                  <SiPrisma />
                </span>
                Prisma
              </Link>
              <Link href="#" className="flex items-center mb-2">
                <span className="bg-white text-[#116149] rounded-[50%] mr-2 p-1">
                  <SiMongodb />
                </span>
                MongoDB
              </Link>
            </div>
          </div>
        </div>
        <div>
          <p>Name: Kedar Babaleshwar</p>
          <p>Email : babaleshwarkedar@gmail.com</p>
          <p>Mobile : +91-6361579289</p>
          <Link
            href="#"
            className="flex items-center text-xl mt-4 rounded-[50px] font-bold"
          >
            GitHub Profile
            <span className="ml-2">
              <BsGithub />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
