import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Edit from "./components/Edit";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="App ">
      <div className="container-info my-0 mx-auto bg-black w-[600px] h-full">
        {isEdit ? (
          <Edit setIsEdit={setIsEdit} />
        ) : (
          <Header setIsEdit={setIsEdit} />
        )}
      </div>
    </div>
  );
}

export default App;
