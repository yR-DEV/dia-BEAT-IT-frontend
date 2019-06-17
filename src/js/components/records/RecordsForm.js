import React from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addBloodSugarRecord, getBloodSugarRecords } from '../../actions/index';
import M from 'materialize-css';

// function mapDispatchToProps(dispatch) {
//     return { addBloodSugarRecord: record => dispatch(addBloodSugarRecord(record)),
//      };
// }

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
                                <select name="record_time" className="ui-interface-background white-text" onChange={this.handleChange}>
                                    <option className="ui-interface-background white-text" value="" defaultValue>Time</option>
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
                            <div className="input-field col s2 ui-interface-backgrounds">
                                <label htmlFor="record_date"></label>
                                <input name="record_date" className="white-text" type="text" placeholder="Date mm/dd/yyyy" onInput={this.handleChange}/>
                            </div>
                            <div className="input-field col s2">
                                <a className="waves-effect waves-light btn green accent-4 new-bs-btn" onClick={this.handleSubmit}>Submit New BloodSugar</a>
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
