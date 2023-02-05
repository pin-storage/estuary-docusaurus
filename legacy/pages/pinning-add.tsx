import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/pinning/pins";
const markdown =
  `# ➟ ` +
  endpoint +
  `

## Overview
Add a new pin object for the current access token.

* Here is an example of a CID [bafybeidj7c2e3daplalccukbps4eze7473gyshspev76xi4sjfmfkuaofe](https://bafybeidj7c2e3daplalccukbps4eze7473gyshspev76xi4sjfmfkuaofe.ipfs.dweb.link/)

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/pinning/post_pinning_pins)

### Need more information?

Check out the [offical IPFS Pinning documentation](https://ipfs.github.io/pinning-services-api-spec/#tag/pins/paths/~1pins/post). We made sure the follow the standards.

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.pin.storage/feedback).
`;
const cid = "bafybeidj7c2e3daplalccukbps4eze7473gyshspev76xi4sjfmfkuaofe";
const name = "1882818-2021-nature-videos.zip";
const key = "pinning-add";
const route = "https://api.pin.storage/pinning/pins";

const code = `class Example extends React.Component {
  componentDidMount() {
    fetch('https://api.pin.storage/pinning/pins', {
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

const curl = `curl -X POST https://api.pin.storage/pinning/pins -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json"`;

function PinningAdd(props) {
  return (
    <App
      title="Pin.Storage Documentation: Pinning: Add"
      description="Add a new pin object for the current access token."
      url={`https://docs.pin.storage/${key}`}
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

export default PinningAdd;
