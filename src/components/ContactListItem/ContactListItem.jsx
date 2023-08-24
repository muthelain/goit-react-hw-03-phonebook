import PropTypes from 'prop-types';

import {
  ContactListItemStyled,
  ContactListItemBtn,
} from './ContactListItem.styled';

export function ContactListItem({ name, number, id }, deleteContact) {
  return (
    <ContactListItemStyled key={id}>
      {name}: {number}
      <ContactListItemBtn onClick={() => deleteContact(id)} type="button">
        Delete
      </ContactListItemBtn>
    </ContactListItemStyled>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
