import React from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Input from "../components/Input";
import "../App.css";

const TodoPage = () => {
  const [tasks, setTasks] = React.useState([]);

  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const createTodo = async (todo) => {
    const res = await fetch(
      "http://localhost:6200/api/v1/todo-svc/create-todo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ todo: todo }),
      }
    );
    const data = await res.json();
    return data;
  };

  const deleteTodo = async (id) => {
    const res = await fetch(
      `http://localhost:6200/api/v1/todo-svc/delete-todo/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    return data.data;
  };

  const handleTaskAddition = () => {
    if (value === "") return;
    createTodo(value).then((res) => {
      setTasks([...tasks, res.data]);
      setValue("");
    });
  };

  const handleDelete = (id) => {
    deleteTodo(id).then((task) => {
      const filterItems = tasks.filter((task) => task.id !== id);
      setTasks(filterItems);
    });
  };

  React.useEffect(() => {
    fetch("http://localhost:6200/api/v1/todo-svc/get-all-todo")
      .then((res) => res.json())
      .then((tasks) => setTasks(tasks));
  }, []);

  return (
    <div className="App">
      <div className="Main">
        <div className="flex">
          <Input onChange={handleChange} value={value} />
          <button onClick={handleTaskAddition}>ADD</button>
        </div>
        <List>
          {tasks.map((task, i) => (
            <ListItem key={i} id={task.id} onDelete={handleDelete}>
              {task.text}
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default TodoPage;
