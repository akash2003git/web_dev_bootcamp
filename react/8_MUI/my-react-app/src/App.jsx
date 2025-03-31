import "./App.css";
import Button from "@mui/material/Button";
import RatingDemo from "./RatingDemo";
import FormDemo from "./FormDemo";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      {/* <Button color="success" variant="contained" onClick={() => alert("hi")}> */}
      {/*   Contained */}
      {/* </Button> */}
      {/* <RatingDemo /> */}
      <Navbar />
      <FormDemo />
    </div>
  );
}

export default App;
