import React from "react";

type CardProps = {
  title: string;
  date?: string;
  description: string;
  items?: string[];
  link?: string;
  buttonText?: string; // optional prop for button text
};

const Card: React.FC<CardProps> = ({
  title,
  date,
  description,
  items,
  link,
  buttonText = "View Project", // default if not provided
}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      {date && <p className="date">{date}</p>}
      <p>{description}</p>
      {items && (
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default Card;
