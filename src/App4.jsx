import React, { useState } from "react";
import ContactForm from "./Components/contactForm/ContactForm";
import Table from "./Components/table/Table";

const App4 = () => {
  const [contacts, setContacts] = useState([]);

  const getContact = (values) => {
    setContacts([].concat(contacts, values));
  };
  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm getContact={getContact} />
      <Table contacts={contacts} />
    </div>
  );
};

export default App4;
