import React, { Component } from "react";
import { ReCaptcha } from "react-recaptcha-v3";
import { connect } from "react-redux";
import { recaptcha } from "../Actions/emailVerify";
import { siteKey } from "../constans/reCaptcha";

class ReCaptchaComponent extends Component {
  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
    this.props.recaptcha(recaptchaToken);
  };

  updateToken = () => {
    // you will get a new token in verifyCallback
    this.recaptcha.execute();
  };
  render() {
    return (
      <div>
        <ReCaptcha
          ref={(ref) => (this.recaptcha = ref)}
          sitekey={siteKey}
          action="action_name"
          verifyCallback={this.verifyCallback}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    recaptcha: (token) => dispatch(recaptcha(token)),
  };
};

export default connect(null, mapDispatchToProps)(ReCaptchaComponent);
