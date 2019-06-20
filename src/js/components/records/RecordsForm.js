import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addBloodSugarRecord, getBloodSugarRecords } from '../../actions/index';
import M from 'materialize-css';

// Mapping state to props for this class component, need the user Id specifically to validate API calls
const mapStateToProps = (state) => {
    return { bloodSugarAverages: state.bloodSugarAverages, userId: state.userId }
}

class ConnectRecordForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            blood_sugar: 0,
            carbs: 0,
            insulin_units: 0,
            record_time: "",
            record_date: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    componentDidMount = () => {
        let elems = document.querySelectorAll('select');
        M.AutoInit();
        let instances = M.FormSelect.init(elems);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { blood_sugar, carbs, insulin_units, record_time, record_date } = this.state;
        const id = uuidv1();
        this.props.addBloodSugarRecord({ 
            blood_sugar, carbs, insulin_units, record_time, record_date, id 
        }).then(res => this.props.getBloodSugarRecords(this.props.userId))
        this.setState({
            id: 0,
            blood_sugar: 0,
            carbs: 0,
            insulin_units: 0,
            record_time: "",
            record_date: "",
        });
    }

    render() {
        return (
            <div className="white-text">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s2">
                                <label htmlFor="blood_sugar"></label>
                                <input id="blood_sugar" className="white-text" name="blood_sugar" placeholder="Blood Sugar Here" type="number" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2">
                                <label htmlFor="carbs"></label>
                                <input name="carbs" className="white-text" placeholder="Carbs Eaten Here" type="number" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2">
                                <label htmlFor="insulin_units"></label>
                                <input name="insulin_units" className="white-text" placeholder="Insulin Units Here" type="number" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2 ui-interface-background white-text">
                                <label className="white-text" htmlFor="record_time"></label>
                                <select name="record_time" className="white-text ui-interface-background" onChange={this.handleChange}>
                                    <option className="ui-interface-background white-text" defaultValue>Time</option>
                                    <option className="record-form-select" value="morning">Morning</option>
                                    <option className="record-form-select" value="preBreakfast">PreBreakfast</option>
                                    <option className="record-form-select" value="postBreakfast">PostBreakfast</option>
                                    <option className="record-form-select" value="preLunch">PreLunch</option>
                                    <option className="record-form-select" value="postLunch">PostLunch</option>
                                    <option className="record-form-select" value="preDinner">PreDinner</option>
                                    <option className="record-form-select" value="postDinner">PostDinner</option>
                                    <option className="record-form-select" value="night">Night</option>
                                </select>
                            </div>
                            <div className="input-field col s2 ui-interface-backgrounds">
                                <label htmlFor="record_date"></label>
                                <input name="record_date" className="white-text" type="text" placeholder="Date mm/dd/yyyy" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2">
                                <a className="waves-effect waves-light btn new-bs-btn login-btn" onClick={this.handleSubmit}>Save!</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, {addBloodSugarRecord, getBloodSugarRecords}) (ConnectRecordForm);

// export default RecordForm;
