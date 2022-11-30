import css from '../components/formin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { addContact } from 'redux/contactslice';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
export function FormIn() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert.info(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: 'id-' + nanoid(4),
      name,
      number,
    };
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <>
      <Formik
        className={css.section}
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
