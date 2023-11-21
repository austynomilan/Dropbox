import React from 'react';

export default function Intro() {
  return (
    <div class='text-center bg-black text-white h-[20.44rem]'>
      <h2>
        securely collaborate on your <br />
        content anywhere, anytime
      </h2>
      <p>
        with Dropbox, you get full suite of tools designed to help you create,
        share, manage, and track content <br />
        more efficiently. Plus, proven cloud storage you can trust.
      </p>
      <button>
        Get Started now
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
          />
        </svg>
      </button>
    </div>
  );
}
