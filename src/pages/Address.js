import React from "react";
import Question from "../components/Question";
import Section from "../components/Section";
import ErrorMessage from "../components/ErrorMessage";
import { sectionNames } from "../constans/sectionNames";
import { errorMessages } from "../constans/errorMessages";
import { getInputAddress } from "../actions/inputChange";
import { connect } from "react-redux";

function Address(props) {
  return (
    <Section sectionName={sectionNames.address} color="secondary">
      <Question
        label="Ulica"
        variant="outlined"
        required
        type="text"
        name="street"
        value={props.address.street}
        onChange={(e) => props.handleInputAddress(e.target.name, e.target.value)}
      />
      {props.addressError.street && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
      <Question
        label="Číslo ulice"
        variant="outlined"
        required
        type="number"
        name="streetNumber"
        value={props.address.streetNumber}
        onChange={(e) => props.handleInputAddress(e.target.name, e.target.value)}
      />
      {props.addressError.streetNumber && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
      <Question
        label="Mesto"
        variant="outlined"
        required
        type="text"
        name="city"
        value={props.address.city}
        onChange={(e) => props.handleInputAddress(e.target.name, e.target.value)}
      />
      {props.addressError.city && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
      <Question
        label="PSČ"
        variant="outlined"
        required
        type="number"
        name="postalCode"
        value={props.address.postalCode}
        onChange={(e) => props.handleInputAddress(e.target.name, e.target.value)}
      />
      {props.addressError.postalCode && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
      <Question
        label="Štát"
        variant="outlined"
        required
        type="text"
        name="state"
        value={props.address.state}
        onChange={(e) => props.handleInputAddress(e.target.name, e.target.value)}
      />
      {props.addressError.state && <ErrorMessage>{errorMessages.required}</ErrorMessage>}
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    address: state.address.data,
    addressError: state.address.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputAddress: (name, text) => dispatch(getInputAddress(name, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);
