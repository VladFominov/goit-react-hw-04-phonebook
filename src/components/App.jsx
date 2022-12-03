import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';


export const App =() => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ||[]);
  const [filter, setFilter] = useState('');
  const [showForm, setshowForm] = useState(false);

  useEffect(() => {
   
        localStorage.setItem('contacts', JSON.stringify(contacts))
      
    },
    [contacts]
  );

  const handelFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const formSubmitHandler = data => {

    if (contacts.some(({ name }) => name === data.name)) {
      return alert(data.name + ' is already in contacts');
    }
    setContacts([...contacts, { ...data, id: nanoid() }])
  };

  const filteredContact = () => {
    return contacts.filter(({ name }) => {
    
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const onDelete = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId))
  };

  
    const filteredContacts = filteredContact();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <Button
          variant="contained"
          onClick={() => setshowForm(!showForm)}
        >
          {showForm
            ? 'Click me to hide Form'
            : 'Click me to open Form'}
        </Button>
        {showForm && <Form onSubmit={formSubmitHandler} />}
        <h2>Contacts</h2>
        <Filter filter={filter} handelFilterChange={handelFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={onDelete} />
      </div>
    );
  }
// export default App;
