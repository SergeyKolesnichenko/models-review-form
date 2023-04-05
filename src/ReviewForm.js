import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import axios from 'axios'


export default function ReviewForm() {

  const url = 'https://spring-bud-flip-flops.cyclic.app/reviews'

  const [ username, setUsername ] = useState('')
  const [ header, setHeader ] = useState('')
  const [ text, setText ] = useState('')
  const [ onlyfans, setOnlyfans ] = useState('')
  const [ fansly, setFansly ] = useState('')
  const [ twitter, setTwitter ] = useState('')
  const [ twitch, setTwitch ] = useState('')
  const [ reddit, setReddit ] = useState('')
  const [ discord, setDiscord ] = useState('')
  const [ instagram, setInstagram ] = useState('')
  const [ facebook, setFacebook ] = useState('')
  const [ tiktok, setTiktok ] = useState('')

  const linksStates = [
    [ onlyfans, setOnlyfans, 'Onlyfans' ],
    [ fansly, setFansly, 'Fansly' ],
    [ twitter, setTwitter, 'Twitter' ],
    [ twitch, setTwitch, 'Twitch' ],
    [ reddit, setReddit, 'Reddit' ],
    [ discord, setDiscord, 'Discord' ],
    [ instagram, setInstagram, 'Instagram' ],
    [ facebook, setFacebook, 'Facebook' ],
    [ tiktok, setTiktok, 'Tiktok' ],
  ]

  const handleSubmit = () => {
    console.log(username, header, text)



    const f = async () => {
      let links = {}

      if(onlyfans) links.onlyfans = onlyfans
      if(fansly) links.fansly = fansly
      if(twitter) links.twitter = twitter
      if(twitch) links.twitch = twitch
      if(reddit) links.reddit = reddit
      if(discord) links.discord = discord
      if(instagram) links.instagram = instagram
      if(facebook) links.facebook = facebook
      if(tiktok) links.tiktok = tiktok

      let res = await axios.post(url, {
        model_username: username,
        header, text,
        links,
      })

      console.log(res)
      console.log(JSON.stringify({ model_username: username, header, text }) )
      window.location.reload(false);
    }

    f()
  }

  return (
    <>
      <Card bg="light">
        <Card.Body><h2>Model review</h2>
      
        <br />
        <Form>
          <Form.Group>
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" value={username} id="username" name="username" onChange={e => setUsername(e.target.value)} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Header:</Form.Label>
            <Form.Control type="text" value={header} id="header" name="header" onChange={e => setHeader(e.target.value)} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Text:</Form.Label>
            <Form.Control as="textarea" rows="10" value={text} id="text" name="text" onChange={e => setText(e.target.value)} />
          </Form.Group>
          <br />

          <Row xs={1} md={2} className="g-4">
          {
            linksStates.map(statePair => {
              
              return <>
                <Col>
                  <Form.Group as={Row}>
                    <Col lg={2}><Form.Label>{statePair[2]}:</Form.Label></Col>
                    <Col><Form.Control type="text" value={statePair[0]} onChange={e => statePair[1](e.target.value)} /></Col>
                  </Form.Group>
                </Col>
                <br />
              </>
            })
          }
          </Row>
          <br/><br/>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="primary" className="pull-right" onClick={handleSubmit}>Send</Button>
          </div>
        </Form>
        </Card.Body>
      </Card>
    </>
  );
}
