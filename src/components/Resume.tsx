import { Dot, Github, Linkedin, MapPin } from "lucide-react";
import Header from "./Header";
import P from "./PText";
import H1 from "./H1Text";

function Resume() {
  return (
    <div className="bg-[#030712] w-screen h-fit flex flex-col gap-y-20 pb-14 pt-40  max-[620px]:pt-20 max-[620px]:pb-7" >
      <Header />
      <div className="px-5 py-6 flex justify-center">
        <div className=" w-10/12 h-fit flex flex-row gap-x-12 max-[620px]:flex-col-reverse max-[620px]:gap-y-12 ">
          <div className="flex flex-col w-8/12 justify-start gap-y-12 max-[620px]:w-11/12  max-[620px]:gap-y-8">
            <div className="flex flex-col gap-2">
              <H1 >
                Hi, I'm Davi 👋
              </H1>
              <P>
                I'm a full-stack developer skilled in Angular, TypeScript, and
                Node.js, passionate about creating responsive, user-focused
                applications. Exploring Java and React, I believe there’s no
                "right" technology—only the ideal one for each project. Ready to
                start my career, I’m eager to dive into this field I love and
                bring ideas to life.
              </P>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-row gap-2">
                <MapPin className="text-white" />
                <P>São Paulo, Brazil</P>
              </div>
              <div className="flex flex-row gap-2">
                <Dot className="text-[#10B981] transform scale-200" />
                <P>
                  Looking for my first opportunity
                </P>
              </div>
            </div>
            <div className="flex flex-row gap-x-4">
              <a href="https://github.com/valadao-davi" target="_blank">
                <Github className="text-white" />
              </a>
              <a href="https://www.linkedin.com/in/davi-silva-valadão-128173293" target="_blank">
                <Linkedin className="text-white" />
              </a>
            </div>
          </div>
          <div className="h-fit w-full md:w-4/12 flex justify-end max-[620px]:justify-center">
            <div className="relative w-10/12 max-[620px]:w-8/12  max-w-sm md:max-w-md lg:max-w-lg aspect-square">
              <div className="absolute top-3 left-3 w-full h-full bg-gray-700"></div>

              <img
                className="absolute w-full h-full object-cover"
                src="/DSV-FOTO-LINKEDIN.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
