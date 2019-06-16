import React from 'react'
import { connect } from 'react-redux';
import {BrowserRouter as Link} from 'react-router-dom';
import uuidv1 from 'uuid';

import { editDiabetesProfile } from '../../actions/index';

const mapStateToProps = (state) => {
    return { userDiabetesProfile: state.userDiabetesProfile }
};

const mapDispatchToProps = (dispatch) => {
    return { editDiabetesProfile: profile => dispatch(editDiabetesProfile(profile)) }
}

// function mapDispatchToProps(dispatch) {
//     return { addBloodSugarRecord: record => dispatch(addBloodSugarRecord(record)) };
// }

class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount = () => {
        this.setState({userDiabetesProfile: this.props.userDiabetesProfile[0]});
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ ...this.state.userDiabetesProfile, [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { a1c_goal, blood_sugar_target_high, blood_sugar_target_low,
                height, weight, lantus_units, morning_insulin_to_carb_ratio, 
                night_insulin_to_carb_ratio, personal_goal, user } = this.state;
        const id = uuidv1();
        this.props.editDiabetesProfile({ a1c_goal, blood_sugar_target_high, blood_sugar_target_low,
            height, weight, lantus_units, morning_insulin_to_carb_ratio, 
            night_insulin_to_carb_ratio, personal_goal, user });
        
        this.props.toggleEdit();
    }



    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const { blood_sugar, carbs, insulin_units, record_time, record_date } = this.state;
    //     const id = uuidv1();
    //     this.props.addBloodSugarRecord({ blood_sugar, carbs, insulin_units, record_time, record_date, id });
    //     this.setState({
    //         id: 0,
    //         blood_sugar: 0,
    //         carbs: 0,
    //         insulin_units: 0,
    //         record_time: "",
    //         record_date: "",
    //     });

    render() {
        return (
            <div className="card ui-interface-backgrounds white-text">
                <div className="container">
                    <form>
                        <h2>{this.props.userDiabetesProfile[0].user.email}</h2>
                        <h3>{this.props.userDiabetesProfile[0].user.username}</h3>
                        <div className="row">
                            <label htmlFor="personal_goal">Personal Goal: </label>
                            <input type="text" className="white-text" id="personal_goal" name="personal_goal" onChange={this.handleChange} defaultValue={this.props.userDiabetesProfile[0].personal_goal} />
                        </div>
                        <div className="row">
                            <label htmlFor="blood_sugar_target_high">Blood Sugar Range Goal (high): </label>
                            <input type="text" className="white-text" name="a1c_goal" onChange={this.handleChange} defaultValue={this.props.userDiabetesProfile[0].a1c_goal} />
                        </div>
                        <div className="row">
                            <label htmlFor="morning_insulin_to_carb_ratio">Morning Insulin/Carb Ratio: </label>
                            <input type="text" className="white-text" name="morning_insulin_to_carb_ratio" onChange={this.handleChange} defaultValue={this.props.userDiabetesProfile[0].morning_insulin_to_carb_ratio} />
                        </div>
                        <div className="row">
                            <label htmlFor="night_insulin_to_carb_ratio">Afternoon Insulin/Carb Ratio: </label>
                            <input type="text" className="white-text" name="night_insulin_to_carb_ratio" onChange={this.handleChange} defaultValue={this.props.userDiabetesProfile[0].night_insulin_to_carb_ratio} />
                        </div>
                        <div className="row">
                            <label htmlFor="lantus_units">Lantus Units: </label>
                            <input type="text" className="white-text" name="lantus_units" onChange={this.handleChange} defaultValue={this.props.userDiabetesProfile[0].lantus_units} />
                        </div>
                        <div className="row">
                            <label htmlFor="blood_sugar_target_low">Blood Sugar Target (low): </label>
                            <input type="text" className="white-text" name="blood_sugar_target_low" onChange={this.handleChange} defaultValue={this.props.userDiabetesProfile[0].blood_sugar_target_low} />
                        </div>
                        <div className="row">
                            <label htmlFor="blood_sugar_target_high">Blood Sugar Range Goal (high): </label>
                            <input type="text" className="white-text" name="blood_sugar_target_high" onChange={this.handleChange} defaultValue={this.props.userDiabetesProfile[0].blood_sugar_target_high} />
                        </div>
                        <div className="row">
                            <label htmlFor="height">Height: </label>
                            <input type="text" className="white-text" name="height" onChange={this.handleChange} defaultValue={this.props.userDiabetesProfile[0].height} />
                        </div>
                        <div className="row">
                            <label htmlFor="weight">Weight: </label>
                            <input type="text" className="white-text" name="weight" onChange={this.hangleChange} defaultValue={this.props.userDiabetesProfile[0].weight} />
                        </div>
                        <div className="conatiner">
                            <Link to="/profile"><a className="waves-effect waves-light btn green accent-4" onClick={this.handleSubmit}>SUBMIT</a></Link>
                            <br></br>
                            <br></br>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)
