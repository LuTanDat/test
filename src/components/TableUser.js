import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
// import axios from 'axios'; // call api
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchAllUsers } from '../action/actions';
import RingLoader from "react-spinners/RingLoader";

const TableUser = (props) => {

  // call api cach dung REACT
  // const [listUsers, setListUsers] = useState()
  // const fetchAllUser = async () => {
  //   const res = await axios.get("http://localhost:8080/users/all")
  //   const data = res && res.data ? res.data : []
  //   setListUsers(data)
  //   // console.log('>>> check data from axios: ', data)
  // }


  // call api through REDUX
  const dispatch = useDispatch()
  const listUsers = useSelector(state => state.user.listUsers)
  const isLoading = useSelector(state => state.user.isLoading)
  const isError = useSelector(state => state.user.isError)

  useEffect(() => {
    dispatch(fetchAllUsers()) // dispatch action to Redux
  }, [])

  const handleDeleteUser = (user) => {
    dispatch(deleteUser(user.id))
  }

  return (
    <>
      <Container>
        <hr />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>UserName</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isError === true ?
              <>
                <tr>
                  <td colSpan={4} className='text-center'>
                    <div>Something wrongs, please try again...</div> {/* there is a <div> element nested directly inside a <tbody> element  */}
                  </td>
                </tr>
              </>
              :
              <>
                {isLoading === true ?
                  <>
                    <tr>
                      <td colSpan={4} className='text-center'>
                        <div>Loading data...</div>
                        <RingLoader />
                      </td>
                    </tr>
                  </>
                  :
                  <>
                    {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                      return (
                        <tr key={`item ${index}`}>
                          <td>{index + 1}</td>
                          <td>{item.email}</td>
                          <td>{item.username}</td>
                          <td>
                            <button className='me-2 btn btn-warning'>Edit</button>
                            <button className='btn btn-danger' onClick={() => handleDeleteUser(item)}>Delete</button>
                          </td>
                        </tr>
                      )
                    })}
                  </>
                }
              </>
            }
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default TableUser