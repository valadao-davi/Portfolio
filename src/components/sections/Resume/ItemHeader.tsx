import { PropsWithChildren } from "react";

function ItemHeader(props: PropsWithChildren){

    return(
        <a className="flex justify-center" href=""><li className="text-[#d1d5db] content-center text-base max-[620px]:text-xs sm:text-sm font-medium  min-[1540px]:text-xl min-[2000px]:text-2xl">
            {props.children}
        </li></a>
    )
}

export default ItemHeader;