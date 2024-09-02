import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../action/actions';
import { useState } from 'react';

const FormAddNew = (props) => {

  const dispatch = useDispatch();
  const isCreating = useSelector(state => state.user.isCreating)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleCreateUser = () => {
    dispatch(createNewUser(email, password, username))
    setEmail('')
    setPassword('')
    setUsername('')
  }

  return (
    <>
      <Container>
        <h2>Create a new user:</h2>
        <Form>

          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary"
            onClick={() => handleCreateUser()}
            disabled={isCreating}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default FormAddNew