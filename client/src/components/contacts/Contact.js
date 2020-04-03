import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
      <TransitionGroup>
        {filtred
          ? filtred.map(contact => (
              <CSSTransition key={contact.id} timeout={1100} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={1100} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contact;
