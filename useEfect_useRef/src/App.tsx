/* eslint-disable max-len */
import React, {
  useState, useEffect, useRef, FormEvent, createElement, useId,
} from 'react';
import FirstFormElement from './components/FirstFormElement';
import SecondFormElementWithButton from './components/SecondFormElementWithButton';
import ThirdButtonEnabling from './components/ThirdButtonEnabling';
import FourthCounter from './components/FourthCounter';
import DivChangesBackgroundColor from './components/DivChangesBackgroundColor';
import DivToggleColors from './components/DivToggleColors';
import CloneTheDiv from './components/CloneTheDiv';
import RelocateDiv from './components/RelocateDiv';
import CounterAndReaderForm from './components/CounterAndReaderForm';
import MaximizerAndNameChanger from './components/MaximizerAndNameChanger';
import './App.css';

function App() {
  return (
    <div className='container'>

      <div className="task-wrapper">
        <FirstFormElement/>
      </div>

      <div className='task-wrapper'>
        <SecondFormElementWithButton />
      </div>

      <div className="task-wrapper">
        <ThirdButtonEnabling />
      </div>

      <div className="task-wrapper">
        <FourthCounter />
      </div>

      <DivChangesBackgroundColor />
      <div className="task-wrapper">
        <DivToggleColors />
      </div>

      <div className="task-wrapper task-wrapper__cloner">
        <CloneTheDiv />
      </div>

      <div className="task-wrapper">
        <RelocateDiv/>
      </div>

      <div className="task-wrapper">
        <CounterAndReaderForm />
      </div>

      <div className="task-wrapper">
        <MaximizerAndNameChanger />
      </div>
    </div>
  );
}

export default App;
