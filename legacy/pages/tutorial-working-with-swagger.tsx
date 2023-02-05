import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";
import markdown from "@documentation/tutorial-working-with-swagger.md";

function TutorialGettingStartedWithSwagger(props) {
  return (
    <App
      title="Pin.Storage Documentation: Tutorial: Getting Started with Pin.Storage API Swagger Docs"
      description="Learn more about navigating the endpoints via Pin.Storage API Swagger Docs."
      url="https://docs.pin.storage/tutorial-working-with-swagger"
      // curl={curl}
      markdown={markdown}
      // code={code}
      active="tutorial-working-with-swagger"
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default TutorialGettingStartedWithSwagger;
