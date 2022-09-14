import Button from "./components/Button";
import Greet from "./components/Greet";

function App() {
  return (
    <div>
      <Greet name="Ritvik" fullName={[{firstName: "Ramesh",lastName: "Saharan"}]} status="single"job={true}>
        <p>This is children</p>
      </Greet>
      <Button clickHandler={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
