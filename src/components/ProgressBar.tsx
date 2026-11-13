import React, { useEffect, useState } from 'react';

export const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setProgress(Math.min(100, Math.max(0, (window.scrollY / scrollHeight) * 100)));
      }
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#c084fc] via-[#818cf8] to-[#f5d076] shadow-[0_0_12px_rgba(192,132,252,0.85)] transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
