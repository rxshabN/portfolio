import React from "react";

export default function Footer() {
  return (
    <footer className="name py-8 text-white text-center cursor-default">
      <div className="mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rishab Nagwani. All rights reserved.
        </p>
        <div className="mt-2 -mb-5 flex justify-center gap-6 text-sm">
          <a
            href="http://www.linkedin.com/in/rishab-nagwani-53a37628a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>LinkedIn</u>
          </a>
          <a
            href="https://github.com/rxshabN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>GitHub</u>
          </a>
          <a href="mailto:nagwanirishab@gmail.com" target="_blank">
            <u>Email</u>
          </a>
          <a
            href="https://www.instagram.com/ri_shab.n/profilecard/?igsh=MTd2ZmRlczlwZHlzMg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Instagram</u>
          </a>
        </div>
      </div>
    </footer>
  );
}
