import React, { useEffect, useState } from 'react'
import PuppiesPresentation from './PuppiesPresentation/PuppiesPresentation'
import PuppiesHero from './PuppiesHero/PuppiesHero'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const PuppiesContainer = () => {

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
  
  if(puppies==''){
    return (
      <div>
        <PuppiesHero/>
        <div className=' w-full h-screen bg-[url(https://res.cloudinary.com/dbwomkmnq/image/upload/v1696354276/WarHouse%20Frenchies/fernando-jorge-2dtCoIe0DKM-unsplash_bp3uci.jpg)] bg-cover bg-center bg-fixed'></div>
        <section className={'w-full bg-[#ffffff] flex justify-center items-center h-screen relative z-10'}>
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        </section>

      </div>
    )
  }
  
  return (
    <div>
      <PuppiesHero/>
      <div className=' w-full h-screen bg-[url(https://res.cloudinary.com/dbwomkmnq/image/upload/v1696354276/WarHouse%20Frenchies/fernando-jorge-2dtCoIe0DKM-unsplash_bp3uci.jpg)] bg-cover bg-center bg-fixed'></div>
      <section className={'w-full bg-[#ffffff] relative z-10'}>
        <PuppiesPresentation puppies={puppies} />
      </section>
    </div>
  )
}

export default PuppiesContainer