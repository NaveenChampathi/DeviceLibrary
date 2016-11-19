import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

class MyDevicesPage extends Component {
	constructor(props) {
    super(props);
  }

  getMyDevices(){
  	return this.props.devices.map((device) => {
  		if(device.byWhom == this.props.user){
  			return (
  				
  					<div className="devices-list-grid">
  						<div className="devices-list-row">
  							<b>Device Name: </b>{device.name}
  						</div>
  						<div className="devices-list-row">
  							<b>OS:</b> 10.0.1
  						</div>
  						<div className="devices-list-row">
  							<button className="btn btn-danger return-device">Return Device</button>
  						</div>
  					</div>
  				);
  		}
  	});
  }

	render() {
		return (
			    <div className="details-page">
			      	<h3> Devices that are checked out by you </h3>
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

export default connect(mapStateToProps)(MyDevicesPage);