// app/layout.jsx
'use client';
import './globals.css';
import Link from 'next/link';
import { useState, useLayoutEffect } from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
