import { useState, useEffect } from 'react';
import bootText from "@/utils/bootText";
import styles from '@/styles/StartupAnimation.module.scss';

const StartupAnimation: React.FC = () => {
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prevLine => prevLine + 1);
    }, 600); // Adjust the interval speed as needed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentLine === bootText.length) {
      setTimeout(() => {
        setAnimationComplete(true);
      }, 2000); // Add a delay if needed before hiding the animation
    }
  }, [currentLine]);

  if (animationComplete) {
    return null; // Hide the animation component
  }

  return (
    <div className={styles.container}>
      {bootText.slice(0, currentLine).map((line, index) => (
        <div key={index} className={styles.line}>{line}</div>
      ))}
    </div>
  );
};

export default StartupAnimation;