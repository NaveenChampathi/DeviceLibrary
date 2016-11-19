import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';
import LoginLink from './LoginLink';
import LogoutLink from './LogoutLink';
import AdminLink from './AdminLink';

const Header = ({loading, signOut, auth, user}) => {
  let loginLogoutLink = auth.isLogged ? <LogoutLink signOut={signOut} /> : <LoginLink />;
  let adminLink = user.isAdmin ? <AdminLink /> : null;

  return (
    <nav>
      <div className="menu-links">
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        {loginLogoutLink}
        {loading && <LoadingDots interval={100} dots={20}/>}
      </div>
      <div className="user-info">
        {user.displayName ? "Welcome, " + user.displayName + "." : ""}
      </div>
    </nav>
  );
};

Header.propTypes = {
  signOut: React.PropTypes.func.isRequired,
  auth: React.PropTypes.object.isRequired,
  user: React.PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Header;
