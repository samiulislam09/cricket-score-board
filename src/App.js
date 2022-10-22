import { useState } from 'react';
import './App.css';

function App() {
  const [run, setRun] = useState(0)
  const [wicket, setWicket] = useState(0)
  const [noBalls, setNoBalls] = useState(0)
  const [wideBalls, setWideBalls] = useState(0)
  return (
    <div className="App">
      <section className='container'>
        <div className="batting">
          <button onClick={() => { setRun(run+1) }}>1 run</button>
          <button onClick={() => { setRun(run +2) }}>2 run</button>
          <button onClick={() => { setRun(run +3) }}>3 run</button>
          <button onClick={() => { setRun(run+4) }}>4 run</button>
          <button onClick={() => { setRun(run+6) }}>6 run</button>
          <p>Batting Team: </p>
          <p>{run}/{ wicket }</p>
        </div>
        <div className="fielding">
          <button onClick={() => { wicket < 10 && setWicket(wicket + 1) }}>Wicket</button>
          <button onClick={() => {
            setNoBalls(noBalls + 1);
            setRun(run+1)
          }}>No Ball</button>
          <button onClick={() => {
            setWideBalls(wideBalls + 1);
            setRun(run + 1)
          }}>Wide Ball</button>
          <p>Fielding Team: </p>
          <p>{wicket} Wickets</p>
          <p>{noBalls} No balls</p>
          <p>{wideBalls} wide balls</p>
        </div>

      </section>
    </div>
  );
}

export default App;
