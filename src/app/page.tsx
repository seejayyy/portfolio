"use client";
import Image from "next/image";
import Link from "next/link";
import projects from "./projectData";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="grid grid-cols-1 xl:grid xl:grid-cols-[17.5fr_82.5fr] h-screen bg-bg_color">
      {/* Left grid: Fixed and sticky */}
      <div className="hidden xl:sticky xl:top-0 h-screen xl:border-[#b48b77] xl:border-r-4 xl:p-16 xl:flex xl:flex-col">
        {/* Profile Picture */}
        <div className="flex flex-col items-center justify-between">
          <div className="rounded-full bg-[#5F9EA0] w-48 h-48">
            <Image 
              src={"/profile.jpg"}
              alt=""
              width={300}
              height={300}
              className="object-cover rounded-full"
            />
          </div>
          {/* Name */}
          <h2 className="text-3xl text-center pt-8">Chua Jun Jie (CJ)</h2>
        </div>

        <div className="flex flex-col pt-4">
          {/* Email */}
          <div className="flex flex-row gap-x-4 mt-8 mb-8">
            <Image src="/email.svg" alt="Email Icon" width={26} height={26} />
            <h2 className="flex w-full text-lg">
              Email:
              <br />
              cjhuskerz@gmail.com
            </h2>
            
          </div>

          {/* Contact */}
          <div className="flex flex-row gap-x-4 mt-8 mb-8">
            <Image src="/contact.svg" alt="Contact Icon" width={26} height={26} />
            <h2 className="flex w-full text-lg">
              Contact:
              <br />
              +60177338896
            </h2>
          </div>

          {/* Website */}
          <div className="flex flex-row gap-x-4 mt-8 mb-8">
            <Image src="/globe-2.svg" alt="Website Icon" width={26} height={26} />
            <h2 className="flex flex-col w-full text-lg">  
              LinkedIn:
              <br/>
              <Link 
                href={"https://www.linkedin.com/in/jun-jie-chua/"} 
                target="_blank" 
                className="hover:underline decoration-[#5F9EA0] decoration-2">
                www.linkedin.com/in/
                jun-jie-chua/
              </Link>
            </h2>
          </div>
        </div>
        
      </div>

      <FiMenu size={28} className={`${isOpen ? "rotate-90" : "rotate-0"} fixed top-4 left-4 transition-all duration-300 scale-75 xl:top-6 xl:left-6 md:scale-100 xl:hidden z-50`} onClick={toggleSidebar}> {isOpen ? "Collapse" : "Expand"} </FiMenu>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-96 border-[#b48b77] border-r-4" : "w-0"
        } fixed top-0 left-0 xl:hidden bg-bg_color h-screen transition-all duration-300 flex flex-col overflow-hidden z-30`}
      >
        <div className="flex flex-col items-center justify-between pt-24">
          {/* Profile Picture */}
          <div className="flex flex-col items-center justify-between">
            <div className="rounded-full bg-[#5F9EA0] w-48 h-48">
              <Image 
                src={"/profile.jpg"}
                alt=""
                width={300}
                height={300}
                className="object-cover rounded-full"
              />
            </div>
            {/* Name */}
            <h2 className="text-3xl text-center pt-8">Chua Jun Jie (CJ)</h2>
          </div>

          <div className="flex flex-col pt-4">
            {/* Email */}
            <div className="flex flex-row gap-x-4 mt-8 mb-8">
              <Image src="/email.svg" alt="Email Icon" width={26} height={26} />
              <h2 className="flex w-full text-lg">
                Email:
                <br />
                cjhuskerz@gmail.com
              </h2>
              
            </div>

            {/* Contact */}
            <div className="flex flex-row gap-x-4 mt-8 mb-8">
              <Image src="/contact.svg" alt="Contact Icon" width={26} height={26} />
              <h2 className="flex w-full text-lg">
                Contact:
                <br />
                +60177338896
              </h2>
            </div>

            {/* Website */}
            <div className="flex flex-row gap-x-4 mt-8 mb-8">
              <Image src="/globe-2.svg" alt="Website Icon" width={26} height={26} />
              <h2 className="flex flex-col w-full text-lg">  
                LinkedIn:
                <br/>
                <Link 
                  href={"https://www.linkedin.com/in/jun-jie-chua/"} 
                  target="_blank" 
                  className="hover:underline decoration-[#5F9EA0] decoration-2">
                  www.linkedin.com/in/
                  jun-jie-chua/
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Right grid: Scrollable */}
      <div className="snap-y snap-mandatory overflow-y-scroll">

        {/* About Me */}
        <div id="about" className="snap-start h-screen flex flex-col text-2xl pt-12 pl-8 pr-8 gap-y-4 2xl:text-3xl sm:pt-16 sm:pl-12 sm:pr-12 sm:gap-y-12 md:pt-16 md:pl-16 md:pr-16 md:gap-y-16 lg:pt-24 lg:pl-24 lg:pr-24 lg:gap-y-24 2xl:pt-32 2xl:pl-32 2xl:pr-32 2xl:gap-y-24 relative bg-footer-pattern bg-right-bottom bg-no-repeat">
          {/* Title */}
          <div className="underline decoration-[#b48b77] underline-offset-4">About Me</div>
          {/* Content */}
          <p className="text-lg md:text-xl xl:text-2xl">
              Hello!  
              <br />
              <br />
              I am a recent software engineer graduate from Monash University Malaysia with a strong passion for software and web development. I&apos;m a quick learner and highly adaptable, always eager to contribute to team discussions and unafraid to ask questions to deepen my understanding. I&apos;m actively seeking opportunities in software engineering and software developer field, where I can apply my skills, continue to grow, and make a meaningful impact.
          </p>
          {/* Tech Stack */}
          <div className="flex flex-col gap-y-2">
            <div className="underline decoration-[#b48b77] underline-offset-4">Technical Skills</div>
            <div className="flex flex-row gap-x-3 gap-y-2 text-lg md:text-xl xl:text-2xl flex-wrap">
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">Git</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">RESTful API</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">Typescript</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">Javascript</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">Java</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">Python</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">HTML</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">Cascading Style Sheet (CSS)</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">Tailwind CSS</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">Nuxt.JS</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">Nest.JS</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">MySQL</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">PostgreSQL</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">Postman API</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">Docker</div>
              <div className="bg-[#9edbdf] w-fit px-2 rounded-md items-center justify-between">Software Development Life Cycle (SDLC)</div>
            </div>
          </div>
        </div>

        <div id="resume" className="snap-start h-screen flex flex-col text-2xl pt-12 pl-8 pr-8 gap-y-4 2xl:text-3xl sm:pt-16 sm:pl-12 sm:pr-12 sm:gap-y-12 md:pt-16 md:pl-16 md:pr-16 md:gap-y-16 lg:pt-24 lg:pl-24 lg:pr-24 lg:gap-y-16 xl:pt-24 xl:pl-24 xl:pr-24 xl:gap-y-16 2xl:pt-32 2xl:pl-32 2xl:pr-32 2xl:gap-y-16 relative bg-footer-pattern bg-right-bottom bg-no-repeat">
          {/* Title */}
          <div className="underline decoration-[#b48b77] underline-offset-4">Resume</div>
          <div className="grid grid-cols-[1fr_1fr]">

            <div className="flex flex-col gap-y-4">
              <h2 className="text-lg md:text-xl xl:text-2xl">Education</h2>
              
              <div className="flex flex-row gap-x-4 relative">
                <div className="flex items-start">
                  <Image src={"/graduation.svg"} alt="" width={60} height={60} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl xl:text-2xl">Monash University Malaysia</h3>
                  <div className="flex flex-col text-base xl:text-lg italic -space-y-2">
                    <p>Bachelor of Software Engineering (Honours)</p>
                    <p>Feb 2021 - Dec 2024</p>
                  </div>
                  <div className="flex flex-col text-base xl:text-lg italic -space-y-2">
                    <p>GPA: 3.375</p>
                    <p>WAM: 79.268</p>
                    <p>Higher Achiever Award</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-x-4 relative mt-16">
                <div className="flex items-start">
                  <Image src={"/graduation.svg"} alt="" width={60} height={60} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl xl:text-2xl">Sunway College</h3>
                  <div className="flex flex-col text-base xl:text-lg italic -space-y-2">
                    <p>Monash University Foundation Year (MUFY)</p>
                    <p>Feb 2020 - Dec 2020</p>
                  </div>
                  <div className="flex flex-col text-base xl:text-lg italic -space-y-2">
                    <p>Average: 91</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-x-4 relative mt-16">
                <div className="flex items-start">
                  <Image src={"/graduation.svg"} alt="" width={60} height={60} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl xl:text-2xl">Chong Hwa Independent High School</h3>
                  <div className="flex flex-col text-base xl:text-lg italic -space-y-2">
                    <p>High School</p>
                    <p>Jan 2015 - Dec 2019</p>
                  </div>
                  <div className="flex flex-col text-base xl:text-lg italic -space-y-2">
                    <p>SPM Result: 5A 5B</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-y-4">
              <h2 className="text-lg md:text-xl xl:text-2xl">Work Experience</h2>
              
              <div className="flex flex-row gap-x-4 relative">
                <div className="flex items-start">
                  <Image src={"/work.svg"} alt="" width={54} height={54} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl xl:text-2xl">Selangor Human Resource Development Centre (SHRDC)</h3>
                  <div className="flex flex-col text-base xl:text-lg italic -space-y-2">
                    <p>Software Engineering Internship</p>
                    <p>Nov 2023 - Feb 2024</p>
                  </div>
                  <div className="flex flex-col text-base xl:text-lg italic -space-y-2">
                    <p>- Client requirement analysis and negotiation.</p>
                    <p>- Customized and tailored software solutions to the clients under supervision.</p>
                    <p>- Integrated IoT solutions using NodeRED.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="portfolio" className="snap-start h-screen flex flex-col text-2xl pt-12 pl-8 pr-8 gap-y-4 2xl:text-3xl sm:pt-16 sm:pl-12 sm:pr-12 sm:gap-y-12 md:pt-16 md:pl-16 md:pr-16 md:gap-y-16 lg:pt-24 lg:pl-24 lg:pr-24 lg:gap-y-24 xl:pt-32 xl:pl-32 xl:pr-32 xl:gap-y-12 relative bg-footer-pattern bg-right-bottom bg-no-repeat">
          <div className="underline decoration-[#b48b77] underline-offset-4">Past Projects</div>
          <div className="grid grid-cols-2 h-fit bg-bg_color overflow-auto gap-4 pl-8 pr-8">
            {projects.map((project) => (
              <div key={project.id} className="border p-4 rounded-lg shadow-md min-h-72 overflow-hidden">
                <Link href={`/${project.id}`}>
                  <div className="flex flex-col gap-y-4 items-center">
                    <Image
                      src={project.image}
                      alt=""
                      width={300}
                      height={300}
                    />
                    <h2 className="text-center text-lg md:text-xl xl:text-2xl">{ project.title } ({ project.type })</h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
