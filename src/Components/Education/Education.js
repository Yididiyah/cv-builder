import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

import Card from '../Card/Card';
import './Education.css';

class Education extends React.Component {
    initState = {
        mode: 'preview',
        id: '',
        institutionName: '',
        qualification: '',
        graduationDate: ''
    }
    state = {
        ...this.initState
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }
    handleAddEducation = event => {
        this.setState({mode: 'edit'})
    }
    handleSave = event => {
            event.preventDefault();
            this.props.handleSave({
                ...this.state,
                id: this.state.institutionName+this.state.qualification
            });
            this.setState({
                ...this.initState
            })
    }
    handleCancel = () => {
        this.setState({mode: 'preview'})
    }

    renderForm = () => {
        return (
            <form>
                <p>
                    <label htmlFor="institution-name">Institution Name :</label>
                    <input value={this.state.institutionName} onChange={this.handleChange} type="text" id="institution-name" name='institutionName' ></input>
                </p>
                <p>
                    <label htmlFor="qualification">Qualification :</label>
                    <input value={this.state.qualification} onChange={this.handleChange} type="text" id="qualification" name='qualification' ></input>
                </p>
                <p>
                    <label htmlFor="graduation-date">Graduation Date :</label>
                    <input value={this.state.graduationDate} onChange={this.handleChange} type="date" id="graduation-date" name='graduationDate' ></input>
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
                <h2>Education</h2>
                {this.props.education.map(
                    edu => <Card 
                                key={edu.id}
                                heading={edu.institutionName} 
                                subHeading={edu.qualification}
                                delete={() => {
                                    this.props.handleDelete(edu.id)
                                }}
                                section='education'
                                mode={this.props.mode}
                                />
                )}
                {
                    this.state.mode === 'edit' ? 
                    (this.renderForm()) : 
                    (<button onClick={this.handleAddEducation} className="btn btn-add">
                        <FontAwesomeIcon className='icon-check' icon={faPlus} />
                    Add Education</button>)

                }
            </>
        )
    }
}

export default Education;