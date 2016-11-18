import React, { Component } from 'react';
import { Link } from 'react-router';

class DeviceDetailsPage extends Component {
	render() {
		const id = this.props.params.deviceId;
		return (
			    <div className="details-page">
			      	<div className="prod-image">
		      	    	<div className="thumbnail">
		      	      		<img src="https://developer.apple.com/app-store/marketing/guidelines/images/thumbnail-ipad-pro.png" alt="Ipad" />
		      	    	</div>
			      	</div>
			      	<div className="prod-description">
			        	<div className="prod-name">iPad</div>
			          	<div className="prod-id">Product Id: <span>{this.props.params.deviceId}</span></div>
			          	<div className="prod-version">OS: <span>10.0.3</span></div>
			          	<div className="prod-status available">Available</div>
			          	<div className="prod-status not-available">Not-Available</div>
			          	<div className="prod-checkout-person">By Whom: <span>Naveen</span></div>
			          	<Link to={"/checkout/" + id} className="btn btn-info" >Check out</Link>
			      	</div>
			    </div>
			  );
	}
};

export default DeviceDetailsPage;
