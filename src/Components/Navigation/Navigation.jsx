import React from 'react'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {

    const navigate = useNavigate();

  return (
    <div className='h-screen sticky top-0'>
        <div className='py-5'>
        <img src="https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg" alt="twitter" height={30} width={30} />
        </div>

        <div className='space-y-6'>
           {navigationMenu.map((item) => <div className='cursor-pointer flex space-x-3 items-center' onClick={() => item.title==="profile" ? navigate(`profile/${5}`
           ):
           navigate(item.path)
           }>
            {item.icon}
            <p className='text-xl'>{item.title}</p>
           </div>)}
        </div>
    </div>
  )
}

export default Navigation