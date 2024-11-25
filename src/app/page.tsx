import Image from "next/image";
import Link from "next/link";

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
        <div className="snap-start h-screen flex text-3xl flex-col pt-32 pl-32 pr-32 gap-y-24 relative">
          {/* Title */}
          <div className="underline decoration-[#5F9EA0] underline-offset-4">About Me</div>
          {/* Content */}
          <p className="text-2xl">
              Hello!  
              <br />
              <br />
              I am a recent software engineer graduate from Monash University Malaysia with a strong passion for software and web development. I'm a quick learner and highly adaptable, always eager to contribute to team discussions and unafraid to ask questions to deepen my understanding. I'm actively seeking opportunities in software engineering and software developer field, where I can apply my skills, continue to grow, and make a meaningful impact.
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

          <Image 
            src={"/footer-pattern.svg"}
            alt="Footer Pattern"
            width={1000}
            height={1600}
            className="absolute bottom-0 right-0 "
          />


        </div>

        <div className="snap-start h-screen flex text-3xl flex-col pt-32 pl-32 pr-32 gap-y-24 relative">
          {/* Title */}
          <div className="underline decoration-[#5F9EA0] underline-offset-4">Resume</div>


          <Image 
              src={"/footer-pattern.svg"}
              alt="Footer Pattern"
              width={1000}
              height={1600}
              className="absolute bottom-0 right-0"
            />
        </div>

        <div className="snap-start h-screen flex text-3xl flex-col pt-32 pl-32 pr-32 gap-y-24 relative">
          <div className="underline decoration-[#5F9EA0] underline-offset-4">Past Projects</div>

          <Image 
              src={"/footer-pattern.svg"}
              alt="Footer Pattern"
              width={1000}
              height={1600}
              className="absolute bottom-0 right-0"
            />
        </div>
      </div>
    </div>
  );
}
