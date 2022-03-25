import React, { useEffect, useState } from 'react'
// import Logo from 
import {useTheme} from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

function Header() {
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
      setMounted(true)
    }, [])
    
    const {systemTheme, theme, setTheme} = useTheme()
    const rendeThemeChanger = () => {
        if(!mounted) return null
        const currentTheme = theme === 'system' ? systemTheme : theme

        if (currentTheme === 'dark') {
            return (
                <SunIcon className='w-7 h-7' role='button' onClick={() => setTheme ('light')} />
            )
        }
        else {
            return (<MoonIcon className='w-7 h-7' role='button' onClick={() => setTheme ('dark')}/>)}
    }
  return (
    <header className='bg-white dark:bg-black  sticky top-0 z-50 dark:text-white dark:border-gray-700'>
        <div className='container mx-auto px-4 sm:px-6 py-4 flex justify-center items-center'>
            {rendeThemeChanger()}
        </div>
    </header>
  )
}

export default Header