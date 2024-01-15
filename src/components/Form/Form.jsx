import React from "react";
import { AddBar } from "../../ui/inputBar/AddBar";
import s from "./Form.module.scss";
import { Button } from "../../ui/Button/Button";

export const Form = ({
  btnHandler,
  inputHandler,
  inputValue,
  addBtn,
}) => {
  return (
    <form className={s.form}>
      <AddBar inputValue={inputValue} inputHandler={inputHandler} />
      <Button type="green" btnHandler={btnHandler} addBtn={addBtn}>
        ADD
      </Button>
    </form>
  );
};
