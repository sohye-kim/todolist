import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <div id='grid_hz'>
        <div>
          <h3>🔥To-do</h3>
          <div className='cards'>  
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>제목</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">기한</Card.Subtitle>
                <Card.Text>
                  내용입니다 가나다라마바사아자차카타파하 아이고 힘들어 테스트테스트
                </Card.Text>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check type={type} id={`default-${type}`} label={`Done`}/></div>
                  ))}
                </Form>
              </Card.Body>
            </Card>
          </div>
          <h3>🎉Done</h3>
          <div className='cards'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>제목</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">기한</Card.Subtitle>
                <Card.Text>
                  내용입니다 가나다라마바사아자차카타파하 아이고 힘들어 테스트테스트
                </Card.Text>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check type={type} id={`default-${type}`} label={`Done`}/></div>
                  ))}
                </Form>
              </Card.Body>
            </Card>
          </div>
          <div className='addToDo'>
            <Form>
              <h3 className='title'>✨Add to-do✨</h3>
              <Button variant="outline-info">Submit</Button>{' '}
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="제목 ..." />
                <Form.Control type='date' />
                <Form.Control as="textarea" placeholder="할 일 ..." rows={3} />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className='side'></div>
      </div>
    </>
  )
}

export default App