
import React from 'react';
import './App.css';

import GeneralInformation from './Components/GeneralInformation/GeneralInformation';
import Education from './Components/Education/Education'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Preview from './Components/Preview/Preview'

class App extends React.Component {

  state = {
    mode: 'preview',
    info: {
      generalInformation: {
        fullName: 'Yididiya Hailemichael',
        occupation: 'Web Developer',
        email: 'yididiya@gmail.com',
        phone: '251913645783',
        city: 'Addis Ababa',
        country: 'Ethiopia'
      },
      education: [{
        id:'qweret',
        institutionName: 'Addis Ababa University',
        qualification: 'Bachelors Degree, Computer Science ',
        graduationDate: '10/25/2015'
      },
      {
        id: 'abcde',
        institutionName: 'MIT',
        qualification: 'Bachelors Degree, Computer Science ',
        graduationDate: '10/25/2025'
      }
    ],
      workExperience: [{
        id: 'FFX',
        companyName: 'Fairfax Technologies',
        role: 'Sales Representative',
        mainTasks: 'everything',
        city: 'Addis Ababa',
        country: 'Ethiopia',
        from: '2020-15-10',
        to: '2020-15-12'
      },
      {
        id: 'FFXT',
        companyName: 'Fairfax Technologies',
        role: 'Sales Representative',
        mainTasks: 'everything',
        city: 'Addis Ababa',
        country: 'Ethiopia',
        from: '2020-15-10',
        to: '2020-15-12'
      }]
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
