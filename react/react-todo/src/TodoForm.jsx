import { ListItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";

export default function TodoForm({ add }) {
  const [text, setText] = useState("");
  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    add(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ListItem>
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          value={text}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="Create Todo" edge="end">
                  <CreateIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </ListItem>
    </form>
  );
}
