import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/Form/Form';
import { Box } from 'components/Theme/Box';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: [],
  };

  addNewName = e => {
    e.preventDefault();

    const value = e.target[0].value;
    const number = e.target[1].value;

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          ...[{ id: nanoid(), name: value, number: number }],
        ],
      };
    });

    this.setState(prevState => {
      return { filter: prevState.contacts };
    });

    this.state.contacts.find(contact => contact.name === value) &&
      alert(`${value} is already in contacts.`);

    this.clearInputField();
  };

  searchByFilter = e => {
    const searchValue = e.target.value.toLocaleLowerCase();

    const filteredValue = this.state.contacts.filter(name =>
      name.name.toLocaleLowerCase().includes(searchValue)
    );
    console.log(filteredValue);

    this.setState({ filter: filteredValue });
  };

  clearInputField = () => {
    document.getElementById('formUser').reset();
  };

  removeNameFromList = e => {
    const removeFromList = e.currentTarget.parentNode.attributes.id.value;

    const removedValue = this.state.contacts.filter(
      i => i.id !== removeFromList
    );

    this.setState({ contacts: removedValue });
    this.setState({ filter: removedValue });
  };

  componentDidMount() {
    this.defaultFilter();
  }

  defaultFilter = () => {
    this.setState(prevState => ({ filter: prevState.contacts }));
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Box ml={5} color="primary">
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addNewName} />
          <h2>Contacts</h2>
          <Filter onChange={this.searchByFilter} />
          <Contacts filter={filter} onClick={this.removeNameFromList} />
        </Box>
      </>
    );
  }
}
