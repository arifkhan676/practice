import React from 'react'
import { useContext } from 'react'
import { contextAPI } from '../App'


const Home = () => {
    const [count, setCount] = useContext(contextAPI)


    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1> hello i am home : {count} </h1>
            <button onClick={handleClick} > click </button>

        </div>
    )
}

export default Home
