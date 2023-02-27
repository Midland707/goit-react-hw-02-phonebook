import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => (
  <ul className={css.contactList}>
    {/* {contacts.map((item, index) => (
      <li key={index} className={css.contactItem}>
        {item}
      </li>
    ))} */}
  </ul>
);

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)).isRequired,
// };
