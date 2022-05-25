import React from "react";
import { Input, useValidation } from "usetheform";

const email = value =>
  !(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
    ? undefined
    : "Mail not Valid";
const required = value => (value && value !== "" ? undefined : "Required");

export default function Email() {
  const [status, validation] = useValidation([required, email]);
  return (
    <div className="field">
      <label className="label">Email</label>
      <div className="control">
        <Input
          touched
          type="text"
          name="email"
          placeholder="Type an email..."
          className="input"
          {...validation}
        />
      </div>
      {status.error && <p className="help is-danger">{status.error}</p>}
    </div>
  );
}
