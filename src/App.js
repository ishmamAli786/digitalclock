import React,{useState} from 'react';

function App() {
  let time=new Date().toLocaleTimeString();
  const [ctime,stime]=useState(time);
  const UpdateTime=()=>{
    time=new Date().toLocaleTimeString();
    stime(time);
  };
  setInterval(UpdateTime,1000);
  return (
    <>
    <h1>{ctime}</h1>
    <button onClick={UpdateTime}>Get Time</button>
    </>
  );
}

export default App;
