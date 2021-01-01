
import React from 'react';
import './App.css';

import GeneralInformation from './Components/GeneralInformation/GeneralInformation';
import Education from './Components/Education/Education'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Preview from './Components/Preview/Preview'

class App extends React.Component {

  state = {
    mode: 'edit',
    info: {
      generalInformation: {
        fullName: '',
        occupation: '',
        email: '',
        phone: '',
        city: '',
        country: ''
      },
      education: [],
      workExperience: []
    }
  }

  handleGeneralInfoChange = (event) => {
    const {name, value} = event.target;
    this.setState((prevState) => ({
        ...prevState,
        info: {
          ...prevState.info,
          generalInformation: {
            ...prevState.info.generalInformation,
            [name]: value
          }
        }}))
  }

  handleEducationSave = (educationInfo) => {
    this.setState((prevState) => ({
      ...prevState,
      info: {
        ...prevState.info,
        education : [...prevState.info.education, educationInfo]
      }
    }))
  }
  handleWorkExperienceSave = (workExperience) => {
    this.setState((prevState) => ({
      ...prevState,
      info: {
        ...prevState.info,
        workExperience : [...prevState.info.workExperience, workExperience]
      }
    }))
  }
  handleEducationDelete = (id) => {
    this.setState(prevState => {
      const newEducation = prevState.info.education.filter(edu => edu.id !== id)
      return ({
        ...prevState,
        info: {
          ...prevState.info,
          education: newEducation
        }
      })
    })
  }
  handleWorkExperienceDelete = (id) => {
    this.setState(prevState => {
      const newWorkExperience = prevState.info.workExperience.filter(work => work.id !== id)
      return ({
        ...prevState,
        info: {
          ...prevState.info,
          workExperience: newWorkExperience
        }
      })
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      if(prevState.mode === 'edit'){
        return {
          ...prevState,
          mode: 'preview'
        }
      }
      return {
        ...prevState,
        mode: 'edit'
      }
    })
  }
  render() {
    return (
      <div className="App">
        <h1>CV Generator</h1>
        {this.state.mode === 'edit' ? (
          <>
            <GeneralInformation 
              handleChange={this.handleGeneralInfoChange} 
              {...this.state.info.generalInformation} 
              />
            <Education 
              handleDelete={this.handleEducationDelete}
              handleEdit={this.handleEducationEdit} 
              education={this.state.info.education} 
              handleSave={this.handleEducationSave}
              mode={this.state.mode} 
              />
            <WorkExperience 
              handleDelete={this.handleWorkExperienceDelete}
              handleSave={this.handleWorkExperienceSave} 
              workExperience={this.state.info.workExperience}
              mode={this.state.mode}
              />
            </>
        ) :( <Preview mode={this.state.mode} {...this.state.info} />  )
        }
          
            <div>
              <button onClick={this.handleSubmit} className="btn-submit" > 
                {this.state.mode === 'edit' ? 'Submit' : 'edit'} 
              </button>
            </div>
    </div>
    )
  }
    
  
}

export default App;
