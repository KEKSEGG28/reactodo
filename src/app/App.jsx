import React, { useEffect, useState } from "react";
import { Title } from "../components/Title/Title";
import { InputDiv } from "../components/InputDiv/InputDiv";
import "./global.css";
import { Li } from "../components/Li/Li";

const savedTasks = JSON.parse(localStorage.getItem("todo"));
const initialState = savedTasks ?? [];

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(initialState);

  const btnHandler = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    let dataObj = {
      id: Date.now(),
      p: inputValue,
      isDone: false,
    };
    setData([...data, dataObj]);

    setInputValue("");
  };

  function checkHandler(id) {
    const findobj = data.map((el) => {
      if (el.id === id) {
        return { ...el, isDone: !el.isDone };
      }
      return el;
    });
    console.log(findobj);
    setData(findobj);
    console.log(data);
  }

  function deleteCheckHandler() {
    const dataNote = data.filter((el) => !el.isDone);
    setData(dataNote);
  }
  function deleteHandler(id) {
    const dataNote = data.filter((el) => el.id != id);
    setData(dataNote);
  }
  function deleteAllHandler() {
    setData([]);
  }

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  const inputChangeHandler = (id, value) => {
    setData(
      data.map((el) => {
        if (el.id === id) {
          return { ...el, p: value };
        } else {
          return el;
        }
      })
    );
  };
  const dataLi = data.map((el) => (
    <Li
      p={el.p}
      checkHandler={checkHandler}
      id={el.id}
      deleteHandler={deleteHandler}
      isDone={el.isDone}
      inputChangeHandler={inputChangeHandler}
    />
  ));
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(data));
  }, [data]);
  return (
    <>
      <Title />
      <InputDiv
        inputValue={inputValue}
        inputHandler={inputHandler}
        btnHandler={btnHandler}
        dataLi={dataLi}
        data={data}
        checkHandler={checkHandler}
        deleteCheckHandler={deleteCheckHandler}
        deleteAllHandler={deleteAllHandler}
      />
    </>
  );
};
