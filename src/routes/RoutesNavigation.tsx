import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChangeTopic } from "../screen/ChangeTopic";
import { DetailsTopic } from "../screen/DetailsTopic";
import { Home } from "../screen/Home";
import { RegisterTopic } from "../screen/RegisterTopic";

export function RoutesNavigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="users/:idtopico" element={<DetailsTopic />}></Route>

        <Route path="register" element={<RegisterTopic />} />

        <Route path="change/:idtopico" element={<ChangeTopic />} />
      </Routes>
    </Router>
  );
}
