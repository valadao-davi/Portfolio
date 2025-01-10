import TitleMini from "../../TitleMini";
import ItemSkill from "./ItemSkill";

function Skills() {
  return (
    <div className="bg-[#030712] w-screen h-fit flex pb-14 pt-28 justify-center  max-[620px]:pt-14 max-[620px]:pb-7">
      <div className="w-10/12 h-fit flex flex-col items-center gap-y-12">
        <div className="w-11/12 flex flex-col gap-y-3 justify-center items-center">
          <TitleMini>Skills</TitleMini>
          <h4 className="text-lg text-[#d1d5db] max-[620px]:text-xs">
            Skills and Technologies That Define My Work:
          </h4>
        </div>
        <div className="w-11/12 flex flex-col gap-y-12 justify-center items-center">
            <div className="w-full flex flex-row justify-between">
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
            </div>
            <div className="w-full flex flex-row justify-between">
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
                <ItemSkill src="/icon-typescript.svg">Typescript</ItemSkill>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
