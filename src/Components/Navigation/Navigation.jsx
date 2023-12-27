import React from 'react';
import { useNavigate } from 'react-router-dom';
import { navigationMenu } from './NavigationMenu';
import { Avatar, Button,Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navigation = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
      console.log("logout");
      handleClose();
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <div className='h-screen sticky top-0'>
      <div>
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
        <div className='py-10'>
         <Button
          sx={{width:"100%",borderRadius:"29px",py:"15px",bgColor:"blue"}}

          variant='contained'
         >
          Tweet
         </Button>
        </div>
    </div>

    <div className='flex items-center justify-between'>
           <div className='flex items-center space-x-3'>
            <Avatar 
                alt='username'
                src="https://ichef.bbci.co.uk/news/976/cpsprodpb/5353/live/5d8d0730-8306-11ee-bba0-49022e04b82f.jpg.webp"

            />
            <div>
              <span className='font-bold'>Pratik Hanmante</span>
              <br />
              <span className='opacity-70'>@imfulloferrors</span>
            </div>
            
            <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
       
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
           </div>
    </div>

    </div>
  )
}

export default Navigation