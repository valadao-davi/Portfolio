import { ReactNode } from "react";
import TitleMini from "./TitleMini";


interface TitleAndSubProps {
    title: ReactNode;
    subtitle: ReactNode;
  }

function TitleAndSub({ title, subtitle }: TitleAndSubProps){
    return(
        <div className="w-11/12 flex flex-col gap-y-3 justify-center items-center">
          <TitleMini>{title}</TitleMini>
          <h4 className="text-xl text-[#d1d5db] max-[620px]:text-xs sm:text-lg min-[1540px]:text-2xl min-[2000px]:text-3xl">
            {subtitle}
          </h4>
        </div>
    )
}

export default TitleAndSub;