import React from "react";
import Section from "../components/Section";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../pdfDocument/Document";
import { connect } from "react-redux";

function Thankyou(props) {
  return (
    <Section sectionName="Ďakujem" color="secondary">
      <h3>:\</h3>
      <p>Dotazník bol úspešne odoslaný</p>

      <PDFDownloadLink
        document={<MyDocument data={props.user} />}
        fileName="dotaznik.pdf"
        style={{
          textDecoration: "none",
          color: "white",
          borderRadius: "10px",
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "orange",
        }}
      >
        {({ blob, url, loading, error }) => {
          return loading ? "Loading document..." : "Download now!";
        }}
      </PDFDownloadLink>
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(Thankyou);
