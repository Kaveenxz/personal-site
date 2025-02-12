import React from 'react';

interface SpaceProps {
  direction?: string;
  color?: string;
  backgroundImage?: string;
  bgSize?: string;
}

function Space({ direction = "", color = "", backgroundImage = "", bgSize = "" }: SpaceProps) {
  return (
    <div className="w-full">
      <div
        className={`w-screen pb-10 ${direction} ${color}`}
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: bgSize,
        }}
      ></div>
    </div>
  );
}

export default Space;
