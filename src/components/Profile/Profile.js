import React from 'react';

export default class Profile extends React.PureComponent {
    state = {
        userProfileSettings: []
    }

    render() {
        return (
            <div className="container">
                { this.props.userProfileSettings && this.state.userProfileSettings &&
                <div className="card">
                    <div className="profile-a1c-goal">
                        {/* {this.state.userProfileSettings[0].id} */}
                        DIABETES MEDICAL PROFILE HERE!
                    </div>
                </div>
                }
            </div>
        )
    }
    
}

