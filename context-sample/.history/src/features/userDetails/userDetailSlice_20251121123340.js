const initialState = {
  selectedUser: null,
};

export default function userDetailReducer(state = initialState, action) {
  switch (action.type) {
    case "userDetail/selectUser":
      return {
        ...state,
        selectedUser: action.payload,
      };
    case "userDetail/clearSelection":
      return {
        ...state,
        selectedUser: null,
      };
    default:
      return state;
  }
}

export function selectUser(user) {
  return {
    type: "userDetail/selectUser",
    payload: user,
  };
}

export function clearSelection() {
  return {
    type: "userDetail/clearSelection",
  };
}
