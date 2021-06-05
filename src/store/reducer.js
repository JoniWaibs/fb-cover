export const initialState = { currentUser : null };
export const types = { SET_USER : 'SET_USER' };

const reducer = ( state, action) => {
  console.log(action)
  switch (action.type){
    case types.SET_USER:
      return{
        ...state,
        currentUser : action.currentUser
      }
      case types.LOGOUT:
        return{
          currentUser : null
        }
    default:
      return state;
  }

}
export default reducer;
