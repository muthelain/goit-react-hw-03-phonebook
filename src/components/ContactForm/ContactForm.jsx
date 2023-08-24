import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactFormStyled,
  ContactLabel,
  ContactInput,
  ContactBtn,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state.name, this.state.number);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <ContactFormStyled onSubmit={this.onSubmit}>
        <ContactLabel>
          Name
          <ContactInput
            onChange={this.onChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactLabel>
        <ContactLabel>
          Number
          <ContactInput
            onChange={this.onChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactLabel>
        <ContactBtn type="submit">Add contact</ContactBtn>
      </ContactFormStyled>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
