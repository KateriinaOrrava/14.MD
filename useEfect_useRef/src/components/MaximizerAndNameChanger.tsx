import React, {
  useState, useEffect, useRef, FormEvent, createElement, useId,
} from 'react';

const MaximizerAndNameChanger = () => {
  const biggerLetters = useRef<HTMLDivElement>(null!);
  const [count, setCount] = useState(16);
  const makeBigger = () => {
    setCount(count + 1);
    biggerLetters.current.style.fontSize = `${count}px`;
  };
  const [text, setText] = useState('');
  const ChangerText = (string:string) => {
    setText(string);
    document.title = text;
  };
  return (
    <>
    <button onClick={makeBigger}>+</button>
        <p className="counter" ref={biggerLetters}>count:100</p>
        <form>
          <input type="text" title='i am here' onChange={(e) => ChangerText(e.target.value)}/>
        </form>
    </>
  );
};
export default MaximizerAndNameChanger;
