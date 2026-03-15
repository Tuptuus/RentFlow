import React from "react";
import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="h-14 w-full bg-gray-200">
        <div className="flex items-center justify-between max-w-7xl h-full mx-auto text-lg">
          <Link href="/">
            <div className="flex items-center justify-center text-xl cursor-pointer">
              <Car size={32} className={"text-blue-600"} />
              <div className={"font-bold"}>RentFlow</div>
            </div>
          </Link>
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
          <Button
            asChild
            className={
              "bg-slate-900 p-4 text-base text-white hover:bg-slate-700 transition-all duration-150"
            }
          >
            <Link href="/">Zaloguj</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
