import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDevices} from '../../actions/userActions';
import firebaseApi from '../../api/firebase';
import toastr from 'toastr';
import { Link } from 'react-router';

export class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  componentWillMount() {
		this.props.actions.fetchDevices();
  }
  createDeviceCard(device) {
  	const name = device.name;
  	const osVersion = device.osVersion;
  	const id = device.id;

	return(
		
		  <div className="col-sm-4 col-md-3 grid-content" key={id}>
		    <div className="thumbnail">
		      <img src="https://developer.apple.com/app-store/marketing/guidelines/images/thumbnail-ipad-pro.png" alt="Ipad" />
		      <div className="caption">
		        <div>{name}</div>
		        <div>OS : {osVersion}</div>
		        <p><Link to={"/details/" + id} className="btn btn-primary" >
					Details
					</Link></p>
		      </div>
		    </div>
		  </div>
		
		);
  }
  render() {
    return (
	    <div className="row">
	    	{this.props.devices.map(this.createDeviceCard)}
	    </div>
    );
  }
}

// HomePage.propTypes = {
//   actions: PropTypes.object.isRequired
// };

HomePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return { devices: state.devices};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({fetchDevices}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
