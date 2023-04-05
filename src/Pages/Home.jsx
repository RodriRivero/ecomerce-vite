import React from 'react'
import Sidebar from '../Components/Sidebar'
import Main from '../Components/Main'

export function Home() {
    return (
        <div>
            <Sidebar />
            <div className='ml-[80px]'>
                <Main />
            </div>
        </div>
    )
}

