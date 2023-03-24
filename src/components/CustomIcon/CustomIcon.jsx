import React from 'react'
import iconDown from '../../assets/images/icon-down.svg'
import iconUp from '../../assets/images/icon-up.svg'
import iconFacebook from '../../assets/images/icon-facebook.svg'
import iconInstagram from '../../assets/images/icon-instagram.svg'
import iconTwitter from '../../assets/images/icon-twitter.svg'
import iconYoutube from '../../assets/images/icon-youtube.svg'

const icon = {
    down: iconDown,
    up: iconUp,
    facebook: iconFacebook,
    instagram: iconInstagram,
    twitter: iconTwitter,
    youtube: iconYoutube
}

const CustomIcon = ({ iconName, height = 24, width = 24, alt = "altText" }) => {
    const name = icon[iconName]
    return (
        <img src={name} alt={alt} height={height} width={width} />
    )
}

export default CustomIcon 