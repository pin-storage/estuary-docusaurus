import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const markdown = ``;

const code = `class Example extends React.Component {
  componentDidMount() {
    // TODO
    // Use this template to write an example
    fetch('https://api.pin.storage/health')
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ ...data });
      });
  }

  render() {
    return <pre>{JSON.stringify(this.state, null, 1)}</pre>;
  }
}`;

const curl = `curl -X GET https://api.pin.storage/health`;

function Template(props) {
  return (
    <App
      title="Pin.Storage Documentation: Template"
      description="Template for our documentation site for https://pin.storage"
      url="https://docs.pin.storage"
      curl={curl}
      markdown={markdown}
      code={code}
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Template;
