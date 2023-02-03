import React, {
  useState, useEffect, useRef, FormEvent, createElement, useId,
} from 'react';

const RelocateDiv = () => {
  const divRef = React.createRef<HTMLDivElement>();
  const handleClick = () => {
    const div = divRef.current;
    if (div) {
      div.style.position = 'fixed';
      div.style.top = '0';
      div.style.right = '0';
    }
  };
  return (
    <>
            <button onClick={handleClick}>Relocate</button>
        <div ref={divRef} style={{ backgroundColor: 'yellow', height: '100px', width: '100px' }} >🥸</div>
    </>
  );
};
export default RelocateDiv;
