import React, { Component } from 'react';
import { Link } from 'react-router';
import {bindActionCreators} from 'redux';
import {updateDeviceRecord} from '../../actions/userActions'; 
import {connect} from 'react-redux';

class MyDevicesPage extends Component {
	constructor(props) {
    super(props);
  }

  getMyDevices(){
  	return this.props.devices.map((device) => {
  		if(device.byWhom == this.props.user){
  			return (
  				
  					<div className="devices-list-grid" key={device.id}>
  						<div className="devices-list-row">
  							<b>Device Name: </b>{device.name}
  						</div>
  						<div className="devices-list-row">
  							<b>OS:</b> 10.0.1
  						</div>
  						<div className="devices-list-row">
  							<button onClick={() => this.updateDeviceRecord(device.id)} className="btn btn-danger return-device">Return Device</button>
  						</div>
  					</div>
  				);
  		}
  	});
  }

  updateDeviceRecord(id) {
    this.props.actions.updateDeviceRecord(id.toString(), false, "");
  }

	render() {
    const myDevices = [];
    this.props.devices.map((device) => {
      if(device.byWhom == this.props.user){
        myDevices.push(device);
      }
    });
		return (
			    <div className="details-page">
			      	<h3> {myDevices.length > 0 ? "Devices that are checked out by you" : "Your list is empty"} </h3>
			      	<div className="devices-list">
			      		{this.getMyDevices()}
			      	</div>
			    </div>
			  );
	}
};


function mapStateToProps(state, ownProps) {
  return { 	devices: state.devices,
  					user : state.user.displayName};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({updateDeviceRecord}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDevicesPage);