import { Button, Accordion } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function ReviewCard(props) {
  let { id, model_username, header, text, links } = props.review
  
  let linksText = Object.keys(links ?? {}).map(name => `${name}: ${links[name]}`)

  const onClick = () => {
    const f = async () => {
      const url = 'https://spring-bud-flip-flops.cyclic.app/reviews'
      let res = await axios.delete(url + '/' + id)

      props.onDelete()
    }

    f()
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{model_username}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{header}</Card.Subtitle>
        <Card.Text>
          {text}
          <br/> <br/>
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Links:</Card.Subtitle>
        <Card.Text>
          {linksText.map(i => <>{i}<br/></>)}
        </Card.Text>
        <Button onClick={onClick}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default ReviewCard;