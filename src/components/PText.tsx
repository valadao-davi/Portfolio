import { PropsWithChildren } from "react";

function P(props: PropsWithChildren){
    return(
        <p  className="text-[#d1d5db]  text-base max-[620px]:text-xs sm:text-sm min-[1540px]:text-xl min-[2000px]:text-2xl">{props.children}</p>
    );
}

export default P;