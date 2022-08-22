import { useContext } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingContext } from '../context/SettingContext'


const CountdownAnimation = ({key, timer, animate = true, children}) => {

    const { stopTimer } = useContext(SettingContext)
  
      return (
        <CountdownCircleTimer

        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={["#00FF00", "#f2fc30", "#ed561a", "#FF0000"]}
        colorsTime={[timer * 60, timer*60 * 2/3, timer * 60 /3, 0]}
        strokeWidth={25}
        size={245}
        isSmoothColorTransition
        trailColor="#151932"
        onComplete={() => ({stopTimer})}
        >
          {children}
        </CountdownCircleTimer>
      )
  }
  
  export default CountdownAnimation