import { useDispatch } from "react-redux";
import VoteButton from "./VoteButton";
import { increment } from "../factsSlice";
import { CATEGORIES } from "../data/data-categories";

function FactItem({ item }) {
  const dispatch = useDispatch();
  const {
    id,
    text,
    source,
    category,
    votesFalse,
    votesInteresting,
    votesMindblowing,
  } = item;

  const votesTrue = votesInteresting + votesMindblowing;

  const categoryColor = CATEGORIES.find((item) => item.name === category).color;
  // console.log(categoryColor);

  return (
    <li>
      <div className="flex flex-col items-end justify-start gap-4 rounded-2xl bg-definedColor-base2 p-3 font-[Sono] text-definedColor-base xl:flex-row xl:items-center">
        <p className="self-start text-xl md:basis-96">
          {votesTrue < votesFalse && (
            <span className="font-bold text-red-600">⛔[DISPUTED]&nbsp;</span>
          )}

          {text}
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="text-definedColor-faded hover:text-blue-500 active:text-blue-950"
          >
            (Source)
          </a>
        </p>

        <span
          className={`m-auto justify-self-center rounded-full px-4 pt-1 font-["Coiny"] text-sm uppercase ${categoryColor}`}
        >
          {category}
        </span>

        <div className="flex gap-4 self-center">
          <VoteButton
            emoji="👍"
            votes={votesInteresting}
            onClick={() =>
              dispatch(increment({ id, votes: "votesInteresting" }))
            }
          />
          <VoteButton
            emoji="🤯"
            votes={votesMindblowing}
            onClick={() =>
              dispatch(increment({ id, votes: "votesMindblowing" }))
            }
          />
          <VoteButton
            emoji="⛔"
            votes={votesFalse}
            onClick={() => dispatch(increment({ id, votes: "votesFalse" }))}
          />
        </div>
      </div>
    </li>
  );
}

export default FactItem;
