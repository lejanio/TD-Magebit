import React, {
  ChangeEvent, ChangeEventHandler, useEffect, useState,
} from 'react';

type FormValuesType = {
    username: string,
    email: string,
    password: string,
}

type FormErrorsType = {
    username?: string,
    email?: string,
    password?: string,
}

const Form = () => {
  const initialValues = { username: '', email: '', password: '' };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<FormErrorsType>({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values: FormValuesType) => {
    const errors = {} as FormValuesType;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    } else if (values.password.length > 10) {
      errors.password = 'Password must be no longer than 10 characters';
    }
    return errors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
    setFormErrors(validate(formValues));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log('formErrors', formErrors);
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Signed in successfully</div>
      ) : (<pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      <form
        onSubmit={handleSubmit}
      >
        <h1>Login Form</h1>
        <div className="ui divider" />
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
