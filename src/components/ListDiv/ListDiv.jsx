import React from "react";
import s from "./ListDiv";
import { Ul } from "../UL/Ul";
import { DivButtons } from "../DivButtons/DivButtons";

export const ListDiv = ({
  dataLi,
  checkHandler,
  deleteCheckHandler,
  id,
  deleteAllHandler,
}) => {
  return (
    <div>
      <Ul dataLi={dataLi} checkHandler={checkHandler} />
      <DivButtons
        deleteCheckHandler={deleteCheckHandler}
        deleteAllHandler={deleteAllHandler}
        id={id}
      />
    </div>
  );
};
