import * as React from "react";
import List from "@mui/material/List";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Box, Typography } from "@mui/material";

const getInitialData = () => {
  const data = localStorage.getItem("todos");
  if (!data) return [];
  return JSON.parse(data);
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), text: text, completed: false },
      ];
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
        Todo
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            // Don't get confused in why are remove and toggle different.
            // It's just to demonstrate two different methods.
            remove={removeTodo} // method 1
            toggle={() => toggleTodo(todo.id)} // method 2
          />
        ))}
      </List>
      <TodoForm add={addTodo} />
    </Box>
  );
}
