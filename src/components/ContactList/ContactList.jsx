import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { ContactListStyled } from './ContactList.styled';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ContactListStyled>
      {contacts.map(contact => {
        return ContactListItem(contact, deleteContact);
      })}
    </ContactListStyled>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
