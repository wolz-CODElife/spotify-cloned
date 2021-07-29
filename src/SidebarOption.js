import React from 'react'
import "./SidebarOption.css"

const SidebarOption = ({ option, Icon }) => {
    return (
        <div className="sidebarOption"> 
            <p>{ option }</p>
        </div>
    )
}

export default SidebarOption
