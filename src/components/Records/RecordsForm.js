import React from 'react';

export default class RecordsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blood_sugar: 0,
            carbs: 0,
            insulin_units: 0,
            time: '',

        }
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
                                <input name="blood_sugar" placeholder="Blood Sugar Here" type="number" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2">
                                <input name="carbs" placeholder="Carbs Eaten Here" type="number" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2">
                                <input name="insulin_units" placeholder="Insulin Units Here" type="number" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2">
                                <input name="time" type="text" placeholder="Time in hh:mm" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2">
                                <input name="date" type="text" placeholder="Date in mm/dd/yyyy" onInput={this.handleChange}/>
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