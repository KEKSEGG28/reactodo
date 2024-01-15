import React from "react";
import s from "./ChangeBar.module.scss";
export const ChangeBar = ({
  inputChangeHandler,
  editHandler,
  value

}) => {
  return (
    <>
      <input
        type="text"
        className={s.addbar}
        value={value}
        onChange={editHandler}
      />
    </>
  );
};
