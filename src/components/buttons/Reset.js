import React from "react";
import { useForm } from "usetheform";
import Button from 'react-bootstrap/Button'

const Reset = () => {
  const { reset, pristine } = useForm();
  return (
    <Button    
    disabled={pristine}
    type="button"
    className="button is-text"
    onClick={reset}
    >    Reset
    </Button>

  );
};

export default Reset;
