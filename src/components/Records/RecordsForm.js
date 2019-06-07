import React from 'react';

export default class RecordsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleChange = (event) => {
        console.log('something is changing');
        console.log(event.target.value);
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        // console.log(event.target.value);
        // console.log('we here', 'here is the state --------------------------------', this.state, '--------------------------------');
        this.props.handleNewBloodSugarRecord(this.state);
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s2">
                                <input id="blood_sugar" name="blood_sugar" placeholder="Blood Sugar Here" type="number" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2">
                                <input name="carbs" placeholder="Carbs Eaten Here" type="number" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2">
                                <input name="insulin_units" placeholder="Insulin Units Here" type="number" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2">
                                <select name="record_time" onChange={this.handleChange}>
                                    <option value="" disabled selected>Time</option>
                                    <option value="morning">Morning</option>
                                    <option value="preBreakfast">PreBreakfast</option>
                                    <option value="postBreakfast">PostBreakfast</option>
                                    <option value="preLunch">PreLunch</option>
                                    <option value="postLunch">PostLunch</option>
                                    <option value="preDinner">PreDinner</option>
                                    <option value="postDinner">PostDinner</option>
                                    <option value="night">Night</option>
                                </select>
                            </div>
                            <div className="input-field col s2">
                                <input name="record_date" type="text" placeholder="Date mm/dd/yyyy" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2">
                                <a className="waves-effect waves-light btn red accent-2 new-bs-btn" onClick={this.handleSubmit}>Submit New BloodSugar</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}