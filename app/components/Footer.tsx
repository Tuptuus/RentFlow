import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 md:gap-8">
        <div className="col-span-5 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">RentFlow</h2>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Premium Car Rental - Twój partner w drodze do luksusu i
            niezapomnianych wrażeń.
          </p>
        </div>

        <div className="col-span-2 flex flex-col gap-4">
          <Link
            href=""
            className="text-slate-400 hover:text-white transition-colors"
          >
            Regulamin
          </Link>
          <Link
            href=""
            className="text-slate-400 hover:text-white transition-colors"
          >
            Kariera
          </Link>
        </div>

        <div className="col-span-2 flex flex-col gap-4">
          <Link
            href=""
            className="text-slate-400 hover:text-white transition-colors"
          >
            Polityka Prywatności
          </Link>
          <Link
            href=""
            className="text-slate-400 hover:text-white transition-colors"
          >
            Pomoc
          </Link>
        </div>

        <div className="col-span-3 flex flex-col justify-start text-slate-400">
          <p className="text-right">
            © 2026 RentFlow. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
