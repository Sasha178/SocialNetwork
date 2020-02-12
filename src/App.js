import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app_wrapper'>
            <header className='header'>
                <img className='logo_img'
                     src='https://avatanplus.com/files/resources/mid/5ac635924849216296414378.png'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img className='picture_content'
                         src='https://lh3.googleusercontent.com/proxy/9zhrl5O9k4AAqOE8GE-p1b7nuSgWy84dfw3pssZj0BrtVtFaF7IF4fGxi3O_PhzJVgNB3artHd0V3Ub6zUKsMgVEI5BYXjzVy_lC9BhRW5nmepnixYq5ET4v5oOczRERoKn3DXuTBQr2dD_u8-6o2papdrH3T4s3jc-WsNqLlQ'/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    MY POST
                    <div>
                        NEW POST
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>);
}


export default App;
