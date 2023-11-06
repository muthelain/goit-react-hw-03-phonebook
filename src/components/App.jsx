import React, { Component } from 'react';
import shortid from 'shortid';

import { Container } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(prevProps, prevState){
    if (this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  componentDidMount(){
    const contacts = localStorage.getItem('contacts'); 
    const parsedContacts  = JSON.parse(contacts);
    if(parsedContacts){
      this.setState({contacts:parsedContacts });
    }
  }     

  addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    
    if (
      this.state.contacts
        .flatMap(contact => contact.name)
        .includes(newContact.name)
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter)
    );
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange} />
        <ContactList
          deleteContact={this.deleteContact}
          contacts={filteredContacts}
        ></ContactList>
      </Container>
    );
  }
}