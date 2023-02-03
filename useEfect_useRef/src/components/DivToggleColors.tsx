import React, { useRef } from 'react';

const DivToggleColors = () => {
  const divRef = useRef<HTMLDivElement>(null!);
  const handleClickForDiv = () => {
    divRef.current.style.backgroundColor = divRef.current.style.backgroundColor === 'white' ? 'yellow' : 'white';
  };
  return (<>
        <button onClick={handleClickForDiv}>Change Color</button>
        <div ref={divRef} style={{ backgroundColor: 'yellow', height: '100px', width: '100px' }}>
        </div></>
  );
};

export default DivToggleColors;
