import React, {useRef} from 'react';

const DivChangesBackgroundColor = () => {
  const parentRef = useRef<HTMLDivElement>(null!);
  return (
        <div className="task-wrapper" ref={parentRef}>
        <div className="task-wrapper__choice" >
          <button>
            +
          </button>
          <br/>
          <label>
          Pick a color:
          </label>
          <select
          title="Select a color"
          name="selectedColor"
          defaultValue='choose'
          onChange={(e) => { parentRef.current.style.backgroundColor = e.target.value; }}
          >
            <option value="">--Please choose an option--</option>
            <option value="red">red</option>
            <option value="orange">orange</option>
            <option value="yellow">yellow</option>
            <option value="blue">blue</option>
          </select>
        </div>
      </div>);
};
export default DivChangesBackgroundColor;
