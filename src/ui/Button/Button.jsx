import s from "./Button.module.scss";

const filter = {
  red: s.button_red,
  green: s.button_green,
  grey: s.button_grey,
};

export const Button = ({ btnHandler, children, type }) => {
  const rootClasses = [s.button, filter[type]];
  return (
    <>
      <button className={rootClasses.join(" ")} onClick={btnHandler}>
        {children}
      </button>
    </>
  );
};
