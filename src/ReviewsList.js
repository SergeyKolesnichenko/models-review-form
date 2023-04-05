import { useEffect, useState } from "react";
import { Container, Stack, Row, Col } from "react-bootstrap";
import ReviewCard from "./ReviewCard";

export default function ReviewsList() {
  let [ reviews, setReviews ] = useState([])

  let [ maxPage, setMaxPage ] = useState(1)
  let [ currentPage, setCurrentPage ] = useState(1)

  const url = 'https://spring-bud-flip-flops.cyclic.app/reviews'

  const updateList = async () => {
    let res = await fetch(url)
      res = await res.json()
      
      setReviews(res.result.data)
  }

  useEffect(() => {
    updateList()
  }, [])

  return <Row xs={1} md={2} className="g-4">
    { reviews.map((i, index) => { 
          return <Col>
            <ReviewCard key={index} review={i} onDelete={updateList}/>
            <br></br>
            <br></br>
          </Col>
      }) 
    }
  </Row>
}