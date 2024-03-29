import React, { useEffect } from 'react';
import { ContactItem } from './ContactItem/ContactItem';
import { ContactsListStyle } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../redux/selectors';
// import { selectFilter } from '../redux/selectors';
import { fetchContacts } from '../services/fetchContacts';

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const phoneBook = useSelector(selectPhoneBookValue);
  const findByLetter = useSelector(selectVisibleContacts);
  // const filterName = useSelector(selectVisibleContacts);

  // const findByLetter = phoneBook.filter(({ name }) =>
  //   name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
  // );

  return (
    <ContactsListStyle>
      {findByLetter.map(contact => (
        <ContactItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
        />
      ))}
    </ContactsListStyle>
  );
};
