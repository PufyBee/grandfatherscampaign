import React from 'react';

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const base = "font-semibold py-2 px-4 rounded transition";
  const styles = {
    primary: "bg-blue-800 hover:bg-blue-900 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };
  const classes = `${base} ${styles[variant]} ${className}`;

  return href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
