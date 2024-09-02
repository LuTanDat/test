import {
  INCREMENT, DECREMENT,
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR,
  CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR,
  DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_ERROR,
} from './types';
import axios from 'axios';

export const increaseCounter = () => {
  return { // truyen vao Redux
    type: INCREMENT, // name
    // payload: { like: 'abc', name: 'dat lu' }
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

//------------------------------------------------------------------------------------

export const fetchAllUsers = () => {
  //redux thunk (middleware use fetch api)
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest()) // thong bao cho Redux biet gi, muon lam gi tiep theo
    try {
      const res = await axios.get("http://localhost:8080/users/all")
      const data = res && res.data ? res.data : []
      dispatch(fetchUsersSuccess(data))
    } catch (error) {
      console.log(error)
      dispatch(fetchUsersError())
    }
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUsersSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload
  }
}

export const fetchUsersError = () => {
  return {
    type: FETCH_USER_ERROR
  }
}

//------------------------------------------------------------------------------------

export const createNewUser = (email, password, username) => {
  return async (dispatch, getState) => {
    dispatch(createUsersRequest()) // thong bao cho Redux biet gi, muon lam gi tiep theo
    try {
      let res = await axios.post('http://localhost:8080/users/create', { email, password, username })
      if (res && res.data.errCode === 0) {
        dispatch(createUsersSuccess())
        dispatch(fetchAllUsers())
      }
    } catch (error) {
      console.log(error)
      dispatch(createUsersError())
    }
  }
}

export const createUsersRequest = () => {
  return {
    type: CREATE_USER_REQUEST
  }
}

export const createUsersSuccess = () => {
  return {
    type: CREATE_USER_SUCCESS,
  }
}

export const createUsersError = () => {
  return {
    type: CREATE_USER_ERROR
  }
}

//------------------------------------------------------------------------------------

export const deleteUser = (id) => {
  return async (dispatch, getState) => {
    dispatch(deleteUsersRequest()) // thong bao cho Redux biet gi, muon lam gi tiep theo
    try {
      let res = await axios.post(`http://localhost:8080/users/delete/${id}`)
      if (res && res.data.errCode === 0) {
        dispatch(deleteUsersSuccess())
        dispatch(fetchAllUsers())
      }
    } catch (error) {
      console.log(error)
      dispatch(deleteUsersError())
    }
  }
}

export const deleteUsersRequest = () => {
  return {
    type: DELETE_USER_REQUEST
  }
}

export const deleteUsersSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  }
}

export const deleteUsersError = () => {
  return {
    type: DELETE_USER_ERROR
  }
}