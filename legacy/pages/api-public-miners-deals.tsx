import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/public/miners/deals/{miner}";
const markdown =
  `# ➟ ` +
  endpoint +
  `

Use this endpoint to get all of deal history for a specific miner with our [Pin.Storage Node](https://pin.storage). This endpoint does not require an API key.

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/public/get_public_miners_deals__miner_)

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.pin.storage/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.pin.storage/public/miners/deals/{miner}', {
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

const curl = "curl -X GET https://api.pin.storage/public/miners/deals/f0135078";

function APIPublicMinerDeals(props) {
  return (
    <App
      title="Pin.Storage Documentation: API: /public/miners/deals"
      description="https://api.pin.storage/public/miners/deals:miner"
      url="https://docs.pin.storage/api-public-miners-deals"
      active="api-public-miners-deals"
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

export default APIPublicMinerDeals;
