import React from 'react';
import TextField from '@mui/material/TextField';
import './contact.css'

const Contact = () => {

    const email = {
        first_name: 'shane',
        last_name: 'gravestock',
        tld: '.net'
    }

        return (
            <div className="contact-wrapper">
            <div className="header">
                <p>Contact me at {email.first_name}@{email.last_name}{email.tld}</p>
                <p>Or leave me a message below</p>
            </div>
                <form className="contact-form" method="POST" action="https://formspree.io/shane@gravestock.net">

                    <TextField 
                    variant="outlined"
                     placeholder="Name" 
                     className="white-input"
                     label="Name"
                     margin="normal"
                     required
                     name="name" 
                     type="text"/>

                    <TextField 
                    variant="outlined"  
                    placeholder="Email" 
                    className="white-input"
                    name="_replyto" 
                    required
                    label="Email"
                    margin="normal"
                    type="email"/>

                    <TextField 
                    variant="outlined"  
                    className="white-input"
                    placeholder="Subject"
                     name="_subject" 
                     label="Subject"
                     margin="normal"
                     type="text"/>

                    <TextField 
                    variant="outlined"
                    className="white-input"
                     multiline
                     required
                      placeholder="Message"
                      label="Message"
                       name="message" 
                       rows="4"
                       margin="normal"
                       type="text"/>
                
                    <button type="submit" value="Send">Submit</button>
                </form>

                <input type="text" name="_gotcha" style={{display:"none"}} />
                <input type="hidden" name="_next" value="https://shanegravestock.co.uk" />
                
            </div>
        );
}

export default Contact;