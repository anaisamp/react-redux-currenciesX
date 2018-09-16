const initialState = {
  rates: null,
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_RATES':
      return {
        rates: action.payload
      }
    default:
      return state
  }
}