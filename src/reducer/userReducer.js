import {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR,
  CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_ERROR,
  DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_ERROR,
} from '../action/types';


const INITIAL_STATE = { // chỉ chạy 1 lần đầu tiên
  listUsers: [],
  isLoading: false,
  isError: false,
  isCreating: false
};

const userReducer = (state = INITIAL_STATE, action) => { // tự quản lý state chính nó, vòng sau lấy kq vòng trước

  switch (action.type) {

    case FETCH_USER_REQUEST: // return bản sao nông (shallow copy) cho Redux, Redux có cơ chế so sánh nông (shallow comparison) rồi cập nhật lại
      console.log('FETCH_USER_REQUEST: ', action)
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case FETCH_USER_SUCCESS:
      console.log('FETCH_USER_SUCCESS: ', action)
      return {
        ...state,
        listUsers: action.payload,
        isLoading: false,
        isError: false
      };

    case FETCH_USER_ERROR:
      console.log('FETCH_USER_ERROR: ', action)
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    //------------------------------------------------------------------------------------

    case CREATE_USER_REQUEST:
      return {
        ...state,
        isCreating: true
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreating: false,
      };

    case CREATE_USER_ERROR:
      return {
        ...state,
        isCreating: false,
      };

    //------------------------------------------------------------------------------------

    case DELETE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false
      };

    case DELETE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: false
      };

    default: return state;
  }

};

export default userReducer;