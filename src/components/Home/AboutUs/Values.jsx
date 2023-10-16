import React from 'react'

const Values = ({src, name, text}) => {
    return (
        <div className='flex flex-col items-center gap-2'> 
            <img className='h-[40px] w-[50px]' src={src} alt="Values" />
            <p className={text}>{name}</p>
        </div>
    )
}

export default Values