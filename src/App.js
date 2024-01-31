import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import { Container } from 'react-bootstrap'
import Booklist from './components/BookList'
import SingleBook from './components/SingleBook'

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <Booklist />
        <SingleBook/>
      </Container>
      <MyFooter />
    </>
  )
}

export default App
