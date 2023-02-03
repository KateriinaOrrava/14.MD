import React, {
    useState, useEffect, useRef, FormEvent, createElement, useId,
  } from 'react';
const CounterAndReaderForm = () => {
  const [count, setCount] = useState(0);
  const Counter = () => {
    setCount(count + 1);
    // useEffect(() => {
    //   document.title = `You clicked ${count} times`;
    // });
    console.log('counter changed');
  };
  const [text, setText] = useState('');
  const ChangerText = (string:string) => {
    setText(string);
    console.log('input changed');
  };
  return (<>
        <button
            type="button"
            onClick={Counter}>
            +
            </button>
            <p className="counter">
            Count me: {count}</p>
            <form>
            <input type="text" title='i am here' onChange={(e) => ChangerText(e.target.value)}/>
            <p>{text}</p>
            </form></>);
};
export default CounterAndReaderForm