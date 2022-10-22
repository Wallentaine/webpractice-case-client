import React, {forwardRef, useEffect} from 'react';
import classes from './Dropdown.module.css'

const DropdownMenu = forwardRef (({open, setOpen, children, ...props}, dropdownRef) => {

    useEffect(() => {

        document.addEventListener('click', outsideClickListener)
        return () => {

            document.removeEventListener('click', outsideClickListener)
        }
    },[])

    const outsideClickListener = (e) => {
        if (!e.composedPath().includes(dropdownRef.current)) setOpen(false)
    }

    return (
        <div className="dropdownRef">
            <div className={open ? `${classes.dropdown} ${classes.dropdownActive}` : classes.dropdown}
                 {...props}
            >
                {children}
            </div>

        </div>
    );
});

export default DropdownMenu;