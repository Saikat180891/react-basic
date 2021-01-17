import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import ListItem from "./components/ListItem";
import React from "react";
import Input from "./components/Input";

/**
 * How to create component?
 * How to import and export component?
 * How to pass props to a component?
 * How to render lists?
 * How to trigger event from lower level component?
 */
let id = 0;

// const useState = (val = null) => {
//   let state = val;
//   const setState = (value) => {
//     state = value
//   }

//   return [state, setState]
// }

function App() {
  const [tasks, setTasks] = React.useState([]);

  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleTaskAddition = () => {
    setTasks([
      ...tasks,
      {
        text: value,
        id: id++,
      },
    ]);
    setValue("");
  };

  const handleDelete = (id) => {
    const filterItems = tasks.filter((task) => task.id !== id);
    setTasks(filterItems);
  };

  React.useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="App">
      <Header />
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
}

export default App;
