import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./components/Routes/RouteComponent";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
          <RouteComponent />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
