import './UserCard.scss';

import pp from '../../assets/profile.jpeg';

export const UserCard = () => {
    return (
        <div className="user-profile-card">
            <img src={pp} alt="Profile" />
            <div>
                <div className='user-profile-card_info'>
                    <h2>Bradley Matjie</h2>
                    <p>Software Engineer</p>
                    <h3>Passionate Software Engineer with expertise in JavaScript+TypeScript, React, Java and Node.js</h3>
                </div>
            
                <div className="stats">
                    <div>
                        <p>19000</p>
                        <p>Followers</p>
                    </div>
                    <div>
                        <p>203</p>
                        <p>Following</p>
                    </div>
                    <div>
                        <p>107</p>
                        <p>Projects</p>
                    </div>
                </div>

                <div className="buttons">
                    <button>Follow</button>
                    <button>View Profile</button>
                </div>
            </div>
        </div>
    );
}