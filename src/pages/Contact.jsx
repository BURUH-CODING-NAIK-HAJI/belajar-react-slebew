import React from "react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(function () {
    document.title = "Contact";
  }, []);
  return (
    <div>
      <h1>Ini adalah contact</h1>
      <p>Kamu bisa menghubungi saya diini</p>
      <ul>
        <li>
          <a href="google.com">Facebook</a>
        </li>
        <li>
          <a href="google.com">Twitter</a>
        </li>
      </ul>
    </div>
  );
};
export default Contact;
