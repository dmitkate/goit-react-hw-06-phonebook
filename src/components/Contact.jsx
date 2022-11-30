import css from './contacts.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactslice';
export function ContactList({ allContacts }) {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {allContacts.map(i => (
          <li className={css.item} key={nanoid(4)}>
            {i.name}: {i.number}
            <button
              className={css.btn}
              type="button"
              onClick={() => dispatch(deleteContact(i.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
