import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'
import AboutHero from './HeroAbout/AboutHero'
import ValuesAbout from './ValuesAbout/ValuesAbout'
import AboutParents from './AboutParents/AboutParents'

const AboutContainer = () => {
    const [puppies,setPuppies]= useState([])

    useEffect(()=>{
        const itemCollection = collection(db, 'puppies')
        getDocs(itemCollection)
            .then(res=>{
                const productos = res.docs.map(product =>{
                    return {
                        ...product.data(),
                        id:product.id
                    }
                })
                setPuppies(productos)
            })
    },[])

    return (
        <>
            <AboutHero/>
            <div className=' w-full h-screen bg-[url(https://res.cloudinary.com/dbwomkmnq/image/upload/v1696354276/WarHouse%20Frenchies/fernando-jorge-2dtCoIe0DKM-unsplash_bp3uci.jpg)] bg-cover bg-center bg-fixed'></div>
            <ValuesAbout/>
            <AboutParents puppies={puppies}/>
        </>
    )
}

export default AboutContainer