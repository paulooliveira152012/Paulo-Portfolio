import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './style.css';

function ContactMe() {
  
  return (
    <form action="https://formsubmit.co/paulooliveira152012@gmail.com" method="POST">
      <div class="formGroup"><input type='text' name='name' placeholder='Name' required></input></div>
      <div class="formGroup"><input type='email' name='email' placeholder='email' required></input></div>
       <div class="form-group">
          <textarea class="form-control" name="message" rows="5" placeholder="Your Message"></textarea>
        </div>
     <button type="submit">Send</button>
    </form>
  );
}

export default ContactMe;
