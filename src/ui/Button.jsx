function Button({ children, type, color }) {
  // const base =
  //   " rounded-full p-3 px-10 z-10 transition-all duration-300 hover:-rotate-3 hover:scale-110";

  // const emojiStyle =
  //   "flex items-center gap-3 rounded-full bg-definedColor-base3 px-4 py-1 text-lg transition-all hover:bg-definedColor-base-hover disabled:bg-definedColor-base2";

  // const catBtn =
  //   "m-auto justify-self-center rounded-full bg-definedColor-accent5 px-4 pt-1 font-Coiny text-sm uppercase text-definedColor-base";

  // const style = {
  //   headerButton: base + " bg-red-700 w-auto hover:rotate-[360deg]",
  //   asideButton: base + " bg-yellow-700 w-full",
  //   technologyButton: base + " bg-blue-700 w-full",
  //   scienceButton: base + " bg-orange-600 w-full",
  //   financeButton: base + " bg-blue-600 w-full",
  //   societyBtn: base + " bg-yellow-700 w-full",
  //   entertainmentbtn: base + " bg-pink-600 w-full",
  //   healthbtn: base + " bg-green-400 w-full",
  //   historybtn: base + " bg-orange-700 w-full",
  //   newsbtn: base + " bg-purple-600 w-full",
  //   culturebtn: base + " bg-pink-800 w-full",
  //   sportsbtn: base + " bg-blue-800 w-full",
  // };

  // if (cat === "technology")
  //   return <button className={style.technologyButton}>{children}</button>;

  // if (cat === "science")
  //   return <button className={style.scienceButton}>{children}</button>;

  // if (cat === "finance")
  //   return <button className={style.financeButton}>{children}</button>;

  // if (cat === "society")
  //   return <button className={style.societyBtn}>{children}</button>;

  // if (cat === "entertainment")
  //   return <button className={style.entertainmentbtn}>{children}</button>;

  // if (cat === "health")
  //   return <button className={style.healthbtn}>{children}</button>;

  // if (cat === "history")
  //   return <button className={style.historybtn}>{children}</button>;

  // if (cat === "news")
  //   return <button className={style.newsbtn}>{children}</button>;

  // if (cat === "culture")
  //   return <button className={style.culturebtn}>{children}</button>;

  // if (cat === "sports")
  //   return <button className={style.sportsbtn}>{children}</button>;

  // if (type === emojiStyle)
  //   return <button className={emojiStyle}>{children}</button>;

  // return <button className={style[type]}>{children}</button>;

  const baseStyles =
    " w-full rounded-full px-4 py-2 transition-all duration-300 hover:-rotate-3 hover:scale-105";

  if (color) {
    const additionalStyles = color + " " + baseStyles;
    console.log(additionalStyles);
    // console.log(`${color}`);
    return <button className={`${additionalStyles}`}>{children}</button>;
  }
}

export default Button;

//button:bg-red-700 w-auto
