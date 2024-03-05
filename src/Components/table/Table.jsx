import { useState } from "react";

const Table = ({ contacts }) => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const searchCB = (contact) =>
    contact.name.includes(search) || contact.email.includes(search);

  let filteredContacts = [];
  if (filter === "All") {
    filteredContacts = search ? contacts.filter(searchCB) : contacts;
  } else {
    filteredContacts = contacts.filter(
      (contact) => contact.group === filter && searchCB(contact)
    );
  }

  return (
    <>
      <div>
        <br />
        <span style={{ fontWeight: "bold" }}>Filters:</span>

        <select value={filter} onChange={handleChange}>
          <option value="All">All</option>
          <option value="">None</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
        <span>
          {" "}
          Search:
          <input
            type="search"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts?.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
