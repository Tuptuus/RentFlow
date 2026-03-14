import React from "react";
import { Car } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="h-14 bg-red-500 w-full">
        <div className="flex items-center justify-between bg-pink-500 max-w-7xl h-full mx-auto">
          <div className="flex items-center justify-center text-white bg-blue-500">
            <Car className={""} />
            <div className={""}>HEADER</div>
          </div>
          <div
            className={
              "bg-yellow-500 flex items-center justify-center text-white gap-6"
            }
          >
            <p className={"cursor-pointer hover:underline"}>Flota</p>
            <p className={"cursor-pointer hover:underline"}>Cennik</p>
            <p className={"cursor-pointer hover:underline"}>FAQ</p>
            <p className={"cursor-pointer hover:underline"}>Kontakt</p>
          </div>
          <div className={"bg-green-500"}>
            <p>Zaloguj</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
