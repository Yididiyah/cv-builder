import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle} from '@fortawesome/free-solid-svg-icons';

import './Card.css';


function Card(props){
    return (
        <div className="card">
            <div className="card--inner">
                <div className='card--left'>
                    <p className='card--heading'>{props.heading}</p>
                    <p className='card--sub-heading'>{props.subHeading}</p>
                </div>
                <div className='card--right'>
                    {/* <button className="btn-small btn-edit">
                        <FontAwesomeIcon className='icon-edit' icon={faEdit} />
                    </button> */}
                    {props.mode === 'edit' ? 
                    (   <button onClick={props.delete} className="btn-small btn-delete">
                            <FontAwesomeIcon className='icon-delete' icon={faMinusCircle} />
                        </button>
                    )
                        : 
                    (props.section === 'education' ?     
                            (
                                <p className='card--sub-heading'>{props.graduationDate}</p>
                            )
                            :
                            (
                            <>
                                <p className='card--sub-heading'>{props.from} - </p>
                                <p className='card--sub-heading'>{props.to}</p>
                            </>
                            )
                    )}
                    
                </div> 
            </div>
        </div>
    )
}

export default Card;