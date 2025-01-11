import Section from "../../Section";
import P from "../../PText";
import TitleMini from "../../TitleMini";

function AboutMe() {
  return (
    <Section bgColor="#111827">
      <div className="w-10/12 h-fit flex flex-col pt-2 pb-8 gap-y-20 max-[900px]:gap-y-10 items-center justify-center">
        <TitleMini>About me</TitleMini>
        <div className="w-11/12 h-fit flex flex-row gap-x-12 max-[900px]:flex-col max-[900px]:gap-y-12 max-[900px]:items-center">
          <div className="w-6/12 max-[900px]:w-full max-[620px]:flex max-[620px]:justify-center">
            <div className="h-fit w-10/12 flex justify-end max-[620px]:justify-center">
              <div className="relative w-10/12 max-[620px]:w-9/12 max-[680px]:w-full   md:max-w-md lg:max-w-xl xl:max-w-2xl aspect-square">
                <div className="absolute top-7 right-7 w-full h-full bg-gray-700"></div>

                <img
                  className="absolute w-full h-full object-cover"
                  src="/formatura.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-6/12 flex flex-col gap-y-6 max-[900px]:w-full">
            <h3 className="text-[#f9fafb] text-4xl max-[620px]:text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
              Know more about my person:
            </h3>
            <div className="flex flex-col gap-y-4">
              <P>
                👨‍💻 <strong>Professional Resume:</strong> I’m a full-stack developer specializing
                in Angular, Node.js, TypeScript, and MongoDB, with a strong
                focus on backend development. I’m always eager to learn and
                currently expanding my skills with React and Java. What I love
                most about programming is its rewarding learning curve—it’s all
                about solving problems, overcoming challenges, and delivering
                efficient solutions.
              </P>

              <P>
                🚀 <strong>My Programming Journey:</strong> It all began at age 12 with Python,
                sparking my passion for this field. At 16, I formalized my
                studies through a technical course at SENAI, where I worked on
                diverse projects, including my capstone project, which remains a
                significant milestone in my career. Nowadays, I’m continuing my
                learning journey at FATEC College, where I’m diving deeper into
                software development.
              </P>

              <P>
                🎯 <strong>Current Focus:</strong> Currently, I’m putting the finishing touches
                on Soundbrary, my most ambitious project so far, which is now in
                the testing phase and getting ready to go live. My portfolio is
                always growing, but a highlight has to be the Node.js Spotify
                API integration I developed, which became an integral part of
                this very application.
              </P>

              <P>
                🤝 <strong>Collaboration Matters:</strong> I thrive in collaborative
                environments. During my capstone project, teamwork was
                essential, fostering knowledge sharing and catching errors
                early. I truly believe collaboration is where innovation and
                growth happen, and it’s the kind of environment I love to be
                part of.
              </P>

              <P>
                🎸 <strong>Beyond the Code:</strong> Outside of programming, I am an extroverted
                individual with a passion for learning new things. This drive
                extends beyond technology to various interests, including
                practicing guitar, playing single-player games, and enjoying
                listening to music, especially rock, which inspires me
                creatively and offers moments of energy.
              </P>

              <P>
                🌐 <strong>Let’s Connect:</strong> You can check out my work on LinkedIn or
                GitHub, where I share projects and achievements. I’m open to
                freelance opportunities, particularly in web application
                development. In the future, I see myself as a backend developer
                contributing creative solutions and potentially leading
                innovative products. Let’s connect and build something great
                together! 😁
              </P>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
export default AboutMe;
