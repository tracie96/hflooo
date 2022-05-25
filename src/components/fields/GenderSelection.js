import React from "react";
import { Input, useValidation, Collection } from "usetheform";
const required = (value) => (value && value !== "" ? undefined : "Required");

export default function GenderSelection() {
  const [status, validation] = useValidation([required]);

  return (
    <div className="field">
      <div className="control">
        <Collection object touched name="myGender" {...validation}>
          <label className="radio">
            <Input type="radio" name="gender" value="M" />
            Male
          </label>
          <label className="radio">
            <Input type="radio" name="gender" value="F" />
            Female
          </label>
          <label className="radio">
            <Input type="radio" name="gender" value="Other" />
            Other
          </label>
        </Collection>
      </div>
      {status.error && <p className="help is-danger">{status.error}</p>}
    </div>
  );
}
