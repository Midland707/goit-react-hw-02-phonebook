// import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => (
  <ul className={css.contactList}>
    {contacts[0] &&
      contacts.map(item => (
        <li key={item.id} className={css.contactItem}>
          {item.name}
        </li>
      ))}
  </ul>
);

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
// };
