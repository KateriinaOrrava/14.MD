import React, { useEffect } from 'react';

const ThirdButtonEnabling = () => {
  const [disable, setDisable] = React.useState(true);
  const enableButton = () => {
    useEffect(() => {
      const id = setInterval(() => {
        setDisable(false);
      }, 5000);
      return () => {
        clearInterval(id);
      };
    }, []);
  };
  enableButton();
  return (
        <>
        <button disabled={disable}>
          Click me!
        </button>
        </>
  );
};
export default ThirdButtonEnabling;
