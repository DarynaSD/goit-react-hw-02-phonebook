import React from 'react'

import ContactItem from './ContactItem'

const ContactList = ({contacts, handleDelete}) => {
  return (
    <ul>
          {contacts.map((oneCont) => (
              <ContactItem item={oneCont} key={oneCont.id} handleDelete={ handleDelete}/>
      ))}
    </ul>
  )
}

export default ContactList
