import { useState } from 'react';
import './twitterFollow.css';
function TwitterFollow({ name, username, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing
        ? 'Siguiendo'
        : 'Seguir';

    const buttonClassName = isFollowing ? 'follow__button is-following' : 'follow__button';

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='follow'>
            <header className='follow__presentation'>
                <img src={`../src/img/${username}.png`} alt=""></img>
                <div className='follow__user'>
                    <strong>{name}</strong>
                    <span>@{username}</span>
                </div>
            </header>
            <aside >
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}
export default TwitterFollow