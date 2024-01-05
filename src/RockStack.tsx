import React from 'react';
import Rock from './Rock';

const RockStack = () => {
  const rockPositions = [
    [0, 0.25, 0],
    [0, 0.75, 0],
    [0, 1.25, 0],
    // Add as many rocks as you'd like in the stack
  ];

  return (
    <>
      {rockPositions.map((position, index) => (
        <Rock key={index} position={position} />
      ))}
    </>
  );
}

export default RockStack;
