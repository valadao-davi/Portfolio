import { PropsWithChildren } from "react";

interface SectionProps{
    bgColor: string;
}

function Section({bgColor, children}: PropsWithChildren<SectionProps>){

    return(
        <div className= {`bg-[${bgColor}] w-screen h-fit flex flex-col gap-y-20 pb-14 pt-20 items-center max-[620px]:pt-10 max-[620px]:pb-7`}>
            {children}
        </div>
    )
}

export default Section;