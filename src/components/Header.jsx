import { useState } from "react";
import ShareAFact from "./ShareAFact";
import Button from "./Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="mb-8 flex flex-col justify-between gap-2 px-4 md:mb-0 md:flex-row md:items-center md:gap-20 md:px-0">
        <div className="mx-auto mb-8 flex flex-row items-center gap-6 py-5 sm:flex-row md:mx-0 md:mb-0 md:gap-2">
          <img className="h-16 w-16" src="logo.png" alt="logo" />
          <h1 className="flex items-center text-2xl font-extrabold uppercase text-definedColor-base sm:mx-0 sm:text-4xl">
            TODAY I LEARNED
          </h1>
        </div>
        <Button onClick={handleClick} additionalStyles="text-xl basis-1/5">
          {isOpen ? "Close" : "Share a fact"}
        </Button>
      </div>
      {isOpen && <ShareAFact />}
    </>
  );
}

export default Header;

//span:mb-8 bg-red-700 text-xl font-semibold uppercase tracking-wider text-definedColor-base
