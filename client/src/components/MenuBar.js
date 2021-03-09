import React, {useState} from 'react';

function MenuBar(){
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (e, {name}) => setActiveItem(name);

    return(
        <div>
            <ul>
                <li name="home" active={activeItem === 'home'} onClick={handleItemClick}>Home</li>
            </ul>
        </div>
    )
}

export default MenuBar;