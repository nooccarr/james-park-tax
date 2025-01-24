import { useState } from 'react';

const ScrollButton = () => {
  const [showBtn, setShowBtn] = useState('scroll-button--hidden');

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      setShowBtn('scroll-button');
    } else {
      setShowBtn('scroll-button--close');
      setTimeout(() => {
        setShowBtn('scroll-button--hidden');
      }, 300);
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <button
      onClick={topFunction}
      id="scroll-button"
      className={`hidden md:block ${showBtn}`}
      title="Go to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff9d1"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 18.75 7.5-7.5 7.5 7.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default ScrollButton;
