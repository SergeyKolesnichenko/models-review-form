import ReviewForm from "./ReviewForm";
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import ReviewsList from "./ReviewsList";

function App() {
  return (
      <Container>
        <ReviewForm></ReviewForm>
        <br></br>
        <br></br>
        <ReviewsList></ReviewsList>
      </Container>
  );
}

export default App;
