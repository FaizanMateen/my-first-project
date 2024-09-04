import { useState } from "react";
import ShareAFact from "./ShareAFact";
import Themes from "./Themes";
import { COLOR_THEMES } from "../data/data-colorThemes";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { handleChangeTheme } = useTheme();

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="mb-8 flex flex-col justify-between gap-2 px-4 md:mb-0 md:flex-row md:items-center md:gap-20 md:px-0">
        <div className="mx-auto mb-8 flex flex-row items-center gap-6 py-5 sm:flex-row md:mx-0 md:mb-0 md:gap-2">
          <img className="h-16 w-16" src="logo.png" alt="logo" />
          <h1 className="flex items-center text-2xl font-extrabold uppercase text-definedColor-base sm:mx-0 sm:text-4xl">
            TODAY I LEARNED
          </h1>
        </div>
        <div className="flex justify-between gap-4">
          <div className="mb-4 flex items-center justify-center gap-10 md:mb-0 md:gap-4">
            {COLOR_THEMES.map((colors, idx) => (
              <Themes
                key={idx}
                theme={colors.theme}
                color={colors.color}
                onChangeTheme={handleChangeTheme}
              />
            ))}
          </div>
          {/* <Button onClick={handleClick} additionalStyles="text-xl basis-1/5">
            <span class="mb-8 text-xl font-semibold uppercase tracking-wider text-definedColor-base">
              {isOpen ? "Close" : "Share a fact"}
            </span>
          </Button> */}
          <button
            onClick={handleClick}
            additionalStyles="text-xl basis-1/5"
            class="gradient-background z-10 w-auto rounded-full p-3 px-10 transition-all duration-300 hover:-rotate-3 hover:scale-110"
          >
            {" "}
            <span class="mb-8 text-xl font-semibold uppercase tracking-wider text-definedColor-base">
              {isOpen ? "Close" : "Share a fact"}
            </span>
          </button>
        </div>
      </header>
      {isOpen && <ShareAFact />}
    </>
  );
}

export default Header;

//span:mb-8 bg-red-700 text-xl font-semibold uppercase tracking-wider text-definedColor-base
