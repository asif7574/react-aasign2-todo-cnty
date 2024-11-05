import React from "react";
import './Footer.css'
function Footer() {
  return (
    <div>
      <footer>
        {" "}
        <div class="footer-content">
          {" "}
          <p>&copy; 2024 Asif solutions. All rights reserved.</p>{" "}
          <ul class="social-media">
            {" "}
            <li>
              <a href="https://www.facebook.com/yourpage" target="_blank">
                Facebook
              </a>
            </li>{" "}
            <li>
              <a href="https://www.twitter.com/yourpage" target="_blank">
                Twitter
              </a>
            </li>{" "}
            <li>
              <a href="https://www.instagram.com/yourpage" target="_blank">
                Instagram
              </a>
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </footer>
    </div>
  );
}

export default Footer;
