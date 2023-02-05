import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/collections/{coluuid}/commit";
const markdown =
  `# ➟ ` +
  endpoint +
  `

## Overview

This API call allows you to create a CID for the collection contents at that point in time. In the future, you can retrieve these contents using this CID (much like a git repo commit).

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/collections/post_collections_commit)

`;

const COLLECTION_ID = `845c2920-0201-416f-86f9-c7da7b859707`;
const contents = `[]`;
const cids = `[]`;

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.pin.storage/collections/{coluuid}/commit', {
      method: 'POST',
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

const curl = `curl -X POST https://api.pin.storage/collections/{coluuid}/commit -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json"`;

function APICollectionCommit(props) {
  return (
    <App
      title="Pin.Storage Documentation: API: /collections/:collection-id/commit"
      description="https://api.pin.storage/collections/:collection-id/commit"
      url="https://docs.pin.storage/collections-commit"
      active="api-collections-commit"
      curl={curl}
      markdown={markdown}
      code={code}
    />
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default APICollectionCommit;
