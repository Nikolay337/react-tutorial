import React from "react"

/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

function Contact() {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src="./images/mr-whiskerson.png"/>
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src="./images/phone-icon.png" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src="./images/mail-icon.png" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>
    </div>
  )
}

export default Contact