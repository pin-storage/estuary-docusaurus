import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";
import markdown from "@documentation/terms.md";

const key = "terms";
const code = null;
const curl = null;

function PageTerms(props) {
  return (
    <App
      title="Pin.Storage Documentation: Terms of Service"
      description="You must agree to these Terms of Service when you use our Pin.Storage Node."
      url={`https://docs.pin.storage/${key}`}
      curl={curl}
      markdown={markdown}
      code={code}
      active={key}
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default PageTerms;
