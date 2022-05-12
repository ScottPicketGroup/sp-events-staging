import React, {useEffect, useRef} from 'react'
import { MenuContainer } from './PageMenu.css'

const PageMenu = ({menuItemsArr}) => {
    
    const items = [...menuItemsArr]

    const itemsRef = useRef([]);

    useEffect(() => {
        menuItemsArr.map(i => {items.push(i)})
        itemsRef.current = itemsRef.current.slice(0, items.length);
     }, []);

    //  const executeScroll = () => myRef.current.scrollIntoView()

    console.log(itemsRef.current)
    return (
        <MenuContainer>
            {
                items.map((menuItem, i) => (
                    <div 
                    key={i}
                    ref={el => itemsRef.current[i] = el}
                    >
                        {menuItem}
                    </div>
                ))
            }
        </MenuContainer>
    )
}

export default PageMenu
