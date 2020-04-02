import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "abdellah bouskine",
        email: "abdearec@gmal.com",
        phone: "+212626247325",
        type: "personal"
      },
      {
        id: 2,
        name: "said bouskine",
        email: "said@gmal.com",
        phone: "+212661618451",
        type: "professional"
      },
      {
        id: 3,
        name: "othman bouskine",
        email: "othman@gmal.com",
        phone: "+212608038211",
        type: "personal"
      },
      {
        id: 4,
        name: "aicha bouskine",
        email: "aicha@gmal.com",
        phone: "+212646465698",
        type: "personal"
      }
    ],
    current: null
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add Contact
  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Set corrent Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //Clear corrent Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //Filter Contacts
  //Clear Filter
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        current: state.current,
        updateContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
