import React, { useContext, useState } from 'react'
import { SettingContext } from '../context/SettingContext'
import Button from './Button'

const Set = () => {
    const{updateExecute} = useContext(SettingContext)
    const [newTimer, setNewTimer] = useState({
        work: 2,
        short: 1,
        long: 5,
        active: 'work'
    })

    
    const handleChange = input => {
        const {name, value} = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: value
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: value
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: value
                })
                break;
            default:
                break;
        }
        console.log(newTimer)
    }

    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
  return (
    <div className="form-container">
        <form noValidate>
            <div className="input-wrapper">
                <h4>Training</h4>
                <input className="input" name="work" onChange={handleChange} value={newTimer.work} />
                <h4>Short Break</h4>
                <input className="input" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                <h4>Long Break</h4>
                <input className="input" name="longBreak" onChange={handleChange} value={newTimer.long} />
            </div>
            <Button title="Set Timer" _callback={handleSubmit} />
        </form>
    </div>
  )
}

export default Set