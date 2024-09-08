const initialState = {
  name: '',
  lastName: '',
  country: '',
  phoneNumber: '',
  userName: '',
}
const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload }
    case 'SET_LASTNAME':
      return { ...state, lastName: action.payload }
    case 'SET_COUNTRY':
      return { ...state, country: action.payload }
    case 'SET_USERNAME':
      return { ...state, userName: action.payload }
    case 'SET_PHONE_NUMBER':
      return { ...state, phoneNumber: action.payload }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

const handleNameChange = (name, dispatch) => {
  dispatch({ type: 'SET_NAME', payload: name })
}

const handleLastNameChange = (lastName, dispatch) => {
  dispatch({ type: 'SET_LASTNAME', payload: lastName })
}

const handleUserNameChange = (userName, dispatch) => {
  dispatch({ type: 'SET_USERNAME', payload: userName })
}
const handleCountryChange = (country, dispatch) => {
  dispatch({ type: 'SET_COUNTRY', payload: country })
}
const handlePhoneNumberChange = (phoneNumber, dispatch) => {
  dispatch({ type: 'SET_PHONE_NUMBER', payload: phoneNumber })
}

export {
  initialState,
  filterReducer,
  handleCountryChange,
  handleLastNameChange,
  handleNameChange,
  handleUserNameChange,
  handlePhoneNumberChange,
}
