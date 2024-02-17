import React from 'react'
import { Outlet } from 'react-router-dom';

export default function pg(props) {

    return (
        <div className='body_principal'>
            
            <Outlet />
        </div>
    )
}

