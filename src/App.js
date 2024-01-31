import "./App.css";
import { useEffect, useRef, useState } from "react";
import { InputField } from "./input-field/InputField";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { TaskControl } from "./task-control/TaskControl";
import { TodoMenu } from "./todo-menu/TodoMenu";
import { TodoCheckMenu } from "./todo-check-menu/TodoCheckMenu";

function App() {
  const inputTitleRef = useRef(null);
  const [iscompleted, setiscompleted] = useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [todo, settodo] = useState([]);
  const [completedTodo, setcompletedTodo] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    inputTitleRef.current.focus();
    const inputTitle = title
      .split(" ")
      .map((curr) => curr[0].toUpperCase() + curr.slice(1))
      .join(" ");
    const inputDescription =
      description[0].toUpperCase() + description.slice(1);
    if (inputTitleRef.current.value !== "") {
      let newTask = {
        title: inputTitle,
        description: inputDescription
      };

      const updateTodo = [...todo];
      updateTodo.push(newTask);
      settodo(updateTodo);

      localStorage.setItem("todolist", JSON.stringify(updateTodo));
    }
    settitle("");
    setdescription("");
  };
  useEffect(() => {
    inputTitleRef.current.focus();

    const saveTodo = JSON.parse(localStorage.getItem("todolist"));
    const completeTodo = JSON.parse(localStorage.getItem("completetodo"));
    if (saveTodo) settodo(saveTodo);
    if (completeTodo) setcompletedTodo(completeTodo);
  }, []);

  const handleDelete = (index) => {
    const reduceTodo = [...todo];
    reduceTodo.splice(index, 1);
    settodo(reduceTodo);
    localStorage.setItem("todolist", JSON.stringify(reduceTodo));
  };
  const handleCompletedClick = (index) => {
    const date = new Date();
    const getDate = Intl.DateTimeFormat("eng-us", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      weekday: "long",
      second: "2-digit"
    }).format(date);
    const completedTime = getDate;
    console.log(completedTime);
    const filteredTodo = {
      ...todo[index],
      completedTime: completedTime
    };
    const updateCompleteTodo = [...completedTodo];
    updateCompleteTodo.push(filteredTodo);
    setcompletedTodo(updateCompleteTodo);
    localStorage.setItem("completetodo", JSON.stringify(updateCompleteTodo));
    handleDelete(index);
  };
  const handleDeleteCompleted = (index) => {
    const reduceCompletedTodo = [...completedTodo];
    reduceCompletedTodo.splice(index, 1);
    setcompletedTodo(reduceCompletedTodo);
    localStorage.setItem("completetodo", JSON.stringify(reduceCompletedTodo));
  };

  return (
    <div className="todo">
      <InputField
        settitle={settitle}
        title={title}
        description={description}
        setdescription={setdescription}
        inputTitleRef={inputTitleRef}
        handleClick={handleClick}
      />

      <TaskControl iscompleted={iscompleted} setiscompleted={setiscompleted} />
      <TodoMenu
        iscompleted={iscompleted}
        handleDelete={handleDelete}
        handleCompletedClick={handleCompletedClick}
        todo={todo}
        AiOutlineDelete={AiOutlineDelete}
        BsCheckLg={BsCheckLg}
      />
      <TodoCheckMenu
        iscompleted={iscompleted}
        completedTodo={completedTodo}
        AiOutlineDelete={AiOutlineDelete}
        handleDeleteCompleted={handleDeleteCompleted}
      />
    </div>
  );
}

export default App;
