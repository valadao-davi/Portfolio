import { PropsWithChildren } from "react";

function H1(props: PropsWithChildren){

    return(
        <h1 className="text-[#f9fafb] text-6xl max-[620px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">{props.children}</h1>
    )
}

export default H1;