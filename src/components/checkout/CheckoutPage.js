import React, { Component } from 'react';
import { Link } from 'react-router';

class CheckoutPage extends Component {
	render() {
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
			          	<div className="prod-checkout-person">By Whom: <span><input type="text" /></span></div>
			          	<Link to={"/checkout/" + this.props.params.id} className="btn btn-info" >Confirm Checkout</Link>
			      	</div>
			    </div>
			  );
	}
};

export default CheckoutPage;
