import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './../Hero'
import { useMatch } from 'react-router-dom'

export default function Layout({children}) {
  return (
    <>
        {Boolean(useMatch("/"))===false?<header className='w-full mx-3 xl:w-9/12 md:w-11/12 md:mx-auto'>
            <Navbar />
        </header>:""}
        <main className='relative'>
            <div className=''>
                {children}
            </div>
        </main>
        <footer className='relative'>
            <Footer />
        </footer>
    </>
  )
}
