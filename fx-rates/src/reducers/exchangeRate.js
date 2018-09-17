
export default (state = {}, action) => {
  const { type, base, payload } = action;
  switch (type) {
    case 'UPDATE_RATES':
      return {
        ...state,
        [base]: payload,
      }
    default:
      return state
  }
}