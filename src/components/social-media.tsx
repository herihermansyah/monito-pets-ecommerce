import React from "react";
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";

const socialMediaData = [
  {id: 1, icon: <FaFacebook size={24} />},
  {id: 2, icon: <FaTwitter size={24} />},
  {id: 3, icon: <FaInstagram size={24} />},
  {id: 4, icon: <FaYoutube size={24} />},
];

function SocialMedia() {
  return (
    <nav aria-label="social media menu">
      <ul className="flex items-center gap-10">
        {socialMediaData.map((item) => (
          <div key={item.id}>
            <span>{item.icon}</span>
          </div>
        ))}
      </ul>
    </nav>
  );
}

export default SocialMedia;
