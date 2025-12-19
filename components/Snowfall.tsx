
import React from 'react';

const Snowfall: React.FC = () => {
  const snowflakes = Array.from({ length: 50 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {snowflakes.map((_, i) => {
        const size = Math.random() * 10 + 5;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        const opacity = Math.random();

        return (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: opacity
            }}
          >
            ❄
          </div>
        );
      })}
    </div>
  );
};

export default Snowfall;
