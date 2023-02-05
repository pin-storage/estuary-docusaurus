import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const COLLECTION_ID = `845c2920-0201-416f-86f9-c7da7b859707`;

const endpoint = "/collections/content?coluuid=:collection-id";
const markdown =
  `# ➟ ` +
  endpoint +
  `

Use this endpoint to get **all** the contents of a specific collection, regardless of they having a defined path inside the collection or not

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/collections/get_collections_content__coluuid_)

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.pin.storage/feedback).
`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.pin.storage/collections/content?coluuid=COLUUID&dir=DIR', {
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

const curl = `curl -X GET https://api.pin.storage/collections/content?coluuid=COLUUID&dir=DIR -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json"`;

function APICollectionsListContent(props) {
  return (
    <App
      title="Pin.Storage Documentation: API: /collections/content?coluuid=:collection-id"
      description="https://api.pin.storage/collections/content?coluuid=:collection-id"
      url="https://docs.pin.storage/api-collections-list-content"
      active="api-collections-content-by-id"
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

export default APICollectionsListContent;
