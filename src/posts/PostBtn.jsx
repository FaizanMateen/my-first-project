function PostBtn({ children, type }) {
  const base =
    " rounded-full p-3 px-10 z-10 transition-all duration-300 hover:-rotate-3 hover:scale-110";

  const parent = {
    headerButton: base + " bg-red-700 w-auto hover:rotate-[360deg]",
  };

  return <button className={parent[type]}>{children}</button>;
}

export default PostBtn;
