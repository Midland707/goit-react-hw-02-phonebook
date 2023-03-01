import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import css from './App.module.css';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
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

  onSearchName = eventFilter => {
    this.setState({ filter: eventFilter.target.value });
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
        <Filter onSearchName={this.onSearchName} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
