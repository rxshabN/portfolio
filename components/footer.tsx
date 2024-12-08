import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="poppins py-8 text-white text-center cursor-default">
      <div className="mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rishab Nagwani. All rights reserved.
        </p>
        <div className="mt-2 -mb-5 flex justify-center gap-6 text-sm sm:flex-nowrap flex-wrap w-[21.5rem]">
          <Link
            href="https://www.linkedin.com/in/rishab-nagwani-53a37628a"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/rxshabN"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <span>GitHub</span>
          </Link>
          <Link
            href="mailto:nagwanirishab@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <span>Email</span>
          </Link>
          <Link
            href="https://www.instagram.com/ri_shab.n/profilecard/?igsh=MTd2ZmRlczlwZHlzMg=="
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <span>Instagram</span>
          </Link>
          <Link
            href="https://peerlist.io/rishabnagwani"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <span>Peerlist</span>
          </Link>
          <Link
            href="https://medium.com/@nagwanirishab"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <span>Medium</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
