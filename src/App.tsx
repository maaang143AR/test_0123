import "./App.css";
import Customer from "./components/Customer";
import { User } from "./test";

function App() {

  const cars = [
   
   { id: "1", name: "bmw", isAdmin: true},
    { id: "2", name: "audi", isAdmin: false},
    { id: "3", name: "honda", isAdmin: true},
  ];

  const data = [{target: 10,value:50},{target: 20,value:40}]
  const result = data?.[0].value / data?.[0].value || 0
  console.log(result,"data is");

  return (
    <div>
      <h1>This is the list of cars</h1>
      <ul>
        {cars.map((car) => (
          <Customer key={car.id} id={car.id} name={car.name} admin={car.isAdmin}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
