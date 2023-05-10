import { useState, useEffect } from 'react';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', dataName: 'Rosie Simpson', dataNumber: '459-12-56' },
      { id: 'id-2', dataName: 'Hermione Kline', dataNumber: '443-89-12' },
      { id: 'id-3', dataName: 'Eden Clements', dataNumber: '645-17-79' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getDataForm = data => {
    setContacts(prevState => [...prevState, data]);
  };

  const deletName = evt => {
    const dataId = evt.target.id;
    const newArray = contacts.filter(contact => contact.id !== dataId);
    setContacts([...newArray]);
  };

  const chahgeFilter = evt => {
    console.log('Filter');
    setFilter(evt.currentTarget.value);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className="bookcontacts">
        <h1>PhoneBook</h1>
        <Phonebook onSubmit={getDataForm} contacts={contacts} />
        <h1>Contacts</h1>
        <Filter value={filter} onChange={chahgeFilter} />
        <Contacts contacts={contacts} filter={filter} onClick={deletName} />
      </div>
    </div>
  );
};
