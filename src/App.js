import React from "react";
import Review from "./Review";

export default function App() {
  return (
    <div className="grid content-center justify-items-center h-screen">
      <h1 className="my-8">Unsere Bewertungen</h1>
      <div>
        <Review />
      </div>
    </div>
  );
}
