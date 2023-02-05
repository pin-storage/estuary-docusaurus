import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/content/deals";
const markdown =
  `# ➟ ` +
  endpoint +
  `

Use this endpoint to get all of the content on Pin.Storage that is also stored on Filecoin through our [Pin.Storage Node](https://pin.storage).

* Want to get the Filecoin Storage Deals per Content ID? Use [https://api.pin.storage/content/status/:id](https://docs.pin.storage/api-content-status-id).

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/content/get_content_deals)

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.pin.storage/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.pin.storage/content/deals?limit=LIMIT&offset=OFFSET', {
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
  'curl -X GET -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" https://api.pin.storage/content/deals';

function APIContentDeals(props) {
  return (
    <App
      title="Pin.Storage Documentation: API: /content/deals"
      description="https://api.pin.storage/content/deals"
      url="https://docs.pin.storage/api-content-deals"
      active="api-content-deals"
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

export default APIContentDeals;
