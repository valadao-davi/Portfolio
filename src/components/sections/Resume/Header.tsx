import ItemHeader from "./ItemHeader";

function Header(){
    return(
    <div className="flex flex-row h-20 w-12/12 content-center justify-end gap-11 px-9 py-5 z-50 fixed top-0 left-0 right-0  bg-[#030712]  max-[620px]:bg-black  max-[620px]:items-center  max-[620px]:flex-row">
        <ul className="flex flex-row gap-5 content-center">
            <ItemHeader>About</ItemHeader>
            <ItemHeader>Projects</ItemHeader>
            <ItemHeader>Contact</ItemHeader>
        </ul>
        <button className="bg-slate-50 w-fit h-fit p-2 rounded-md max-[620px]:p-1">
            <p className="text-[#111827] text-base max-[620px]:text-xs sm:text-sm font-medium">Download CV</p>
        </button>
      </div>
    )
}

export default Header;