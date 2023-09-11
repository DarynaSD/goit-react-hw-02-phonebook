import React from 'react'

const ContactItem = ({item, handleDelete}) => {
  return (
    <li>
          <p>{item.name}</p>
          <p>{item.number}</p>
          <button type="button" onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  )
}

export default ContactItem
