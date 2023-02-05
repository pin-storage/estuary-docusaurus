import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";
import Navigation from "@components/Navigation";

function NavigationPage(props) {
  return (
    <App
      title="Pin.Storage Documentation: Navigation"
      description="Table of contents for Pin.Storage's documentation."
      url={`https://docs.pin.storage/navigation`}
      hideNavigation
    >
      <div style={{ width: "100%", padding: "16px" }}>
        <Navigation active={props.active} />
      </div>
    </App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default NavigationPage;
