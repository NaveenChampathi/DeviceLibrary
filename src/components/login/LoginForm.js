import React from 'react';
import TextInput from '../common/TextInput';
import { Link } from 'react-router';

const LoginForm = ({user, onSave, onChange, saving}) => {
  return (
    <form className="col-sm-8 col-md-6">
      <h1>Login</h1>
      <TextInput
        name="email"
        label="Email"
        onChange={onChange}
        value={user.email}
        />

      <TextInput
        name="password"
        label="Password"
        onChange={onChange}
        value={user.password}
        />

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Logining in...' : 'Login'}
        className="btn btn-primary"
        onClick={onSave}/>
        <Link
        to="/register"
        className="btn btn-primary sign-up"> Sign up </Link>
    </form>
  );
};

LoginForm.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  user: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default LoginForm;
