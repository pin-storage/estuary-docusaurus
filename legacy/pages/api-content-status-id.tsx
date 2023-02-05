import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/content/status/{id}";
const markdown =
  `# ➟ ` +
  endpoint +
  `

Use this endpoint to get all of the deals being made for a specific Content ID stored on our [Pin.Storage Node](https://pin.storage). You will also get access to our metadata and additional useful details.

* Content IDs can be obtained by using [https://api.pin.storage/content/deals](https://docs.pin.storage/api-content-deals).

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/content/get_content_status__id_)

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.pin.storage/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.pin.storage/content/status/{id}', {
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
  'curl -X GET -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" https://api.pin.storage/content/status/12';

function APIContentStats(props) {
  return (
    <App
      title="Pin.Storage Documentation: API: /content/status/:id"
      description="https://api.pin.storage/content/status/:id"
      url="https://docs.pin.storage/api-content-status-id"
      active="api-content-status-id"
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

export default APIContentStats;
