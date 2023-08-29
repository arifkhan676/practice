import React from 'react'
import { useContext } from 'react'
import { contextAPI } from '../App'

const Test = () => {

    const [count, setCount] = useContext(contextAPI)


    const handleClick = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p> I am testing : {count} </p>
            <button onClick={handleClick} > click </button>
        </div>
    )
}

export default Test
