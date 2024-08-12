import { useDispatch } from "react-redux";
import { CATEGORIES } from "../data/data-categories";
import Button from "./Button";
import { filter } from "../factsSlice";

function CategoryList() {
  const dispatch = useDispatch();
  return (
    <aside className="w-full px-4 md:w-2/5 md:overflow-y-auto lg:w-1/4">
      <ul className="flex flex-col gap-4">
        <li>
          <Button onClick={() => dispatch(filter("all"))}>All</Button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name}>
            <Button
              onClick={() => dispatch(filter(cat.name))}
              color={cat.color}
            >
              {cat.name}
            </Button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryList;
