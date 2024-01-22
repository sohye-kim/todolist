import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트 입문: 개인 과제", date: "2024-01-23", content: "수정, 삭제, 추가가 가능한 To Do List 만들기", isDone: false },
    { id: 2, title: "리액트 입문: 개인 과제", date: "2024-01-23", content: "수정, 삭제, 추가가 가능한 To Do List 만들기", isDone: false },
    { id: 3, title: "리액트 입문: 개인 과제", date: "2024-01-23", content: "수정, 삭제, 추가가 가능한 To Do List 만들기", isDone: false },
    { id: 4, title: "리액트 입문: 개인 과제", date: "2024-01-23", content: "수정, 삭제, 추가가 가능한 To Do List 만들기", isDone: false }
  ]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("0000-00-00");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const dateChangeHandler = (event) => setDate(event.target.value);
  const contentChangeHandler = (event) => setContent(event.target.value);

  const addButtonHandler = () => {
    const newTodo = {
      id: todos.length + 1, title, date, content
    }
    setTodos([...todos, newTodo])
  };
  const removeButtonHandler = (id) => {
    const newTodos = todos.filter(todos => todos.id !== id);
    setTodos(newTodos);
  };
  const checkboxHandler = (id, isDone) => {
    const targetTodo = todos.filter(todos => todos.id === id);

    if(isDone) {
      setCompletedTodos([...completedTodos, targetTodo]);
    } else {
      setCompletedTodos(completedTodos.filter(todo => todo.id !== id));
    }
  }

  return (
    <>
      <div id='grid_hz'>
        <div>
          <h3>🔥To-do</h3>
          <div className='workingCards'>
            {todos.map(item => {
              return (
                <Card className="cards" key={item.id}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">마감 기한: {item.date}</Card.Subtitle>
                    <Card.Text>
                      {item.content}
                    </Card.Text>
                    <Button className="deleteButton" variant="outline-info" onClick={() => removeButtonHandler(item.id)}>삭제</Button>{' '}
                    <Form>
                      {['checkbox'].map((type, item) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check type={type} id={`default-${type}`} label={`완료`} checked={item.isDone} onChange={() => checkboxHandler(item.id, item.isDone)} /></div>
                      ))}
                    </Form>
                  </Card.Body>
                </Card>
              )
            })}
          </div>
          <h3>🎉Done</h3>
          <div className='doneCards'>
            {completedTodos.map(item => (
              <Card className="cards" key={item.id}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">마감 기한: {item.date}</Card.Subtitle>
                  <Card.Text>
                    {item.content}
                  </Card.Text>
                  <Form>
                      {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                          <Form.Check type={type} id={`default-${type}`} label={`취소`} onChange={() => checkboxHandler(item.id)} /></div>
                      ))}
                    </Form>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className='addToDo'>
            <Form>
              <h3 className='title'>✨Add to-do✨</h3>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div id='grid'>
                  <Form.Control className='todotitle' type="input" placeholder="제목 ..." value={title} onChange={titleChangeHandler}></Form.Control>
                  <Form.Control className='date' type='date' value={date} onChange={dateChangeHandler} />
                  <Button className='addButton' variant="info" onClick={addButtonHandler}>Submit</Button>{' '}
                </div>
                <Form.Control type="input" as="textarea" placeholder="할 일 ..." rows={3} value={content} onChange={contentChangeHandler} />
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