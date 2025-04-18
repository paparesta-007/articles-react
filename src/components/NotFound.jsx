import React, {useEffect, useState} from 'react';

const NotFound = () => {
  const phrases=["You've found the cosmic void of the web. Let's go back before it's too late.",

    "This page disappeared faster than a smart answer on the Internet.",

    "Oops. This route leads to nowhere. Better to turn towards the Home.",

    "The content you're looking for is in another castle. (Mario docet.)",

    "404: The page has self-destructed for security reasons... maybe.",

    "If this were a story, there would only be a blank page here.",

    "This is embarrassing... even the AI doesn't know where this page is.",

    "You've hacked the fabric of reality. But there's nothing to see here.",

    "This page ran away before it was read. Literally.",

    "We all get lost sometimes. But at least you can go back to the Home."]
  const [randomPhrase, setRandomPhrase] = useState(null);
  useEffect(() => {
    setRandomPhrase(  phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10 mb-4">404</h1>
      <p className="text-center">{randomPhrase}</p>
    </div>
  );
};

export default NotFound;
