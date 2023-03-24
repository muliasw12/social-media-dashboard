import React from 'react';
import CustomIcon from '../CustomIcon/CustomIcon';

const BigCard = ({ icon, username = "gummymule", followersCount = 1987, stats = 12, type = "Followers", increased = true, lightMode, ...otherProps }) => {
    return (
        <div className={lightMode ? "big-card big-card-light" : "big-card"} {...otherProps}>
            <p className='username'>
                <CustomIcon iconName={icon} alt={icon} height={16} width={16} />
                <span>@{username}</span>
            </p>
            <div className="followers-box">
                <h2>{followersCount}</h2>
                <p>{type}</p>
            </div>
            <p className='stats'>
                {increased ?
                    <>
                        <CustomIcon iconName="up" alt="up" height={6} width={6} />
                        <span>{stats} Today</span>
                    </>
                    : <>
                        <CustomIcon iconName="down" alt="down" height={6} width={6} />
                        <span className="down">{stats} Today</span>
                    </>
                }

            </p>
        </div>
    )
}

export default BigCard;