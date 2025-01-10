import { PropsWithChildren } from "react";
import P from "../../PText";

function ItemSkill({ src, children }: PropsWithChildren<{ src: string }>) {
  return (
    <div className=" flex flex-col gap-y-4 w-fit items-center justify-center">
      <div className="w-16 h-16 flex items-center justify-center">
        <img className="h-full w-full " src={src} alt="" />
      </div>
      <div className="py-2">
        <P>{children}</P>
      </div>
    </div>
  );
}

export default ItemSkill;
