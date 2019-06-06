import React from 'react';

const Profile = (props) => {
    console.log(props.userProfileSettings);
    
    return (
        <div className="container">
            <div className="card">
                <div className="profile-a1c-goal">
                    {/* {props.userProfileSettings.user_id} */}
                </div>
            </div>
        </div>
    )
}

export default Profile