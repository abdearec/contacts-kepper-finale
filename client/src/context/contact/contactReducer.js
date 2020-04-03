import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
        filtred:
          state.filtred === null
            ? state.filtred
            : state.filtred.filter(contact => contact.id !== action.payload)
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          return contact.id === action.payload.id ? action.payload : contact;
        }),
        filtred:
          state.filtred === null
            ? state.filtred
            : state.filtred.map(contact => {
                return contact.id === action.payload.id
                  ? action.payload
                  : contact;
              })
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtred: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, "ig");
          return contact.name.match(regex) || contact.email.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtred: null
      };
    default:
      return state;
  }
};
