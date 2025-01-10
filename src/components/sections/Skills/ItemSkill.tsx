import { PropsWithChildren } from "react";
import P from "../../PText";

function ItemSkill({src, children}: PropsWithChildren<{src: string}>) {
  return (
    <div className=" flex flex-col gap-y-2 w-fit items-center justify-center">
      <div className="w-16 h-16">
        <img className="h-full w-full object-cover" src={src} alt="" />
      </div>
      <P>{children}</P>
    </div>
  );
}

export default ItemSkill;
