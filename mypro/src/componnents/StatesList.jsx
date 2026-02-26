import { Link } from "react-router-dom";

const StatesList = () => {
  const states = [
    { id: 1, name: "Israel", language: "Hebrew", religion: "Judaism" },
    { id: 2, name: "USA", language: "English", religion: "Christianity" },
    { id: 3, name: "Japan", language: "Japanese", religion: "Shinto" },
    { id: 4, name: "France", language: "French", religion: "Christianity" },
    { id: 5, name: "Egypt", language: "Arabic", religion: "Islam" }
  ];

  return (
    <div>
      <h1>רשימת מדינות</h1>
      <ul>
       
        {states.map((s) => (
          <li key={s.id}>
            <Link to={`/details/${s.id}`} state={{ countryData: s }}>{s.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatesList
 
