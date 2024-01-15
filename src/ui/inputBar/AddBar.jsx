import React from "react";
import s from "./AddBar.module.scss";

export const AddBar = ({ inputValue, inputHandler }) => {
  return (
    <>
      <input
        type="text"
        className={s.addbar}
        placeholder="Vvedi tovar"
        value={inputValue}
        onChange={inputHandler}
      />
    </>
  );
};
