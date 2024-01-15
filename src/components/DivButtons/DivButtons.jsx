import React from "react";
import s from "./DivButtons.module.scss";
import { Button } from "../../ui/Button/Button";

export const DivButtons = ({ deleteCheckHandler, id, deleteAllHandler }) => {
  return (
    <div className={s.divbtn}>
      <Button type="grey" btnHandler={() => deleteCheckHandler(id)}>
        Delete
      </Button>
      <Button type="red" btnHandler={deleteAllHandler}>
        Delete All
      </Button>
    </div>
  );
};
