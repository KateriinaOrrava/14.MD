import React, {
  useState, useEffect, useRef, FormEvent, createElement, useId,
} from 'react';

const CloneTheDiv = () => {
  const [clones, setClones] = useState(0);
  const originalRef = React.createRef<HTMLDivElement>();

  const handleClick = () => {
    const original = originalRef.current;
    if (!original) return;

    const clone = original.cloneNode(true) as HTMLDivElement;
    setClones(clones + 1);
    clone.setAttribute('id', `clone-${clones}`);

    original.after(clone);
  };
  return (
        <>
            <button onClick={handleClick}>Clone</button>
            <div ref={originalRef} style={{ backgroundColor: 'yellow', height: '100px', width: '100px' }} >😵‍💫</div>
        </>
  );
};
export default CloneTheDiv;
