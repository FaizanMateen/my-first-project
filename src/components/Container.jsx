function Container({ children }) {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col px-6 py-3 text-definedColor-base md:overflow-hidden">
      {children}
    </div>
  );
}

export default Container;
