import React, {useState} from 'react';
import './App.css';

function App() {
  const [data,setData] = useState(0);

  const Increment = () => {
       setData(data+1);
  }

  const Decrement = () => {
       if(data > 0){
         setData(data-1);
       }else{
         alert("It's zero limit Reached");
         setData(0);
       }
  }
  return (
    <>
      <div className="main">
        <div className="child">  
          <h2>Increment And Decrement</h2>
          <div className="num">
            <p>{data}</p>
          </div>
          <div className="btn">
            <button className="inc" onClick={Increment}>Incre</button>
            <button className="dec" onClick={Decrement}>Decre</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
