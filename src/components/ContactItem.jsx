import React from 'react'

const ContactItem = ({item}) => {
  return (
    <li>
          <p>{item.name}</p>
          <p>{ item.number }</p>
    </li>
  )
}

export default ContactItem
