import React from 'react';
import './GeneralInformation.css';

class GeneralInformation extends React.Component {

    // state = {
    //     fullName: '',
    //     occupation: '',
    //     email: '',
    //     phone: '',
    //     city: '',
    //     country: ''
    // }

    // handleChange = (event) => {
    //     const {name, value} = event.target;
    //     this.setState({[name]: value})
    // }

    render(){
        return (
            <>
                <h2>General Information</h2>
                <form>
                    <p>
                        <label htmlFor="full-name">Full Name :</label>
                        <input value={this.props.fullName} onChange={this.props.handleChange} type="text" id="full-name" name='fullName' ></input>
                    </p>
                    <p>
                        <label htmlFor="occupation">Occupation :</label>
                        <input value={this.props.occupation} onChange={this.props.handleChange} type="text" id="occupation" name='occupation' ></input>
                    </p>
                    <p>
                        <label htmlFor="email">Email :</label>
                        <input value={this.props.email} onChange={this.props.handleChange} type="email" id="email" name='email' ></input>
                    </p>
                    <p>
                        <label htmlFor="phone">Phone :</label>
                        <input value={this.props.phone} onChange={this.props.handleChange} type="tel" id="phone" name='phone' ></input>
                    </p>
                    <p>
                        <span className='two-col'>
                            <label htmlFor="city">City :</label>
                            <input value={this.props.city} onChange={this.props.handleChange} type="text" id="city" name='city' ></input>
                        </span>
                        <span className='two-col'>
                            <label htmlFor="country">Country :</label>
                            <input value={this.props.country} onChange={this.props.handleChange} type="text" id="country" name='country' ></input>
                        </span>
                    </p>

                </form>
            </>
        )
    }
}

export default GeneralInformation;