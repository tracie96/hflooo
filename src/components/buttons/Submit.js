import React from "react";
import { useForm } from "usetheform";
import Button from 'react-bootstrap/Button'

export default function Sumbit({ children }) {
  const { isValid } = useForm();
  return (

        <Button variant="outline-primary" disabled={!isValid} type="submit"> {children}</Button>
        );
}
