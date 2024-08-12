import { useSelector } from "react-redux";
import FactItem from "./FactItem";
import { getFacts } from "../factsSlice";

function FactsList() {
  const facts = useSelector(getFacts);
  return (
    <section className="my-4 h-full w-full px-3 md:w-3/5 md:overflow-y-auto lg:w-3/4">
      <ul className="flex flex-col gap-4">
        {facts.map((item) => (
          <FactItem key={item.id} item={item} />
        ))}
      </ul>
      <p className="mt-2 p-2 pb-4 font-[Sono] text-xl">
        There are {facts.length} facts in the database for this category. Add
        your own!
      </p>
    </section>
  );
}

export default FactsList;
