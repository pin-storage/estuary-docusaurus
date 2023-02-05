import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";
import markdown from "@documentation/swagger-intro.md";

const key = "swagger-intro";
const code = null;
const curl = null;

function PageSwaggerIntro(props) {
  return (
    <App
      title="Pin.Storage Documentation: Swagger"
      description="Pin.Storage uses swagger"
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

export default PageSwaggerIntro;
