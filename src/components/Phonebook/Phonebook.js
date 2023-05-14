import { useState } from 'react';
import css from './Phonebook.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function Phonebook({ contacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const chahgeInputName = evt => {
    const checkName = evt.currentTarget.value.toLowerCase();
    contacts.forEach(({ dataName }) => {
      if (dataName.toLowerCase() === checkName) {
        alert(`${evt.currentTarget.value} is already in contacts`);
        return;
      }
    });
  };

  const handleSubmitName = evt => {
    evt.preventDefault();
    const id = nanoid();
    const { name, number } = evt.target;
    const dataName = name.value;
    const dataNumber = number.value;
    const checkName = dataName.toLowerCase();

    contacts.forEach(({ dataName }) => {
      if (dataName.toLowerCase() === checkName) {
        alert(`${evt.currentTarget.value} is already in contacts`);
        return;
      }
    });
    const object = { id, dataName, dataNumber };
    onSubmit(object);
    // name.value = '';
    // number.value = '';
    setName('');
    setNumber('');
    console.log(name.value);
    console.log(number.value);
  };

  const handleChangeName = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }

    chahgeInputName(evt);
  };

  return (
    <form className={css.form} onSubmit={handleSubmitName}>
      <label className={css.label}>
        Name
        <input
          value={name}
          className={css.input}
          type="text"
          placeholder="Enter full name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChangeName}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          value={number}
          className={css.input}
          type="tel"
          placeholder="123-45-67"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChangeName}
          required
        />
      </label>
      <button className={css.form_btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
