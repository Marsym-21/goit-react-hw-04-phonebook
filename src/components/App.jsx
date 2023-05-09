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
    console.log('Зміна контактів');
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // useEffect(() => {
  //   console.log('Один раз');
  //   const localStoradgeData = JSON.parse(localStorage.getItem('contacts'));
  //   setContacts([...localStoradgeData]);
  // }, []);

  // componentDidMount() {
  //     const localStoradgeData = JSON.parse(localStorage.getItem('contacts'));
  //     if (localStoradgeData) {
  //       this.setState({ contacts: localStoradgeData });
  //     }
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.state.contacts !== prevState.contacts) {
  //       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //     }
  //   }

  const getDataForm = data => {
    setContacts(prevState => [...prevState, data]);
  };

  const deletName = evt => {
    const dataId = evt.target.id;
    const newArray = contacts.filter(contact => contact.id !== dataId);
    setContacts([...newArray]);
  };

  const chahgeFilter = evt => {
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

// export class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', dataName: 'Rosie Simpson', dataNumber: '459-12-56' },
//       { id: 'id-2', dataName: 'Hermione Kline', dataNumber: '443-89-12' },
//       { id: 'id-3', dataName: 'Eden Clements', dataNumber: '645-17-79' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const localStoradgeData = JSON.parse(localStorage.getItem('contacts'));
//     if (localStoradgeData) {
//       this.setState({ contacts: localStoradgeData });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   deletName = evt => {
//     const dataId = evt.target.id;
//     const { contacts } = this.state;
//     const newArray = contacts.filter(contact => contact.id !== dataId);
//     console.log(newArray);
//     this.setState({
//       contacts: [...newArray],
//     });
//   };

//   chahgeFilter = evt => {
//     this.setState({ filter: evt.currentTarget.value });
//   };

//   getDataForm = data => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, data],
//     }));
//   };

//   render() {
//     return (
//       <div
//         style={{
//           height: '100vh',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           fontSize: 40,
//           color: '#010101',
//         }}
//       >
//         <div className="bookcontacts">
//           <h1>PhoneBook</h1>
//           <Phonebook
//             onSubmit={this.getDataForm}
//             contacts={this.state.contacts}
//           />
//           <h1>Contacts</h1>
//           <Filter value={this.state.filter} onChange={this.chahgeFilter} />
//           <Contacts
//             contacts={this.state.contacts}
//             filter={this.state.filter}
//             onClick={this.deletName}
//           />
//         </div>
//       </div>
//     );
//   }
// }
