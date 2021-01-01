import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

import Card from '../Card/Card';
import './WorkExperience.css';

class WorkExperience extends React.Component {

    initState = {
        mode: 'preview',
        id: '',
        companyName: '',
        role: '',
        mainTasks: '',
        workCity: '',
        workCountry: '',
        from: '',
        to: ''
    }
    state ={
        ...this.initState
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleSave = event => {
        event.preventDefault();
        this.props.handleSave({
            ...this.state,
            id: this.state.companyName+this.state.role+this.state.from
        });
        this.setState({...this.initState});
    }
    handleCancel = event => {
        event.preventDefault();
        this.setState({...this.initState});
    }
    handleAddWorkExperience = () => {
        this.setState({mode: 'edit'})
    }
    renderForm = () => {
        return (
            <form>
                    <p>
                        <label htmlFor="company-name">Company Name :</label>
                        <input onChange={this.handleChange} value={this.state.companyName} type="text" id="company-name" name='companyName' ></input>
                    </p>
                    <p>
                        <label htmlFor="role">Role :</label>
                        <input onChange={this.handleChange} value={this.state.role} type="text" id="role" name='role' ></input>
                    </p>
                    <p>
                        <label htmlFor="main-tasks">Main Tasks :</label>
                        <textarea onChange={this.handleChange} value={this.state.mainTasks} id="main-tasks" name='mainTasks' ></textarea>
                    </p>  
                    <p>
                        <span className='two-col'>
                            <label htmlFor="workCity">City :</label>
                            <input onChange={this.handleChange} value={this.state.workCity} type="text" id="workCity" name='workCity' ></input>
                        </span>
                        <span className='two-col'>
                            <label htmlFor="workCountry">Country :</label>
                            <input onChange={this.handleChange} value={this.state.workCountry} type="text" id="workCountry" name='workCountry' ></input>
                        </span>
                    </p>
                    <p>
                        <span className='two-col'>
                            <label htmlFor="from">From :</label>
                            <input onChange={this.handleChange} value={this.state.from} type="date" id="from" name='from' ></input>
                        </span>
                        <span className='two-col'>
                            <label htmlFor="to">To :</label>
                            <input onChange={this.handleChange} value={this.state.to} type="date" id="to" name='to' ></input>
                        </span>
                    </p>
                    <p>
                        <button onClick={this.handleSave} className='btn btn-save'>
                            <FontAwesomeIcon className='icon-check' icon={faCheckCircle} />
                            Save
                        </button>
                        <button onClick={this.handleCancel} className='btn btn-cancel'>
                            <FontAwesomeIcon className='icon-x' icon={faTimesCircle} />
                            Cancel
                        </button>
                    </p>      
                </form>
        )
    }

    render(){
        return (
            <>
                <h2>Work Experience</h2>
                {this.props.workExperience.map(
                    work => <Card 
                                key={work.id}
                                heading={work.companyName} 
                                subHeading={work.role}
                                delete={() => {
                                    this.props.handleDelete(work.id)
                                }}
                                section='work'
                                mode={this.props.mode}
                                />
                )}
                {this.state.mode === 'edit' ? 
                    this.renderForm() : 
                    (<button onClick={this.handleAddWorkExperience} className="btn btn-add">
                        <FontAwesomeIcon className='icon-check' icon={faPlus} />
                    Add Work Experience</button>)
                }
            </>
        )
    }
}

export default WorkExperience;