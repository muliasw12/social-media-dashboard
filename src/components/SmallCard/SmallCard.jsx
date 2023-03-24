import React from 'react';
import CustomIcon from '../CustomIcon/CustomIcon'

const SmallCard = ({icon = "facebook", text = "Page Views", count = "87", stats = "3", width = 19, height = 19, increased = true, lightMode }) => {
    return (
        <div className={lightMode ? "small-card small-card-light" : "small-card"}>
            <div className='small-card-top'>
                <span className='title-text'>{text}</span>
                <CustomIcon iconName={icon} alt={icon} width={width} height={height} />
            </div>
            <div className='small-card-bottom'>
                <span className='count-text'>{count}</span>
                <span className='stats'>
                    {increased ?
                        <>
                            <CustomIcon iconName="up" alt="up" height={6} width={6} />
                            <span>{stats}%</span>
                        </>
                        : <>
                            <CustomIcon iconName="down" alt="down" height={6} width={6} />
                            <span className="down">{stats}%</span>
                        </>
                    }
                </span>
            </div>
        </div>
    )
}

export default SmallCard;