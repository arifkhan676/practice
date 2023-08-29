import React from 'react'
import Test from './Test'
import { useContext } from 'react'
import { contextAPI } from '../App'

const Navbar = () => {
    const getdata = useContext(contextAPI)
    return (
        <div>
            <h1> hello i am navbar : {getdata}  </h1>
            <Test />
        </div>
    )
}

export default Navbar
