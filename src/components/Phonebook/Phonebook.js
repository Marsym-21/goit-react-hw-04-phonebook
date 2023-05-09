import React from 'react';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';

class Phonebook extends React.Component {
  state = {
    name: '',
    number: '',
  };

  chahgeInputName = evt => {
    this.setState({ name: evt.currentTarget.value });
    const checkName = evt.currentTarget.value.toLowerCase();
    const contacts = this.props.contacts;

    contacts.forEach(({ dataName }) => {
      if (dataName.toLowerCase() === checkName) {
        alert(`${evt.currentTarget.value} is already in contacts`);
        return;
      }
    });
  };

  handleSubmitName = evt => {
    evt.preventDefault();
    const id = nanoid();
    const { name, number } = evt.target;
    const dataName = name.value;
    const dataNumber = number.value;
    const checkName = dataName.toLowerCase();
    const contacts = this.props.contacts;

    contacts.forEach(({ dataName }) => {
      if (dataName.toLowerCase() === checkName) {
        alert(`${evt.currentTarget.value} is already in contacts`);
        return;
      }
    });
    const object = { id, dataName, dataNumber };
    this.props.onSubmit(object);
    name.value = '';
    number.value = '';
  };

  handleChangeName = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    this.chahgeInputName(evt);
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmitName}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            placeholder="Enter full name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChangeName}
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            placeholder="123-45-67"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChangeName}
            required
          />
        </label>
        <button className={css.form_btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Phonebook;
