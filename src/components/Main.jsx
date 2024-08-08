import CategoryList from "./CategoryList";
import FactsList from "./FactsList";

function Main() {
  return (
    <main className="flex w-full flex-col gap-6 md:flex-row md:overflow-hidden lg:gap-9">
      <CategoryList />
      <FactsList />
    </main>
  );
}

export default Main;
