import React from "react";
import { Select } from "usetheform";

const countries = ["Argentina", "Bolivia", "Brazil", "Chile", "Others..."];

export default function SelectCountry() {
  return (
    <div className="field">
      <label className="label">Country</label>
      <div className="control is-expanded">
        <div className="select is-fullwidth">
          <Select name="country">
            <option value="">Select a Country</option>
            {countries.map(name => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}
