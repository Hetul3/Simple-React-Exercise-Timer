import { useContext, useEffect } from "react";
import Button from "./components/Button";
import Set from "./components/Set";
import { SettingContext } from "./context/SettingContext";
import CountdownAnimation from "./components/CountdownAnimation";

function App() {
  const {train, executing, setCurrentTimer, SettingBtn, children, startAnimate, startTimer, pauseTimer, updateExecute} = useContext(SettingContext)

  useEffect(() => updateExecute(executing), [executing, startAnimate])

  return (
    <div className="container">
      <h1>WORKOUT TIMER</h1>
      {train === 0 ?
      <Set /> :
      <>
      <ul className="labels">
        <li>
          <Button 
            title="Training"
            activeClass={executing.active === 'work' && 'active-label'}
            _callback = {() => setCurrentTimer('work')}
          />
        </li>
        <li>
          <Button 
            title="Short Break"
            activeClass={executing.active === 'short' && 'active-label'}
            _callback = {() => setCurrentTimer('short')}
          />
        </li>
        <li>
          <Button 
            title="Long Break"
            activeClass={executing.active === 'long' && 'active-label'}
            _callback = {() => setCurrentTimer('long')}
          />
        </li>
      </ul>
      <Button title="Settings" _callback={SettingBtn} />
        <div className="timer-container">
          <div className="time-wrapper">
          <CountdownAnimation
            key={train}
            timer={train}
            animate={startAnimate}
          >
            {children}
          </CountdownAnimation>
        </div>
      </div>
      <div className="button-wrapper">
      <Button title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
      <Button title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
      </div>
      </>
      }
    </div>
  );
}

export default App;
