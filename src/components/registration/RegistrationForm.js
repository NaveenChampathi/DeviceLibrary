import React from 'react';
import TextInput from '../common/TextInput';

const RegistrationForm = ({user, onSave, onChange, saving}) => {
  return (
    <form onSubmit={onSave} className="col-sm-8 col-md-6">
      <h1>Create account</h1>

      <TextInput
        name="displayName"
        label="Screen name"
        onChange={onChange}
        value={user.displayName}
        />
        
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
        value={saving ? 'Signing up...' : 'Sign Up'}
        className="btn btn-primary"
        />
    </form>
  );
};

RegistrationForm.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  user: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default RegistrationForm;
