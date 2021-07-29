import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" className="sidebar_logo" alt="" />
            <SidebarOption Icon={HomeIcon} option="Home" />
            <SidebarOption Icon={SearchIcon} option="Search" />
            <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
        </div>
    )
}

export default Sidebar
