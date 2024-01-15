import React, { useState } from "react";
import s from "./Li.module.scss";
import { ChangeBar } from "../../ui/ChangeBar/ChangeBar";

export const Li = ({
  p,
  checkHandler,
  id,
  deleteHandler,
  isDone,
  inputChangeHandler,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(p);

  const editHandler = (e) => {
    setEditValue(e.target.value);
  };

  const toggleIsEdit = () => {
    isEdit && inputChangeHandler(id, editValue)
    setIsEdit(!isEdit)
    setEditValue(p)
  }

  return (
    <>
      <li className={s.li}>
        <input
          className={s.checkbox}
          type="checkbox"
          onChange={() => checkHandler(id)}
          checked={isDone}
        />
        {!isEdit ? (
          <p className={s.subtitle}>{p}</p>
        ) : (
          <ChangeBar
            inputChangeHandler={inputChangeHandler}
            id={id}
            value={editValue}
            editHandler={editHandler}
          />
        )}

        <button
          className={s.change}
          onClick={() => toggleIsEdit(id, editValue)}
        >
          {isEdit ? "✅" : "✏️"}
        </button>

        <button className={s.delete} onClick={() => deleteHandler(id)}>
          🗑
        </button>
      </li>
    </>
  );
};
