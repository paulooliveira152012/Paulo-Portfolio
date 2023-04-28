import React from "react";
import ContactMe from "../../pages/ContactMe";
import "./style.css";


function Footer() {
    return (
        <footer>
  
          <div className="socialMedia">
            <h3>Social Media</h3>
              <ul>
                <li><a href="https://www.linkedin.com/in/paulo-de-lacerda-oliveira-552677b7/" target="__blank"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com/paulooliveira152012" target="__blank"><i class="fab fa-github"></i></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100005004306012" target="__blank"><i class="fab fa-facebook"></i></a></li>
              </ul>
          </div>

          <div className="contactInfo">
            <h3>Contact Me</h3>
            <ul>
              <li>Email: <a href="mailto:paulooliveira152012@gmail.com">paulooliveira152012@gmail.com</a></li>
              <li>Phone Number: <a href="tel:9086308458">(908) 630-8458</a></li>
            </ul>
          </div>
        </footer>
    )
};

export default Footer;