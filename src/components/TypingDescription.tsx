// components/TypingDescription.tsx

import React, { useState, useEffect } from 'react';
import descriptions from '@/utils/descriptions';

const TypingDescription: React.FC = () => {
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [showUnderline, setShowUnderline] = useState<boolean>(false);
  const [typingDirection, setTypingDirection] = useState<'typing' | 'deleting'>('typing');

  useEffect(() => {
    const interval = setInterval(() => {
      const description = descriptions[currentDescriptionIndex];
      if (typingDirection === 'typing') {
        if (currentText.length === description.length) {
          setTimeout(() => {
            setTypingDirection('deleting');
          }, 2000); // Delay before deleting text
        } else {
          setCurrentText((prevText) => description.substring(0, prevText.length + 1));
        }
      } else {
        if (currentText === '') {
          setTypingDirection('typing');
          setCurrentDescriptionIndex((prevIndex) =>
            (prevIndex + 1) % descriptions.length
          );
        } else {
          setCurrentText((prevText) => prevText.substring(0, prevText.length - 1));
        }
      }
    }, 100); // Typing speed

    return () => clearInterval(interval);
  }, [currentDescriptionIndex, currentText, typingDirection]);

  useEffect(() => {
    const underlineInterval = setInterval(() => {
      setShowUnderline((prevValue) => !prevValue);
    }, 500); // Flashing speed

    return () => clearInterval(underlineInterval);
  }, []);

  return (
    <div className="py-6 flex items-center h-2">
      <p>&gt; I&apos;m a {currentText}</p>
      {showUnderline && <span className="ml-1 border-b-2 border-transparent animate-blink">_</span>}
    </div>
  );
};

export default TypingDescription;