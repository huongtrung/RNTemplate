import {MODAL_TYPE} from '@/Constants'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  typeModal: MODAL_TYPE.INFO,
  messageModal: '',
  isVisibleModal: false,
  count: 0,
  userList: [],

}

const rootRedux = createSlice({
  name: 'rootRedux',
  initialState,
  reducers: {
    displayLoading: state => {
      return {
        ...state,
        isLoading: true
      }
    },
    hideLoading: state => {
      return {
        ...state,
        isLoading: false
      }
    },
    displayGlobalModal: (state, action) => {
      return {
        ...state,
        typeModal: action.payload.typeModal,
        messageModal: action.payload.messageModal,
        isVisibleModal: true
      }
    },
    hideGlobalModal: state => {
      return {
        ...state,
        typeModal: MODAL_TYPE.INFO,
        messageModal: '',
        isVisibleModal: false
      }
    },
    getUsers: state => {},
    getUsersSuccess: (state, action) => {
      return {
        ...state,
        userList: action.payload
      }
    },
    setUsers: (state, action) => {}
  }
})

export const rootActions = rootRedux.actions

export default rootRedux.reducer
