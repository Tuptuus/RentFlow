import React from "react";
// import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-14 w-full bg-white/80 font-sans sticky top-0 z-50 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl h-full mx-auto text-lg">
        <Link href="/">
          <div className="flex items-center justify-center text-2xl cursor-pointer">
            {/*<Car size={32} className={"text-blue-600"} />*/}
            <div className={"font-extrabold text-brand-dark"}>
              Rent<span className={"text-orange-600"}>Flow</span>
            </div>
          </div>
        </Link>
        <nav className="flex items-center justify-center gap-6 text-slate-600">
          {["Flota", "Lokalizacje", "FAQ", "Kontakt"].map((item) => (
            <Link
              key={item}
              href={item.toLowerCase()}
              className={
                "cursor-pointer hover:text-orange-600 hover:underline underline-offset-4 decoration-2 transition-all duration-150"
              }
            >
              {item}
            </Link>
          ))}
        </nav>
        {/*<div*/}
        {/*  className={"flex items-center justify-center gap-6 text-slate-600"}*/}
        {/*>*/}
        {/*  <p*/}
        {/*    className={*/}
        {/*      "cursor-pointer hover:text-orange-600 hover:underline underline-offset-4 decoration-2 transition-all duration-150"*/}
        {/*    }*/}
        {/*  >*/}
        {/*    Flota*/}
        {/*  </p>*/}
        {/*  <p*/}
        {/*    className={*/}
        {/*      "cursor-pointer hover:text-orange-600 hover:underline underline-offset-4 decoration-2 transition-all duration-150"*/}
        {/*    }*/}
        {/*  >*/}
        {/*    Lokalizacje*/}
        {/*  </p>*/}
        {/*  <p*/}
        {/*    className={*/}
        {/*      "cursor-pointer hover:text-orange-600 hover:underline underline-offset-4 decoration-2 transition-all duration-150"*/}
        {/*    }*/}
        {/*  >*/}
        {/*    FAQ*/}
        {/*  </p>*/}
        {/*  <p*/}
        {/*    className={*/}
        {/*      "cursor-pointer hover:text-orange-600 hover:underline underline-offset-4 decoration-2 transition-all duration-150"*/}
        {/*    }*/}
        {/*  >*/}
        {/*    Kontakt*/}
        {/*  </p>*/}
        {/*</div>*/}
        <Button
          asChild
          className={
            "bg-orange-600 p-4 text-base text-white hover:bg-orange-700! transition-all duration-150"
          }
        >
          <Link href="/">Zaloguj</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
