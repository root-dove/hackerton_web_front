// src/components/ExampleComponent.js
import React from 'react';
import GIF from '../../assets/anigif.gif'

const Test = () => {
  return (
    <div className="p-4">
      <img
        src={GIF}
        alt="test"
      />
    </div>
  );
};

export default Test;
