import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import css from './App.module.css';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onSubmitForm = eventSubmit => {
    eventSubmit.preventDefault();
    const obj = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    const newArray = this.state.contacts.slice(); // Create a copy
    newArray.push(obj); // Push the object
    this.setState({ contacts: newArray });
    // eventSubmit.form.reset();
  };

  onChangeName = eventName => {
    this.setState({ name: eventName.target.value });
  };

  onChangeNumber = eventNumber => {
    this.setState({ number: eventNumber.target.value });
  };

  render() {
    return (
      <div className={css.section}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          onSubmitForm={this.onSubmitForm}
          onChangeName={this.onChangeName}
          onChangeNumber={this.onChangeNumber}
        />

        <h2 className={css.title}>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
