import React from "react";
import Section from "../components/Section";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../pdfDocument/Document";
import { connect } from "react-redux";
import coachOfPeopleLogo from "../assets/trener-ludi.png";

function Thankyou(props) {
  return (
    <Section sectionName="Ďakujem" color="secondary">
      <div style={{ textAlign: "center" }}>
        <p style={{ marginBottom: "50px" }}>Dotazník bol úspešne odoslaný</p>

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
            return loading ? "Načítava sa dokument..." : "Stiahnuť pdf";
          }}
        </PDFDownloadLink>

        <div style={{ marginTop: "50px" }}>
          <img src={coachOfPeopleLogo} alt="Logo Tréner ľudí" className="thankyou-logo" />
        </div>
      </div>
    </Section>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(Thankyou);
