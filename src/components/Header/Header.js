import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <span className="data-feed">DataFeed</span>
      <span className="watch">Watch</span>
      <span className="vs-go-data"> vs GoDataFeed</span>
    </div>
  );
}
