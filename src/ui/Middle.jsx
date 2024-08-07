import { CATEGORIES } from "../../data/data-categories";
import { FACTS } from "../../data/data-facts";
import Button from "./Button";

function Middle() {
  // const data = FACT;
  // const pureData = JSON.stringify(data);
  // console.log(pureData);
  //   console.log(FACT);
  // const noClone = data.filter(
  //   (cat, index) =>
  //     data.findIndex((item) => item.category === cat.category) === index,
  // );
  //   console.log(noClone);
  return (
    <main className="flex w-full flex-col gap-6 md:flex-row md:overflow-hidden lg:gap-9">
      <aside className="my-4 w-full px-4 md:w-2/5 md:overflow-y-auto lg:w-1/4">
        <ul className="flex flex-col gap-2">
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

      <section className="my-4 w-full px-3 md:w-3/5 md:overflow-y-auto lg:w-3/4">
        <article className="h-full w-full">
          <ul className="flex flex-col gap-4">
            {FACTS.map((item) => (
              <li key={item.id}>
                <div className="flex flex-row items-end justify-start gap-4 rounded-2xl bg-definedColor-base2 p-3 font-[Sono] text-definedColor-base xl:flex-row xl:items-center">
                  <p className="basis-96 self-start text-xl">
                    {item.text}
                    <a
                      href={item.source}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-500 active:text-blue-950"
                    >
                      {" "}
                      (Source)
                    </a>
                  </p>
                  {/* className='m-auto justify-self-center rounded-full bg-definedColor-accent5 px-4 pt-1 font-["Coiny"] text-sm uppercase text-definedColor-base' */}

                  <span className='m-auto justify-self-center rounded-full bg-definedColor-accent5 px-4 pt-1 font-["Coiny"] text-sm uppercase text-definedColor-base'>
                    {item.category}
                  </span>
                  {/* <Category /> */}

                  <div className="flex gap-4">
                    <div>
                      <button className="flex items-center gap-3 rounded-full bg-definedColor-base3 px-3 py-1 text-lg transition-all hover:bg-definedColor-base-hover disabled:bg-definedColor-base2">
                        <span>👍</span>
                        <span>{item.votesInteresting}</span>
                      </button>
                    </div>

                    <div>
                      <button className="flex items-center gap-2 rounded-full bg-definedColor-base3 px-3 py-1 text-lg transition-all hover:bg-definedColor-base-hover disabled:bg-definedColor-base2">
                        <span>🤯</span>
                        <span>{item.votesMindblowing}</span>
                      </button>
                    </div>

                    <div>
                      <button className="flex items-center gap-2 rounded-full bg-definedColor-base3 px-3 py-1 text-lg transition-all hover:bg-definedColor-base-hover disabled:bg-definedColor-base2">
                        <span>⛔</span>
                        <span>{item.votesMindblowing}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-2 p-2 pb-4 font-[Sono] text-xl">
            There are 24 facts in the database for this category. Add your own!
          </p>
        </article>
      </section>
    </main>
  );
}

export default Middle;
