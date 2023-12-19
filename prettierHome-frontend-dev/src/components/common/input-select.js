import React from "react";
import { Form } from "react-bootstrap";
import "./input-style.scss";
import { isInValid, isValid } from "../../helpers/function/forms";
const InputSelect = ({
  formik,
  field,
  label,
  options,
  handleValue,
  handleDisable,
  handleChange,
  feedback = true,
}) => {
  return (
    <Form.Group className="form-select-class">
      <Form.Label>{label}</Form.Label>
      <Form.Select
        className="select"
        name={field}
        value={handleValue === undefined ? formik.values[field] : handleValue}
        onBlur={formik.handleBlur}
        onChange={handleChange || formik.handleChange}
        isInvalid={feedback && isInValid(formik, field)}
        isValid={feedback && isValid(formik, field)}
        disabled={handleDisable}
      >
        <option value="0" disabled>
          Select {label}
        </option>
        {options &&
          options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.title || option.name}
            </option>
          ))}
      </Form.Select>
      <Form.Control.Feedback type="invalid" className="formik-feedback">
        {formik.errors[field]}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default InputSelect;
