import React from "react";
import "../styling/SearchPage.css";
import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "Invitation",
    text: "You are Invited",
  },
  {
    id: 2,
    title: "Announcement",
    text: "We have an announcement to make",
  },
  {
    id: 3,
    title: "Reminder",
    text: "This is a reminder for your appointment",
  },
  {
    id: 4,
    title: "Greeting",
    text: "Hello! How are you?",
  },
  {
    id: 5,
    title: "Notification",
    text: "You have a new notification",
  },
];

const SearchPage = () => {
  return (
    <div>
      <h2>SEARCH HERE</h2>
      <div className="card">
        {cards.map((card) => (
          <Card key={card.id} title={card.title} text={card.text} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;