import { Route, Routes,Redirect } from "react-router-dom";
import Rules from "./Rules";
import Misery from "./Misery";
import Missions from "./Missions";

function Main() {
  return (
    <div>
      <header></header>
      <div>
     <Routes>
      <Route path="/" element={<Missions/>}/>
      
     </Routes>
      </div>
    </div>
  );
}
export default Main;
