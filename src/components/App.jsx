import { Component } from 'react'
import { nanoid } from 'nanoid'

import Form from './Form'
import ContactList from './ContactList'


class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  createContact = (formData) => {
    this.setState((prev) => ({
      contacts: [
        ...prev.contacts, {
          ...formData,
          id: nanoid(),
        }
      ]
    }))
  }

  render() {
    console.log(this.state.contacts)
    return (
      <section>
        <Form createContact={this.createContact} />
        <ContactList contacts={ this.state.contacts } />
      </section>
    )
  }
}

export default App
