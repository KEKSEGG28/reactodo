import React from "react";
import { Li } from "../Li/Li";
import s from "./Ul.module.scss";

export const Ul = ({ dataLi }) => {
  return (
    <>
      <ul className={s.ul}>{dataLi}</ul>
    </>
  );
};
