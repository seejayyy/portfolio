import Image from "next/image";
import Link from "next/link";
import projects from "./projectData";

export default function Home() {
  return (
    <div className="grid grid-cols-[17.5fr_82.5fr] h-screen bg-bg_color">
      {/* Left grid: Fixed and sticky */}
      <div className="sticky top-0 h-screen border-[#b48b77] border-r-4 p-16 flex flex-col ">
        {/* Profile Picture */}
        <div className="flex flex-col items-center justify-between">
          <div className="rounded-full bg-[#5F9EA0] w-48 h-48"></div>
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

      {/* Right grid: Scrollable */}
      <div className="snap-y snap-mandatory overflow-y-scroll">

        {/* About Me */}
        <div id="about" className="snap-start h-screen flex text-3xl flex-col pt-32 pl-32 pr-32 gap-y-24 relative bg-footer-pattern bg-right-bottom bg-no-repeat">
          {/* Title */}
          <div className="underline decoration-[#5F9EA0] underline-offset-4">About Me</div>
          {/* Content */}
          <p className="text-2xl">
              Hello!  
              <br />
              <br />
              I am a recent software engineer graduate from Monash University Malaysia with a strong passion for software and web development. I&apos;m a quick learner and highly adaptable, always eager to contribute to team discussions and unafraid to ask questions to deepen my understanding. I&apos;m actively seeking opportunities in software engineering and software developer field, where I can apply my skills, continue to grow, and make a meaningful impact.
          </p>
          {/* Tech Stack */}
          <div className="flex flex-col gap-y-2">
            <div className="underline decoration-[#5F9EA0] underline-offset-4">Technical Skills</div>
            <div className="flex flex-row gap-x-3 gap-y-2 text-2xl flex-wrap">
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

        <div id="resume" className="snap-start h-screen flex text-3xl flex-col pt-32 pl-32 pr-32 gap-y-24 relative bg-footer-pattern bg-right-bottom bg-no-repeat">
          {/* Title */}
          <div className="underline decoration-[#5F9EA0] underline-offset-4">Resume</div>
          <div className="grid grid-cols-[1fr_1fr] bg-bg_color">

            <div className="flex flex-col gap-y-4">
              <h2 className="text-2xl">Education</h2>
              
              <div className="flex flex-row gap-x-4 relative">
                <div className="flex items-start">
                  <Image src={"/graduation.svg"} alt="" width={60} height={60} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl">Monash University Malaysia</h3>
                  <div className="flex flex-col text-lg italic -space-y-2">
                    <p>Bachelor of Software Engineering (Honours)</p>
                    <p>Feb 2021 - Dec 2024</p>
                  </div>
                  <div className="flex flex-col text-lg italic -space-y-2">
                    <p>GPA: 3.5</p>
                    <p>WAM: 79.1</p>
                    <p>Higher Achiever Award</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-x-4 relative mt-16">
                <div className="flex items-start">
                  <Image src={"/graduation.svg"} alt="" width={60} height={60} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl">Sunway College</h3>
                  <div className="flex flex-col text-lg italic -space-y-2">
                    <p>Monash University Foundation Year (MUFY)</p>
                    <p>Feb 2020 - Dec 2020</p>
                  </div>
                  <div className="flex flex-col text-lg italic -space-y-2">
                    <p>Average: 91</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-x-4 relative mt-16">
                <div className="flex items-start">
                  <Image src={"/graduation.svg"} alt="" width={60} height={60} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl">Chong Hwa Independent High School</h3>
                  <div className="flex flex-col text-lg italic -space-y-2">
                    <p>High School</p>
                    <p>Jan 2015 - Dec 2019</p>
                  </div>
                  <div className="flex flex-col text-lg italic -space-y-2">
                    <p>SPM Result: 5A 5B</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-y-4">
              <h2 className="text-2xl">Work Experience</h2>
              
              <div className="flex flex-row gap-x-4 relative">
                <div className="flex items-start">
                  <Image src={"/work.svg"} alt="" width={54} height={54} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl">Selangor Human Resource Development Centre (SHRDC)</h3>
                  <div className="flex flex-col text-lg italic -space-y-2">
                    <p>Software Engineering Internship</p>
                    <p>Nov 2023 - Feb 2024</p>
                  </div>
                  <div className="flex flex-col text-lg italic -space-y-2">
                    <p>- Client requirement analysis and negotiation.</p>
                    <p>- Customized and tailored software solutions to the clients under supervision.</p>
                    <p>- Integrated IoT solutions using NodeRED.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="portfolio" className="snap-start h-screen flex text-3xl flex-col pt-32 pl-32 pr-32 gap-y-12 relative bg-footer-pattern bg-right-bottom bg-no-repeat">
          <div className="underline decoration-[#5F9EA0] underline-offset-4">Past Projects</div>
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
                    <h2 className="text-center">{ project.title } ({ project.type })</h2>
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
