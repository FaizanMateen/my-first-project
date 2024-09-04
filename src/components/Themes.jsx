import { COLOR_THEMES } from "../data/data-colorThemes";

function Themes({ theme, color, onChangeTheme }) {
  //   return <button>{COLOR_THEMES.map((themes) => themes.theme)}</button>;
  return (
    <button
      className={`h-12 w-12 rounded-full border-2 border-slate-200 md:h-8 md:w-8 ${color} outline-2 outline-offset-4 outline-white focus:outline`}
      onClick={() => onChangeTheme(theme)}
    >
      &nbsp;
    </button>
  );
}
// &nbsp;
export default Themes;
