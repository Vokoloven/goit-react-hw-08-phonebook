import { useEffect, useRef } from 'react';
// import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from 'components/Form/Form';
import { Box } from 'components/Theme/Box';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { getApiContacts } from 'service/getContacts.service';
import { postApiContacts } from 'service/postContacts.service';
import { getContacts, getFilter } from 'redux/selectors';
import { contactsFilter } from 'redux/getContactsSlice';
import { deleteApiContacts } from 'service/deleteContacts.service';

export const Phonebook = () => {
  const inputRef = useRef('');
  const dispatch = useDispatch();

  const { items } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);

  const contacts = items;

  // const contacts = useSelector(state => state.contactsDatabase.contact.items);
  // const filter = useSelector(state => state.contactsDatabase.filter);

  useEffect(() => {
    dispatch(getApiContacts());
  }, [dispatch]);

  // const zalupa = useSelector(state => console.log(state.contactsDatabase));

  const addNewName = e => {
    e.preventDefault();

    const value = e.target.name.value;
    const number = e.target.number.value;

    if (contacts.find(contacts => contacts.name === value)) {
      alert(`${value} is already in contacts.`);
    } else {
      dispatch(postApiContacts({ name: value, phone: number }));
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

  const removeNameFromList = e => {
    const removeableContactId = e.currentTarget.parentNode.attributes.id.value;

    const findedId = contacts.find(({ id }) => id === removeableContactId);

    const { id } = findedId;

    if (filter) {
      const filteredContacts = filter.filter(
        ({ id }) => id !== removeableContactId
      );
      dispatch(contactsFilter(filteredContacts));
    }

    dispatch(deleteApiContacts(id));
  };

  // const removerTool = (name, action, removeableContactId) => {
  //   const filteredContactToRemove = name.filter(
  //     i => i.id !== removeableContactId
  //   );

  //   const data = name.find(({ id }) => id === removeableContactId);

  //   const { id } = data;

  //   if (id) {
  //     dispatch(deleteApiContacts(id));
  //   }

  //   dispatch(action(filteredContactToRemove));
  // };

  // const removeNameFromList = e => {
  //   const removeableContactId = e.currentTarget.parentNode.attributes.id.value;

  //   // if (filter) {
  //     // removerTool(filter, contactsFilter, removeableContactId);
  //   }
  //   removerTool(contacts, deleteApiContacts, removeableContactId);
  // };

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
