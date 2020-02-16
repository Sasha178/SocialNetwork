import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo__img}
                 src='https://avatanplus.com/files/resources/mid/5ac635924849216296414378.png'/>
        </header>
    )
};

export default Header;