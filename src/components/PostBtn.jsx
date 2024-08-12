function PostBtn({ children, type, onClick }) {
  const base =
    " bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600 z-10 w-auto rounded-full p-3 px-10 font-['Coiny'] transition-all duration-300  hover:scale-110 hover:scale-125";

  const parent = {
    headerButton: base + " bg-red-700 w-auto hover:rotate-[360deg]",
  };

  return (
    <button onClick={onClick} className={parent[type]}>
      {children}
    </button>
  );
}

export default PostBtn;
