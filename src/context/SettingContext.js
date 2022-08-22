import { useState, createContext } from "react";

export const SettingContext= createContext()

const SettingsContextProvider = (props) => {

  const [train, SetTrain] = useState(0)
  const [executing, setExecuting] = useState({})
  const [startAnimate, setStartAnimate] = useState(false)

  function startTimer() {
    setStartAnimate(true)
  }
  function pauseTimer() {
    setStartAnimate(false)
  }
  function stopTimer() {
    setStartAnimate(false)
  }

  const SettingBtn = () => {
    setExecuting({})
    SetTrain(0)
  }

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state
    })
    setTimerTime(executing)
  }

  const updateExecute = updatedSettings => {
    setExecuting(updatedSettings)
    setTimerTime(updatedSettings)
  }

  const setTimerTime = evaluate => {
    switch (evaluate.active) {

      case 'work':
        SetTrain(evaluate.work)  
        break;

        case 'short':
          SetTrain(evaluate.short)  
          break;

        case 'long':
          SetTrain(evaluate.long)  
          break;

      default:
        SetTrain(0)
        break;
    }
  }

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

    return `${minutes}:${seconds}`
  }

  return (
    <SettingContext.Provider 
    value={{
      stopTimer,
      updateExecute,
      train,
      executing,
      startAnimate,
      startTimer,
      pauseTimer,
      SettingBtn,
      setCurrentTimer,
      children
    }}>
        {props.children}
    </SettingContext.Provider>
)
}

export default SettingsContextProvider