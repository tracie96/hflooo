import React from "react";
import { Input, useValidation } from "usetheform";

const required = value => (value && value !== "" ? undefined : "Required");

export default function TermAndConditions() {
  const [status, validation] = useValidation([required]);

  return (
    <div className="field">
      <div className="control">
        <label className="checkbox">
          <Input touched type="checkbox" name="agreed" {...validation} />I agree
          to the terms and conditions
        </label>
      </div>
      {status.error && <p className="help is-danger">{status.error}</p>}
    </div>
  );
}
