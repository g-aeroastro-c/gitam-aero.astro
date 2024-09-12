"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div id="sponsors" className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={sponsors}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
//images being hosted on cloudinary
const sponsors = [
  {
    quote: "/gaac-logo.png",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    imageUrl: "https://res.cloudinary.com/dqlzpikl5/image/upload/v1722663397/cld-sample.jpg",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    imageUrl: "https://res.cloudinary.com/dqlzpikl5/image/upload/v1722663397/cld-sample-2.jpg",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    imageUrl: "https://res.cloudinary.com/dqlzpikl5/image/upload/v1722663397/cld-sample-4.jpg",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    imageUrl: "https://res.cloudinary.com/dqlzpikl5/image/upload/v1722663397/cld-sample-5.jpg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    imageUrl: "https://res.cloudinary.com/dqlzpikl5/image/upload/v1722663397/samples/cup-on-a-table.jpg",
  },
];
