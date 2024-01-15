import React from "react";
import s from "./InputDiv.module.scss";
import { Form } from "../Form/Form";
import { ListDiv } from "../ListDiv/ListDiv";

export const InputDiv = ({
  inputHandler,
  btnHandler,
  inputValue,
  addBtn,
  dataLi,
  data,
  checkHandler,
  deleteCheckHandler,
  id,
  deleteAllHandler,
  changeInput
}) => {
  return (
    <div className={s.inputDiv}>
      <Form
        inputValue={inputValue}
        inputHandler={inputHandler}
        btnHandler={btnHandler}
        addBtn={addBtn}
      />
      {data.length ? (
        <ListDiv
          dataLi={dataLi}
          checkHandler={checkHandler}
          deleteCheckHandler={deleteCheckHandler}
          deleteAllHandler={deleteAllHandler}
          id={id}
          changeInput={changeInput}
        />
      ) : (
        ""
      )}
    </div>
  );
};
