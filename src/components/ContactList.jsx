import React from 'react'

import ContactItem from './ContactItem'

const ContactList = ({contacts}) => {
  return (
    <ul>
          {contacts.map((oneCont) => (
              <ContactItem item={oneCont} key={oneCont.id } />
      ))}
    </ul>
  )
}

export default ContactList
