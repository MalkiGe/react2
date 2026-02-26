import { useLocation, useNavigate } from "react-router-dom";

const StateDitails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentState = location.state?.countryData;
  return (
    <div>
      <h1>פרטי המדינה: {currentState?.name}</h1>
      <p>שפה: {currentState?.language}</p>
      <p>דת: {currentState?.religion}</p>
    </div>
  );
};

export default StateDitails


    