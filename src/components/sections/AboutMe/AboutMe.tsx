import P from "../../PText";

function AboutMe() {
  return (
    <div className="bg-[#111827] w-screen h-fit flex pb-14 pt-28 justify-center  max-[620px]:pt-14 max-[620px]:pb-7">
      <div className="w-10/12 h-fit flex flex-col gap-y-8 items-center justify-center">
        <div className="w-11/12 flex justify-center">
          <div className="py-1 px-4  bg-[#374151] flex justify-center rounded-xl">
            <P>About me</P>
          </div>
        </div>
        <div className="w-11/12 h-fit flex flex-row gap-x-12 max-[620px]:flex-col max-[620px]:gap-y-12 max-[620px]:items-center">
          <div className="w-6/12 max-[620px]:w-full max-[620px]:flex max-[620px]:justify-center">
            <div className="h-fit w-10/12  flex justify-end max-[620px]:justify-center">
              <div className="relative w-10/12 max-[620px]:w-8/12 md:max-w-md lg:max-w-lg aspect-square">
                <div className="absolute top-7 right-7 w-full h-full bg-gray-700"></div>

                <img
                  className="absolute w-full h-full object-cover"
                  src="/formatura.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-6/12 flex flex-col gap-y-6 max-[620px]:w-full">
            <h3 className="text-[#f9fafb] text-4xl max-[620px]:text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">
              Know more about my person:
            </h3>
            <div className="flex flex-col gap-y-4">
              <P>
                I'm a passionate full-stack developer specializing in Angular,
                Node.js, TypeScript, and MongoDB, with a strong focus on backend
                development. I’m always eager to learn, currently exploring
                React and Java to broaden my skills. My love for programming
                stems from its rewarding learning curve, and I thrive on solving
                problems and delivering optimal solutions.
              </P>

              <P>
                My journey began at age 12 with Python, sparking my passion for
                this field. At 16, I formalized my studies through a technical
                course at SENAI, where I worked on diverse projects, including
                my capstone project, which remains a significant milestone in my
                career.
              </P>

              <P>
                Currently, I’m wrapping up Soundbrary, my most ambitious project
                to date, which is in the testing phase and soon to be deployed.
                My portfolio is ever-growing, with highlights like a Node.js
                Spotify API integration project used in Soundbrary.
              </P>
              <P>
                I thrive in collaborative environments. My capstone experience
                involved constant teamwork, fostering knowledge sharing and
                minimizing errors. Outside of programming, I enjoy playing
                guitar and acoustic guitar, diving into classic single-player
                games, and watching anime and series.
              </P>
              <P>
                You can find me sharing achievements and projects on LinkedIn
                and showcasing my work on GitHub. I’m open to freelance
                opportunities, particularly in web application development,
                always ready to embrace new challenges. In the future, I see
                myself as a backend developer contributing creative solutions
                and perhaps leading innovative products. Let’s build something
                amazing together! 🚀
              </P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
