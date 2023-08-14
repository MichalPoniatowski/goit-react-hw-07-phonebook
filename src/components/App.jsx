import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './App.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchContacts } from '../redux/actions';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <ContactForm />
      <ContactList>
        <Filter />
      </ContactList>
    </div>
  );
};
