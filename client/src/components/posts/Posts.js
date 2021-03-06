import React from 'react'
import PropTypes from 'prop-types'
import {getPosts} from '../../actions/post'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'

const Posts = () => {
    return(
        <div>

        </div>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {getPosts})(Posts)

