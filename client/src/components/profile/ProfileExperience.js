import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileExperience = ({experience: {
    company,
    title,
    location,
    current,
    from,
    to,
    descritpion
}}) => {
    return (
        <div>
            <h3 class="text-dark">{company}</h3>
            <p><Moment format="YYYY/MM/DD">{from}</Moment>  - {!to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}</p>
            <p><strong>Position: </strong>{title}</p>
            {descritpion && <p><strong>Description: </strong> <span>{descritpion}</span></p>}
        </div>
    )
}

ProfileExperience.propTypes = {
    experience : PropTypes.array.isRequired
}

export default ProfileExperience