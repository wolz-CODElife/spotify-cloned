import React from 'react'
import Body from './Body'
import './Player.css'
import Sidebar from './Sidebar'

const Player = ({ spotify }) => {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body />
            </div>
        </div>
    )
}

export default Player
