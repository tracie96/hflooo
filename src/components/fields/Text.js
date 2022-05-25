import React from "react";
import { Input } from "usetheform";

export default function Text({ label, ...props }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <Input type="text" className="input" {...props} />
      </div>
    </div>
  );
}
