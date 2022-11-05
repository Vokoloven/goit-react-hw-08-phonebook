// import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { addContacts } from '../../redux/addContactSlice';
import { onFilter } from '../../redux/addFilterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from 'components/Form/Form';
import { Box } from 'components/Theme/Box';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';

export const Phonebook = () => {
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState([]);
  // const isFirstRender = useRef(true);
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  // useEffect(() => {
  //   const data = localStorage.getItem('data');

  //   setContacts(JSON.parse(data));
  // }, []);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }

  //   localStorage.setItem('data', JSON.stringify(contacts));
  // }, [contacts]);

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
          ...[{ id: nanoid(), name: value, number: number }],
        ])
      );
    }

    // if (contacts.find(contact => contact.name === value)) {
    //   alert(`${value} is already in contacts.`);
    // } else {

    //   setContacts(prevState => {
    //     return [
    //       ...prevState,
    //       ...[{ id: nanoid(), name: value, number: number }],
    //     ];
    //   });
    // }
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

    if (searchValue !== '') {
      dispatch(onFilter(filteredValue));
    } else {
      dispatch(onFilter(''));
    }
  };

  const removeNameFromList = e => {
    const removeFromList = e.currentTarget.parentNode.attributes.id.value;

    if (filter) {
      const removedValue = filter.filter(i => i.id !== removeFromList);
      dispatch(onFilter(removedValue));
    }
    const removedValue = contacts.filter(i => i.id !== removeFromList);
    dispatch(addContacts(removedValue));
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
