import React from 'react'
import './Footer.css'
import PlayCircleIcon from '@material-ui/icons/PlayCircleFilledWhite'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import { Grid, Slider } from '@material-ui/core'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <img src="https://i.scdn.co/image/ab67616d0000b2732bb07fe40f5e794d6a5d9ca9" alt="" className="footer_albumLogo" />
                <div className="footer_songInfo">
                    <h4>Sad Cowboy</h4>
                    <p>Goat Girl - On All Fours</p>
                </div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon" />
                <PlayCircleIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />
            </div>
            <div className="footer_right">
                <Grid container spacing={2} >
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
