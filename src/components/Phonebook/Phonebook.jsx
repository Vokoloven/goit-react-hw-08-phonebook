// import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { useRef } from 'react';
import { addContacts, contactsFilter } from '../../redux/addContactSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from 'components/Form/Form';
import { Box } from 'components/Theme/Box';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';

export const Phonebook = () => {
  const inputRef = useRef('');
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contactsDatabase.contact);
  const filter = useSelector(state => state.contactsDatabase.filter);

  const addNewName = e => {
    e.preventDefault();

    const value = e.target.name.value;
    const number = e.target.number.value;

    if (contacts.find(contacts => contacts.name === value)) {
      alert(`${value} is already in contacts.`);
    } else {
      dispatch(
        addContacts([
          ...contacts,
          { id: nanoid(), name: value, number: number },
        ])
      );
    }
    clearInputField();
  };

  const clearInputField = () => {
    document.getElementById('formUser').reset();
  };

  const searchByFilter = e => {
    const searchValue = e.target.value.toLocaleLowerCase();
    inputRef.current = searchValue;

    const filteredValue = contacts.filter(name =>
      name.name.toLocaleLowerCase().includes(searchValue)
    );

    dispatch(contactsFilter(filteredValue));
  };

  const removerTool = (name, action, removeableContactId) => {
    const filteredContactToRemove = name.filter(
      i => i.id !== removeableContactId
    );
    dispatch(action(filteredContactToRemove));
  };

  const removeNameFromList = e => {
    const removeableContactId = e.currentTarget.parentNode.attributes.id.value;

    if (filter) {
      removerTool(filter, contactsFilter, removeableContactId);
    }
    removerTool(contacts, addContacts, removeableContactId);
  };

  return (
    <>
      <Box ml={5} color="primary">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addNewName} />
        <h2>Contacts</h2>
        <Filter onChange={searchByFilter} />
        <Contacts
          inputRef={inputRef.current}
          filter={filter}
          contacts={contacts}
          onClick={removeNameFromList}
        />
      </Box>
    </>
  );
};
