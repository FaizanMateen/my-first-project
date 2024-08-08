function VoteButton({ onClick, emoji, votes }) {
  return (
    <button
      className="flex items-center gap-2 rounded-full bg-definedColor-base3 px-3 py-1 text-lg transition-all hover:bg-definedColor-base-hover disabled:bg-definedColor-base2"
      onClick={onClick}
    >
      <span>{emoji}</span>
      <span>{votes}</span>
    </button>
  );
}

export default VoteButton;
