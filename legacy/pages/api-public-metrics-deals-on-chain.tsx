import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/public/metrics/deals-on-chain";
const markdown =
  `# ➟ ` +
  endpoint +
  `

Use this to get data you can make a graph for.

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/public/get_public_metrics_deals_on_chain)

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.pin.storage/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.pin.storage/public/metrics/deals-on-chain', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer REPLACE_ME_WITH_API_KEY',
      },

    })
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

const curl =
  "curl -X GET https://api.pin.storage/public/metrics/deals-on-chain";

function APIPublicMetricsDealOnChain(props) {
  return (
    <App
      title="Pin.Storage Documentation: API: /public/metrics/deals-on-chain"
      description="https://api.pin.storage/public/metrics/deals-on-chain"
      url="https://docs.pin.storage/api-public-metrics-deals-on-chain"
      active="api-public-metrics-deals-on-chain"
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

export default APIPublicMetricsDealOnChain;
