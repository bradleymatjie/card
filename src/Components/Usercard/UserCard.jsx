import './UserCard.scss';

import pp from '../../assets/profile.jpeg';
import { useEffect, useState } from 'react';


export const UserCard = () => {
    const [loaded, setloaded] = useState(false);
    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        setloaded(true);
    }, [])
    

    const RotateFunc = () => {
        setRotate(prev => !prev)
    }
    return (
        <div className={`user-profile-card ${loaded ? 'active': ''} ${rotate ? 'rotate': ''}`}>
            <img src={pp} alt="Profile" />
            <div>
                <div className='user-profile-card_info'>
                    <h2 className={`${rotate ? 'rotate': ''}`}>{rotate ? 'Lets Connect...':'Bradley Matjie'}</h2>
                    <p className={`${rotate ? 'rotate': ''}`}>{rotate ? '':'Software Engineer'}</p>
                    <h3 className={`${rotate ? 'rotate': ''}`}>{rotate ? 'Follow Me In Any Of These Social Media Accounts':'Passionate Software Engineer with expertise in JavaScript+TypeScript, React, Java and Node.js'}</h3>
                </div>
            
                <div className="stats">
                    {rotate ? <p className={`${rotate ? 'rotate': ''}`}><a href='https://github.com/bradleymatjie'>Github</a></p>:<div>
                        <p>19000</p>
                        <p>Followers</p>
                    </div>}

                    {rotate ? <p className={`${rotate ? 'rotate': ''}`}><a href='https://twitter.com/BradleyMatjie'>Twitter</a></p>:<div>
                        <p>203</p>
                        <p>Following</p>
                    </div>}

                    {rotate ? <p className={`${rotate ? 'rotate': ''}`}><a href='https://www.linkedin.com/in/bradleymatjie/'>LinkedIn</a></p>:<div>
                        <p>107</p>
                        <p>Projects</p>
                    </div>}
                </div>

                <div className="buttons">
                    <button>Follow</button>
                    <button onClick={RotateFunc} className={`${rotate ? 'rotate': ''}`}>
                        {rotate ? 'Back': 'View Profile'}
                    </button>
                </div>
            </div>
        </div>
    );
}