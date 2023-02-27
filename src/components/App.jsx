import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onSubmitForm = eventSubmit => {
    eventSubmit.preventDefault();
    console.log('value', eventSubmit.target.value);
    console.log('event =', eventSubmit);
    const obj = { id: nanoid(), name: this.state.name };
    const newArray = this.state.contacts.slice(); // Create a copy
    newArray.push(obj); // Push the object
    this.setState({ contacts: newArray });
    // eventSubmit.form.reset();
  };

  onChangeName = eventName => {
    console.log('valueName', eventName.target.value);
    this.setState({ name: eventName.target.value });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          onSubmitForm={this.onSubmitForm}
          onChangeName={this.onChangeName}
        />

        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
