import React from 'react'
import styled from 'styled-components'
import Contact from "./Contact"


const Contacts = (props) => {
    const contacts = [{
        img : '/Images/user.svg',
        name : "denie",
        message : "Hey guys! What's up?"
    },
    {
        img : '/Images/user.svg',
        name : "denie",
        message : "Hey guys! What's up?"
    },
    {
        img : '/Images/user.svg',
        name : "denie",
        message : "Hey guys! What's up?"
    },
    {
        img : '/Images/user.svg',
        name : "denie",
        message : "Hey guys! What's up?"
    },
    {
        img : '/Images/user.svg',
        name : "denie",
        message : "Hey guys! What's up?"
    },
    {
        img : '/Images/user.svg',
        name : "denie",
        message : "Hey guys! What's up?"
    },
    {
        img : '/Images/user.svg',
        name : "denie",
        message : "Hey guys! What's up?"
    },
]
  return (
    <Container>
        {contacts.map((contact) => (
            <Contact
                img = {contact.img}
                name = {contact.name}
                message = {contact.message}
            />
        ))}
    </Container>
  )
}

const Container = styled.div``;

export default Contacts
