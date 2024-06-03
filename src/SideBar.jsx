import './App.css'
import blob from './assets/blob.svg'
import glow from './assets/glow.svg'
import maleDev from "./assets/male-dev.jpg"
import logo from "./assets/logo.png"
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import { useState } from 'react'

function SideBar() {

    return (
        <>
            <div className="bg-main h-screen w-2/12 relative flex flex-col overflow-hidden rounded-none">{/**main side-bar frame mainly for purple-gradient look*/}
                <div className="shadow h-20 w-20 ml-56 mt-28"><div className="circle-wrapper h-48 w-32"><div className="circle h-32 w-32"></div></div></div>
                <div className='blur-card flex flex-col h-full absolute w-full'> {/**blur frame */}
                    <div className='h-8 mt-5 w-full ml-1'><img src={logo} alt="logo" className='h-full w-22'></img></div> {/**div for logo */}
                    <div className='mt-20 ml-5 w-52'>{/**div for common setting options */}
                        <ul className='list-none text-color-sideBar space-y-2'>
                            <li className='hvr-back-pulse w-full rounded-md flex items-center justify-start'>
                                <SpaceDashboardOutlinedIcon className='purpleIcon' fontSize='medium' />
                                <span className='profile-text ml-2'>Dashboard</span>
                            </li>
                            <li className='hvr-back-pulse w-full rounded-md flex items-center justify-start'>
                                <BookOutlinedIcon className='purpleIcon' fontSize='medium' />
                                <span className='profile-text ml-2'>Option1</span>
                            </li>
                            <li className='hvr-back-pulse w-full rounded-md flex items-center justify-start'>
                                <DeleteOutlineIcon className='purpleIcon' fontSize='medium' />
                                <span className='profile-text ml-2'>Option2</span>
                            </li>
                            <li className='hvr-back-pulse w-full rounded-md flex items-center justify-start'>
                                <NotificationsNoneIcon className='purpleIcon' fontSize='medium' />
                                <span className='profile-text ml-2'>Option3</span>
                            </li>
                            <li className='hvr-back-pulse w-full rounded-md flex items-center justify-start'>
                                <AnnouncementOutlinedIcon className='purpleIcon' fontSize='medium' />
                                <span className='profile-text ml-2'>Option4</span>
                            </li>
                        </ul>
                    </div>
                    <div className='h-10 w-full flex mt-auto space-x-4 mb-2 justify-between'>{/**profile-name frame */}
                        <div className='h-full w-14 ml-2 overflow-hidden'><img src={maleDev} alt="Profile" className='h-10 w-10 rounded-full'></img></div>{/**div for profile picture */}
                        <div className='items-center flex w-full'><p className='text-white'>Tanmay</p></div>{/**div for name of user */}
                    </div>
                </div>
            </div>


        </>




    )
}


export default SideBar;

