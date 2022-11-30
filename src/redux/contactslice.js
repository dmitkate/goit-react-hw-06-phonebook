import { createSlice } from "@reduxjs/toolkit";

const contctsSlice = createSlice({
  name: "contacts",
  initialState: [  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    {id: 'id-5', name: 'Kateryna Dmytrenko', number: '123-45-67'}],
   reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            }
        },
        deleteContact: {
            reducer(state, action) {
                return state.filter(contact => contact.id !== action.payload)
            }
        },
    }
});

export const { addContact, deleteContact } = contctsSlice.actions;
const getContacts = contctsSlice.reducer;
export default getContacts;

