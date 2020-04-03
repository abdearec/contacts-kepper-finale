import React, { useContext, useRef, useEffect } from "react";

import ContactContext from "../../context/contact/contactContext";
const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");
  const { filterContacts, clearFilter, filtred } = contactContext;
  useEffect(() => {
    text.current.focus();
    if (!filtred) {
      text.current.value = "";
    }
  });
  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form>
      <input
        className="form-text"
        ref={text}
        type="text"
        name="text"
        placeholder="Filter Contacts ..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
