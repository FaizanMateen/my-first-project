import PostBtn from "./PostBtn";

function Header() {
  return (
    <div className="mb-8 flex flex-col justify-between gap-2 px-4 md:mb-0 md:flex-row md:items-center md:gap-20 md:px-0">
      <div className="item-center mx-auto mb-8 flex flex-row gap-6 py-5 sm:flex-row md:mx-0 md:mb-0 md:gap-2">
        <img className="h-16 w-16" src="../../public/logo.png" alt="logo" />
        <h1 className="flex items-center text-2xl font-extrabold uppercase text-definedColor-base sm:mx-0 sm:text-4xl">
          TODAY I LEARNED
        </h1>
      </div>
      <PostBtn type="headerButton">
        <span className="mb-8 bg-red-700 text-xl font-semibold uppercase tracking-wider text-definedColor-base">
          Share a fact
        </span>
      </PostBtn>
    </div>
  );
}

export default Header;

//span:mb-8 bg-red-700 text-xl font-semibold uppercase tracking-wider text-definedColor-base
