import { Col, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import SingleBook from './SingleBook'

const BookList = () => {
    return (
      <Row className="g-2">
        {fantasy.map((book) => {
          return (
            <Col xs={12} md={4} key={book.asin}>
          <SingleBook/>
            </Col>
          )
        })}
      </Row>
    )
  }
  
  export default BookList
