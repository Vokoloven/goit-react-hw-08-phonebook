import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/Form/Form';
import { Box } from 'components/Theme/Box';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';

export const Phonebook = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('data');

    if (data.length > 2) {
      setContacts(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(contacts));
  }, [contacts]);

  const addNewName = e => {
    e.preventDefault();

    const value = e.target.name.value;
    const number = e.target.number.value;

    if (contacts.find(contact => contact.name === value)) {
      alert(`${value} is already in contacts.`);
    } else {
      setContacts(prevState => {
        return [
          ...prevState,
          ...[{ id: nanoid(), name: value, number: number }],
        ];
      });
    }
    clearInputField();
  };

  const clearInputField = () => {
    document.getElementById('formUser').reset();
  };

  const searchByFilter = e => {
    const searchValue = e.target.value.toLocaleLowerCase();

    const filteredValue = contacts.filter(name =>
      name.name.toLocaleLowerCase().includes(searchValue)
    );

    setFilter(filteredValue);
  };

  const removeNameFromList = e => {
    const removeFromList = e.currentTarget.parentNode.attributes.id.value;

    if (filter) {
      const removedValue = filter.filter(i => i.id !== removeFromList);
      setFilter(removedValue);
    }
    const removedValue = contacts.filter(i => i.id !== removeFromList);
    setContacts(removedValue);
  };

  return (
    <>
      <Box ml={5} color="primary">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addNewName} />
        <h2>Contacts</h2>
        <Filter onChange={searchByFilter} />
        <Contacts
          filter={filter}
          contacts={contacts}
          onClick={removeNameFromList}
        />
      </Box>
    </>
  );
};
