// app/not-found.js (Next.js App Router)
"use client";
import Link from "next/link";
import "./notfound.css"; // optional external stylesheet

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-subtitle">Oops! Page Not Found</p>
      <p className="notfound-text">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link href="/" className="notfound-button">
        Go Back Home
      </Link>
    </div>
  );
}