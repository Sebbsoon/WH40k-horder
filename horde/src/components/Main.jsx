import { Route, Routes,Redirect } from "react-router-dom";
import Rules from "./Rules";
import Misery from "./Misery";

function Main() {
  return (
    <div>
      <header></header>
      <div>
     <Routes>
      <Route path="/" element={<Misery/>}/>
     </Routes>
      </div>
    </div>
  );
}
export default Main;
