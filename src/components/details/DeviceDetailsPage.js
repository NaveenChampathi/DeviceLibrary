import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateDeviceRecord} from '../../actions/userActions'; 
import toastr from 'toastr';

function CheckOutIn(props) {
			if(props.checkedOut) {
				if(props.byWhom == props.user) {
					return <a onClick={props.checkClick} className="btn btn-info" >Check in</a> ;
				}
				else {
					return <div> This device has been checked out by {props.byWhom} </div>
				}
			}
			else {
				return <a onClick={props.checkClick} className="btn btn-info" >Check out</a> ;
			}
	}

class DeviceDetailsPage extends Component {
	constructor(props, context) {
    super(props, context);
    this.updateDeviceRecord = this.updateDeviceRecord.bind(this);
  }
	updateDeviceRecord(path, val, byWhom) {
		if(!this.props.authenticated) {
        this.context.router.push('/login');
        toastr.error('You need to be logged to access this page');
      }
      else {
      	byWhom = val ? byWhom : "";
		    this.props.actions.updateDeviceRecord(path, val, byWhom);
      }
	}

	render() {
		const id = this.props.params.deviceId;
		const device = this.props.devices[id];
		const user = this.props.user;
		return (
			    <div className="details-page">
			      	<div className="prod-image">
		      	    	<div className="thumbnail">
		      	      		<img src="https://developer.apple.com/app-store/marketing/guidelines/images/thumbnail-ipad-pro.png" alt="Ipad" />
		      	    	</div>
			      	</div>
			      	<div className="prod-description">
			        	<div className="prod-name">{device.name}</div>
			          	<div className="prod-id">Product Id: <span>{this.props.params.deviceId}</span></div>
			          	<div className="prod-version">OS: <span>{device.osVersion}</span></div>
			          	<div className={"prod-status " + (!device.checkedOut ? 'available' : 'not-available')}>{!device.checkedOut ? 'Available' : 'Not Available'}</div>
			          	<CheckOutIn user={user} byWhom={device.byWhom} checkedOut={device.checkedOut} id={id} checkClick={() => this.updateDeviceRecord(id, !device.checkedOut, user)}/>
			          	
			      	</div>
			    </div>
			  ); 
	}
};

DeviceDetailsPage.contextTypes = {
      router : PropTypes.object
    };

function mapStateToProps(state, ownProps) {
  return {  devices: state.devices,
  					user : state.user.displayName,
  				  authenticated : state.auth.isLogged};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({updateDeviceRecord}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceDetailsPage);
