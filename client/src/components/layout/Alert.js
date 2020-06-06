import React from 'react'
import ProtoType from 'prop-types'
import {connect} from 'react-redux'


const Alert = ({alerts}) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
    </div>
))

Alert.protoTypes = {
    alerts : ProtoType.array.isRequired
}

const mapStateToProps = state => ({
    alerts : state.alert
})

export default connect(mapStateToProps)(Alert)