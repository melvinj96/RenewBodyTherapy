import React from 'react';
import { FaCheck } from 'react-icons/fa';

/**
 * Styled bullet list for blog content — matches site secondary accent cards.
 */
function BlogBulletGrid({ items, className = '' }) {
  if (!items?.length) return null;

  return (
    <ul
      className={`not-prose m-0 grid list-none gap-3 p-0 sm:grid-cols-2 ${className}`.trim()}
    >
      {items.map((text) => (
        <li
          key={text}
          className="flex gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3.5 shadow-sm transition-all duration-200 hover:border-secondary/30 hover:shadow-md"
        >
          <span
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary"
            aria-hidden
          >
            <FaCheck className="h-3.5 w-3.5" />
          </span>
          <span className="pt-0.5 text-sm font-primary leading-snug text-gray-700 sm:text-base">{text}</span>
        </li>
      ))}
    </ul>
  );
}

export default BlogBulletGrid;
