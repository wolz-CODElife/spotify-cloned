import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'

const Body = ({ spotify }) => {
    const [{playlist}, dispatch] = useDataLayerValue()
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img src={playlist?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{ playlist?.name }</h2>
                    <p>{ playlist?.description }</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {playlist?.tracks.items.map(item => (
                    <SongRow key={item.track.id} track={item.track} />
                ))}
            </div>
        </div>
    )
}

export default Body
