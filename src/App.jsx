import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Form, Button } from 'react-bootstrap';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트 입문: 개인 과제", date: "2024-01-23", content: "삭제, 추가가 가능한 To Do List 만들기", isDone: false }
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
      id: todos.length + 1, title, date, content, isDone: false
    };
    setTodos([...todos, newTodo]);

    setTitle("");
    setDate("0000-00-00");
    setContent("");
  };

  const removeButtonHandler = (id, isDone) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);

    if (isDone) {
      setCompletedTodos(completedTodos.filter(todo => todo.id !== id));
    }
  };

  const toggleDoneHandler = (id, isDone) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );

    setTodos(updatedTodos);

    const completedTodo = updatedTodos.find(todo => todo.id === id);
    if (completedTodo && completedTodo.isDone) {
      setCompletedTodos([...completedTodos, completedTodo]);
    } else {
      setCompletedTodos(completedTodos.filter(todo => todo.id !== id));
    }
  };

  return (
    <>
      <div id='grid_hz'>
        <div>
          <h3>🔥To-do</h3>
          <div className='workingCards'>
            {todos.map(item => (
              !item.isDone ? (
                <Card className="cards" key={item.id}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">마감 기한: {item.date}</Card.Subtitle>
                    <Card.Text>{item.content}</Card.Text>
                    <Button className="Buttons" variant="outline-info" onClick={() => removeButtonHandler(item.id, item.isDone)}>삭제</Button>{' '}
                    <Button className="Buttons" variant="outline-info" onClick={() => toggleDoneHandler(item.id, item.isDone)}>
                      {item.isDone ? '취소' : '완료'}
                    </Button>{' '}
                  </Card.Body>
                </Card>
              ) : null
            ))}
          </div>
          <h3>🎉Done</h3>
          <div className='doneCards'>
            {completedTodos.map(item => (
              item.isDone ? (
                <Card className="cards" key={item.id}>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">마감 기한: {item.date}</Card.Subtitle>
                    <Card.Text>{item.content}</Card.Text>
                    <Button className="Buttons" variant="outline-info" onClick={() => removeButtonHandler(item.id, item.isDone)}>삭제</Button>{' '}
                    <Button className="Buttons" variant="outline-info" onClick={() => toggleDoneHandler(item.id)}>
                      취소
                    </Button>{' '}
                  </Card.Body>
                </Card>
              ) : null
            ))}
          </div>
          <div className='addToDo'>
            <Form>
              <h3 className='title'>✨Add to-do✨</h3>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div id='grid'>
                  <Form.Control className='todotitle' type="input" placeholder="제목 ..." value={title} onChange={titleChangeHandler}></Form.Control>
                  <Form.Control className='date' type='date' value={date} onChange={dateChangeHandler} />
                  <Button className='addButton' variant="info" onClick={addButtonHandler}>추가</Button>{' '}
                </div>
                <Form.Control type="input" as="textarea" placeholder="할 일 ..." rows={3} value={content} onChange={contentChangeHandler} />
              </Form.Group>
            </Form>
          </div>
        </div>
        <div className='side'></div>
      </div>
    </>
  );
}

export default App;