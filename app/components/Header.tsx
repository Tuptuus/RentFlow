import React from "react";
import { Car } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="h-14 w-full bg-gray-200">
        <div className="flex items-center justify-between max-w-7xl h-full mx-auto text-lg">
          <div className="flex items-center justify-center text-xl cursor-pointer">
            <Car className={"text-blue-600"} />
            <div className={"font-bold"}>RentFlow</div>
          </div>
          <div
            className={"flex items-center justify-center gap-6 text-slate-600"}
          >
            <p
              className={
                "cursor-pointer hover:text-blue-600 transition-all duration-150"
              }
            >
              Flota
            </p>
            <p className={"cursor-pointer hover:text-blue-600"}>Cennik</p>
            <p className={"cursor-pointer hover:text-blue-600"}>FAQ</p>
            <p className={"cursor-pointer hover:text-blue-600"}>Kontakt</p>
          </div>
          <div className={""}>
            <p>Zaloguj</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
