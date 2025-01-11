import P from "../../PText";
import Section from "../../Section";
import TitleAndSub from "../../TitleAndSub";
import TitleMini from "../../TitleMini";

function Projects() {
  return (
    <Section bgColor="#111827">
      <div className=" w-10/12 h-fit flex flex-col gap-y-12 items-center">
        <TitleAndSub
          title="Work"
          subtitle="Some projects that define my work:"
        />
        <div className="w-11/12 flex flex-row justify-center bg-[#1f2937] rounded-xl max-[900px]:flex-col max-[900px]:w-full">
          <div className=" max-[900px]:w-full w-6/12 bg-[#374151] p-6 max-[900px]:rounded-t-xl min-[900px]:rounded-l-xl overflow-hidden">
            <div className="overflow-hidden rounded-lg">
              <img
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-200"
                src="/soundbrary.png"
                alt="Soundbrary Project"
              />
            </div>
          </div>
          <div className=" max-[900px]:w-full w-6/12 p-4 max-[900px]:rounded-b-xl min-[900px]:rounded-r-xl min-[900px]:p-12 overflow-hidden">
            <div className="flex flex-col gap-3">
              <h4 className="text-xl text-[#f3f4f6] font-semibold">
                Soundbrary
              </h4>
              <P>
                SoundBrary is a collaborative platform for creating "dissays"
                (musical articles) aimed at music enthusiasts, musicians, and
                producers. It provides in-depth details about instrument
                settings, effects, and tonalities, allowing users to explore the
                creative process. Built with Express, Spotify API, MongoDB, and
                JWT authentication, it enables music exploration and
                collaboration. The platform offers an interactive space for
                sharing, analyzing, and discussing music, with customizable
                privacy settings and an intuitive interface.
              </P>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
                <TitleMini>Angular</TitleMini>
                <TitleMini>Node.js</TitleMini>
                <TitleMini>Typescript</TitleMini>
                <TitleMini>Express.js</TitleMini>
                <TitleMini>Mongo.db</TitleMini>
                <TitleMini>API REST</TitleMini>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
