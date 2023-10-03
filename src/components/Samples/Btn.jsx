import React from 'react'
import { Link } from 'react-router-dom'

const Btn = ({style, text, to}) => {

    if(!to){
        return (
            <button className={style + ' bg-primary hover:bg-secondary rounded-lg text-white font-medium'}>{text}</button>
        )
    }

    return (
        <>
            <Link to={to}>
                <button className={style + ' bg-primary hover:bg-secondary rounded-lg text-white font-medium'}>{text}</button>
            </Link>
        </>
    )
}

export default Btn