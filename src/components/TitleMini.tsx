import { PropsWithChildren } from "react";
import P from "./PText";

function TitleMini(props: PropsWithChildren){
    return (
        <div className="w-fit py-1 px-5  bg-[#374151] flex justify-center rounded-2xl">
            <P>{props.children}</P>
          </div>
    )
}

export default TitleMini;