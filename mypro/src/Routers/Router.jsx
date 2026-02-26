import { Routes, Route } from "react-router-dom";
import StatesList from "../componnents/StatesList";
import StateDitails from "../componnents/StateDitails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<StatesList />} />
      <Route path="/details/:stateId" element={<StateDitails />} />
    </Routes>
  );
};

export default Router;