import { PropsWithChildren } from "react";

function P(props: PropsWithChildren){
    return(
        <p  className="text-[#d1d5db] text-base max-[620px]:text-xs sm:text-sm">{props.children}</p>
    );
}

export default P;