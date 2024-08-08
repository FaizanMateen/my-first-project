import { CATEGORIES } from "../../data/data-categories";
import Button from "./Button";

function CategoryList() {
  return (
    <aside className="my-4 w-full px-4 md:w-2/5 md:overflow-y-auto lg:w-1/4">
      <ul className="flex flex-col gap-4">
        <li>
          <Button>
            <span className="text-md font-semibold uppercase tracking-wider text-definedColor-base">
              ALL
            </span>
          </Button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name}>
            <Button color={cat.color}>{cat.name.toUpperCase()}</Button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryList;
