import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [leftTop, setLeftTop] = useState(0);
  const [rightTop, setRightTop] = useState(0);
  const [leftBottom, setLeftBottom] = useState(0);
  const [rightBottom, setRightBottom] = useState(0);

  function handleLeftTop(e) {
    setLeftTop(e.target.value);
  }

  const radius = {
    borderTopLeftRadius: leftTop + 'px',
    borderTopRightRadius: rightTop + 'px',
    borderBottomLeftRadius: leftBottom + 'px',
    borderBottomRightRadius: rightBottom + 'px',
  }

  const code = useRef(null);

  function handleCopy() {
    let copyText = code.current.innerText;
    navigator.clipboard.writeText(copyText);
    toast("Code copied to clipboard!");
  }

  return (
    <>
      <div className='box' style={radius}>
        <div className='set-box box-1'>
          <input value={leftTop} type="number" min='0' step='5' onChange={handleLeftTop} />
        </div>
        <div className='set-box box-2'>
          <input value={rightTop} type="number" min='0' step='5' onChange={(e) => setRightTop(e.target.value)}/>
        </div>
        <div className='set-box box-3'>
          <input value={leftBottom} type="number" min='0' step='5' onChange={(e) => setLeftBottom(e.target.value)}/>
        </div>
        <div className='set-box box-4'>
          <input value={rightBottom} type="number" min='0' step='5' onChange={(e) => setRightBottom(e.target.value)}/>
        </div>
      </div>
      <div className='result'>
        <code ref={code}>
          border-radius: {leftTop}px {rightTop}px {rightBottom}px {leftBottom}px; <br/>
          -webkit-border-radius: {leftTop}px {rightTop}px {rightBottom}px {leftBottom}px; <br/>
          -moz-border-radius: {leftTop}px {rightTop}px {rightBottom}px {leftBottom}px;
        </code>
      </div>
      <div className='btn-box'>
        <button className='btn' onClick={handleCopy}>
          Copy Css
        </button>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
