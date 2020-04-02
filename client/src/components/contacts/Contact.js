import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
const Contact = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtred } = contactContext;
  if (contacts.length === 0) {
    return <h2>Please Add a contact</h2>;
  }
  return (
    <Fragment>
      {filtred
        ? filtred.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contact;
