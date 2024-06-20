import React from 'react';

const GlowingLabel = ({ text } : {text: string}) => {
  return (
    <div className="glow-label">
      {text}
    </div>
  );
};

export default GlowingLabel;