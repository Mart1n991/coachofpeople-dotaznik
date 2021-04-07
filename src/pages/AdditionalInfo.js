import React from "react";
import { connect } from "react-redux";
import { requirementsInput, complainsInput, relaxInput } from "../actions/addtionalInfo";
import Question from "../components/Question";
import Section from "../components/Section";
import { questions } from "../constans/questions";
import { sectionNames } from "../constans/sectionNames";

function AdditionalInfo(props) {
  return (
    <Section sectionName={sectionNames.additionalInfo} color="secondary">
      <Question
        questionText={questions.additionalInfo.requirements}
        multiline
        rows={6}
        rowsMax={10}
        color="primary"
        variant="outlined"
        align="center"
        label="Požiadavky"
        value={props.data.requirements}
        onChange={(e) => props.requirementsInput(e.target.value)}
      />

      <Question
        questionText={questions.additionalInfo.complaints}
        multiline
        rows={6}
        rowsMax={10}
        color="primary"
        variant="outlined"
        align="center"
        label="Sťažnosti"
        value={props.data.complains}
        onChange={(e) => props.complainsInput(e.target.value)}
      />

      <Question
        questionText={questions.additionalInfo.relax}
        multiline
        rows={6}
        rowsMax={10}
        color="primary"
        variant="outlined"
        align="center"
        label="Relax"
        value={props.data.relax}
        onChange={(e) => props.relaxInput(e.target.value)}
      />
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.additionalInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requirementsInput: (text) => dispatch(requirementsInput(text)),
    complainsInput: (text) => dispatch(complainsInput(text)),
    relaxInput: (text) => dispatch(relaxInput(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalInfo);
