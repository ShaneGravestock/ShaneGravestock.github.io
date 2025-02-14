import React, { Component } from 'react';

const Thanks = () => {
    window.setTimeout(function() {
        window.location.href = "http://shanegravestock.co.uk/thanks";
    }, 3000)

    return (
        <div>
            <h1>Thank you for sending an email!</h1>
            <p style={{fontSize: "1.5em"}}>I'll be in touch shortly</p>
        </div>
    );
}

export default Thanks;