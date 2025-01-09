import { PropsWithChildren } from "react";

function ItemHeader(props: PropsWithChildren){

    return(
        <a className="flex justify-center" href=""><li className="text-[#d1d5db] content-center text-base max-[620px]:text-xs sm:text-sm font-medium">
            {props.children}
        </li></a>
    )
}

export default ItemHeader;