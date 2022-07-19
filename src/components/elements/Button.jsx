import React from 'react';
import './Button.css';

export default function Button({ width, bg, text, color, handleClick }) {
  const size = width === 'w-2' ? 'w-2' : 'w-3' ? 'w-3' : 'w-1';
  const background = bg === 'nofill' ? 'bg-transparent' : 'bg-pink-purple';
  return (
    <button
      onClick={handleClick}
      className={`btn ${background} ${size} ${color}`}
    >
      {text}
    </button>
  );
}
