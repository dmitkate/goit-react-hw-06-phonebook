import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Find from './Filter';
import { FormIn } from './Formin.jsx';
import { ContactList } from './Contact.jsx';

export function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const fromFilter = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <>
      <h1>Phonebook:</h1>
      <FormIn />
      <h2>Contacts:</h2>
      <Find />
      {fromFilter && <ContactList allContacts={fromFilter} />}
    </>
  );
}
