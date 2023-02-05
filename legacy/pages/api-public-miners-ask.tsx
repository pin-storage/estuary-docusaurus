import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/public/miners/storage/query/{miner}";
const markdown =
  `# ➟ ` +
  endpoint +
  `

Use this endpoint to get the query ask and verified ask for any miner.

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/public/get_public_miners_storage_query__miner_)

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.pin.storage/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.pin.storage/public/miners/storage/query/{miner}', {
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
  "curl -X GET https://api.pin.storage/public/miners/storage/query/f0135078";

function APIPublicMinerStats(props) {
  return (
    <App
      title="Pin.Storage Documentation: API: /public/miners/storage/query/:miner"
      description="get miner price verifiedPrice minPieceSize and maxPieceSize."
      url="https://docs.pin.storage/api-public-miners-ask"
      active="api-public-miners-ask"
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

export default APIPublicMinerStats;
