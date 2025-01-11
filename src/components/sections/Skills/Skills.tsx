import Section from "../../Section";
import TitleAndSub from "../../TitleAndSub";
import ItemSkill from "./ItemSkill";

function Skills() {
  return (
    <Section bgColor="#030712">
      <div className="w-10/12 pb-10 h-fit flex flex-col items-center gap-y-12">
        <TitleAndSub
          title={"Skills"}
          subtitle={"Frameworks, Languages, and Tools I Use: "}
        ></TitleAndSub>
        <div className="w-11/12 grid grid-cols-8 gap-4 max-[620px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8">
          <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
          <ItemSkill src="/vscode-icons--file-type-angular.svg">
            Angular
          </ItemSkill>
          <ItemSkill src="/devicon--nodejs.svg">Node.js</ItemSkill>
          <ItemSkill src="/vscode-icons--file-type-mongo.svg">
            MongoDB
          </ItemSkill>
          <ItemSkill src="/devicon--javascript.svg">Javascript</ItemSkill>
          <ItemSkill src="/devicon--tailwindcss.svg">TailWindCSS</ItemSkill>
          <ItemSkill src="/icon-express.svg">Express.js</ItemSkill>
          <ItemSkill src="/devicon--flutter.svg">Flutter</ItemSkill>
          <ItemSkill src="/devicon--java.svg">Java</ItemSkill>
          <ItemSkill src="/devicon--spring.svg">JavaSpring</ItemSkill>
          <ItemSkill src="/logos--react.svg">React</ItemSkill>
          <ItemSkill src="/devicon--firebase.svg">Firebase</ItemSkill>
          <ItemSkill src="/devicon--mysql.svg">MySQL</ItemSkill>
          <ItemSkill src="/devicon--python.svg">Python</ItemSkill>
          <ItemSkill src="/devicon--git.svg">Git</ItemSkill>
          <ItemSkill src="/logos--figma.svg">Figma</ItemSkill>
        </div>
      </div>
    </Section>
  );
}

export default Skills;
