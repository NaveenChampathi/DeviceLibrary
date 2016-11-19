import React from 'react';
import {Link} from 'react-router';

const LogoutLink = ({signOut}) => {
  return (<span>
  		  <Link to="/myDevices">Checked out devices</Link>
  		  {" | "}
  	      <a href="#" onClick={signOut}>Logout</a>
          </span>);
};

LogoutLink.propTypes = {
  signOut: React.PropTypes.func.isRequired
};

export default LogoutLink;
