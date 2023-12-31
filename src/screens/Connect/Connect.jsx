import React, { useState } from 'react'
import './Connect.css'

function Connect() {

    const [name, setName] = useState();
    const [fromEmail, setFromEmail] = useState();
    const [phone, setPhone] = useState();
    const [body, setBody] = useState();

    const handleConnect = (event) => {

        event.preventDefault();

        window.Email.send({
            SecureToken: '9fab2477-8910-424f-9df1-0d086e156174',
            To: 'adithya.p.portfolio@gmail.com',
            From: 'adithya.p.portfolio@gmail.com',
            Subject: `New contact mail from ${name}`,
            Body: `Sender: ${fromEmail}:<br>Phone:${phone}<br><hr><br> ${body}`
        }).then(
            message => alert(message)
        );
    }

    return (
        <div id='connect' className="connect-section">
            <section className="connect-container">
                <div className="connect-title">Write to me</div>
                <div className="form-field-container">
                    <form onSubmit={handleConnect}>
                        <input id='name' type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input id='email' type="text" placeholder="Your Email" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} />
                        <input id='phone' type="text" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input className="message-input" type="text" placeholder="Your message to me" value={body} onChange={(e) => setBody(e.target.value)} />

                        <div className="connect-button-container">
                            <button className="connect-button">{'> '}Send<span>_</span></button>
                        </div>
                    </form>
                </div>

            </section>
        </div>
    )
}

export default Connect;
