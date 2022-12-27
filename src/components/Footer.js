import React from "react";

export default function Footer() {
  return (
    <footer>
      <p className='footer-text'>
        Created by{" "}
        <a
          href='https://github.com/meiou9sei'
          className='links'
          target='_blank'
        >
          meiou9sei
        </a>{" "}
        as part of{" "}
        <a href='https://theodinproject.com' className='links' target='_blank'>
          The Odin Project
        </a>{" "}
        course curriculum.
      </p>
      <p>
        <small>
          <a
            href='https://github.com/meiou9sei/TOP-memory-game'
            className='links'
            target='_blank'
          >
            See the code for this page
          </a>
        </small>
      </p>
    </footer>
  );
}
