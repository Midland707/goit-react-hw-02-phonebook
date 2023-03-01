import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => (
  <ul className={css.contactList}>
    {contacts[0] ? (
      contacts.map(item => (
        <li key={item.id} className={css.contactItem}>
          {item.name}: {item.number}
        </li>
      ))
    ) : (
      <div className={css.errorMessage}>
        I don't find it! Please repeat search!
      </div>
    )}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
