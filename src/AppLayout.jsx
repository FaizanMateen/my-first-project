import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Middle from "./ui/Middle";

function AppLayout() {
  return (
    <div className="flex flex-col justify-between gap-6 md:h-screen md:gap-4">
      <div className="mx-auto flex w-screen flex-col px-4 pt-2 text-definedColor-base md:overflow-hidden xl:w-[80rem]">
        <Header />
        <Middle />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
