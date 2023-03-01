// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmitForm, onChangeName }) => (
  <form className={css.form} onSubmit={onSubmitForm}>
    <label className={css.formNameTitle}>
      Name
      <input
        className={css.formInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChangeName}
      />
    </label>
    <button className={css.formButton} type="submit">
      Add contact
    </button>
  </form>
);
