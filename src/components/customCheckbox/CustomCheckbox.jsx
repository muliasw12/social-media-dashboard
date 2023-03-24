import React from 'react'

const CustomCheckbox = ({ isChecked, setIsChecked, lightMode, setLightMode }) => {
    const handleChange = () => {
        console.log('handleChange')
        setIsChecked(!isChecked)
        setLightMode(!lightMode)
    }
    return (
        <span className='switch'>
            <label htmlFor='theme-toggler'>
                <input type='checkbox' 
                    name='theme-toggler'
                    id='theme-toggler'
                    onChange={() => handleChange()}
                />
                <span className="toggler"></span>
            </label>
        </span>
    )
}

export default CustomCheckbox 