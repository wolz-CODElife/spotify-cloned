import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import Logo from './assets/spotify2019-830x350.jpg'
import { useDataLayerValue } from './DataLayer'

const Sidebar = () => {
    const [{playlists}, dispatch] = useDataLayerValue()
    return (
        <div className="sidebar">
            <img src={Logo} className="sidebar_logo" alt="" />
            <SidebarOption Icon={HomeIcon} option="Home" />
            <SidebarOption Icon={SearchIcon} option="Search" />
            <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
            <br />
            <strong className="sidebar_title" >PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SidebarOption key={playlist.id} option={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar
