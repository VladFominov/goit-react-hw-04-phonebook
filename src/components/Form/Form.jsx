
import React, { useState} from 'react';
import {
  InputForm,
  Label,
  Input,
  InputNumber,
  FormContainer,
  BtnAdd,
  Span,
} from './Form.styled';

const Form = ({ onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
   
    const { name, value } = e.target;
    switch (name) {
      case "name" :
         setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default: console.log('pls, fill correct data');
        break;
    };
  };

  const handelSubmit = e => {
    e.preventDefault();
    onSubmit({name, number});   
    setName('');
     setNumber('');
  };

    return (
      <FormContainer>
        <InputForm onSubmit={handelSubmit}>
          <Label>
            <Span>Name</Span>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            <Span>Number</Span>
            <InputNumber
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <BtnAdd type="submit">Add contact</BtnAdd>
        </InputForm>
      </FormContainer>
    );
  }


export default Form;
