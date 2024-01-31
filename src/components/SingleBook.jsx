import { Card, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'

const SingleBook = () => {
  return (
            
            <Card className="book-cover d-flex flex-column">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
            </Card>
        
        )
      }

export default SingleBook
