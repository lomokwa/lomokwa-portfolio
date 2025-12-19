import React, { useState, useEffect, useRef } from 'react';
import descriptions from '@/utils/descriptions';

const TypingDescription: React.FC = () => {
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [showUnderline, setShowUnderline] = useState<boolean>(false);
  const [typingDirection, setTypingDirection] = useState<'typing' | 'deleting'>('typing');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const description = descriptions[currentDescriptionIndex];
    
    if (typingDirection === 'typing') {
      if (currentText.length < description.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(description.substring(0, currentText.length + 1));
        }, 100);
      } else {
        timeoutRef.current = setTimeout(() => {
          setTypingDirection('deleting');
        }, 2000);
      }
    } else {
      if (currentText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, 50);
      } else {
        setTypingDirection('typing');
        setCurrentDescriptionIndex((prevIndex) =>
          (prevIndex + 1) % descriptions.length
        );
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, typingDirection, currentDescriptionIndex]);

  useEffect(() => {
    const underlineInterval = setInterval(() => {
      setShowUnderline((prevValue) => !prevValue);
    }, 500);

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