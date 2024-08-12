import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../factsSlice";
import Button from "./Button";
import { CATEGORIES } from "../../data/data-categories";

function ShareAFact() {
  const dispatch = useDispatch();
  const [newInfo, setNewInfo] = useState("");
  const [newLink, setNewLink] = useState("");
  const [options, setOptions] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newData = {
      id: Math.random(),
      text: newInfo,
      source: newLink,
      category: options,
      votesFalse: 0,
      votesInteresting: 0,
      votesMindblowing: 0,
    };
    dispatch(addItem(newData));
    setNewInfo("");
    setNewLink("");
    setOptions("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col gap-4 rounded-2xl bg-definedColor-base2 p-4 font-[Sono] text-sm md:justify-center md:gap-6 lg:flex-row lg:items-center"
    >
      <div className="flex basis-full gap-3 md:flex-row md:items-center">
        <input
          type="text"
          placeholder="Share a fact with me.."
          value={newInfo}
          onChange={(e) => setNewInfo(e.target.value)}
          className="input basis-full rounded-full bg-definedColor-base3 px-4 py-2 md:w-full"
          // className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          // class="input"
        />
        <label className="text-lg font-bold">200</label>
      </div>
      <input
        type="text"
        onChange={(e) => setNewLink(e.target.value)}
        placeholder="Trustworthy source..."
        className="basis-96 rounded-full bg-definedColor-base3 px-4 py-2"
      />
      <select
        defaultValue="Choose Category"
        onChange={(e) => setOptions(e.target.value)}
        className="basis-60 rounded-full bg-definedColor-base3 px-3 py-2"
      >
        <option disabled className="text-definedColor-base1">
          Choose Category
        </option>
        {CATEGORIES.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name.toUpperCase()}
          </option>
        ))}
        {/* <option value="technology">TECHNOLOGY</option>
        <option value="science">SCIENCE</option>
        <option value="finance">FINANCE</option>
        <option value="society">SOCIETY</option>
        <option value="entertainment">ENTERTAINMENT</option>
        <option value="health">HEALTH</option>
        <option value="news">NEWS</option>
        <option value="culture">CULTURE</option>
        <option value="sports">SPORTS</option> */}
      </select>
      <Button additionalStyles="basis-1/5 text-base font-['Coiny']">
        Post
      </Button>
    </form>
  );
}

export default ShareAFact;
