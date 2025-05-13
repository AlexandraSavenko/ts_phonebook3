import { useEffect, useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
const savedNumbers = window.localStorage.getItem("myContacts");

interface NewContact {
    name: string | null;
  number: string | null;
}

export interface oneContact extends NewContact {
  id: string | null;
}

function App() {
  const initialContacts: oneContact[] = savedNumbers ? JSON.parse(savedNumbers) as oneContact[]: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]

  const [contacts, setContact] = useState<oneContact[]>(initialContacts);

  useEffect(() => {
    window.localStorage.setItem("myContacts", JSON.stringify(contacts));
  }, [contacts]);

  const addNumber: (newNumber: NewContact) => void = (newNumber) => {
    setContact((allNumbers) => {
      const newContact = {
        id: nanoid(),
        name: newNumber.name,
        number: newNumber.number,
      };
      return [...allNumbers, newContact];
    });
  };
  const deleteNumber = (numberId: string) => {
    setContact((allContacts) => {
      return allContacts.filter((contact) => contact.id !== numberId);
    });
  };
  const [filter, setFilter] = useState("");

  const getVisibleNumbers = (contacts: oneContact[]): oneContact[] => contacts.filter((contact) =>  
    contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  ); 

  const visibleNumbers = getVisibleNumbers(contacts)

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addNumber} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contArr={visibleNumbers} onDelete={deleteNumber} />
    </div>
  );
}

export default App;
