// src/components/partials/Header.js
import React from "react";

export default function Header({ title }) {
  return (
    <header className="p-4 shadow-md">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </header>
  );
}
