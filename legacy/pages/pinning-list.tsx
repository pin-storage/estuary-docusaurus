import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/pinning/pins";
const markdown =
  `# ➟ ` +
  endpoint +
  `

This endpoint lists all contents, whether they are pinned (active), inactive, failed, etc. **Important:** This is different than the **/content/list** endpoint, which will only list pinned (active) contents.

## Useful for the following scenarios
- Retrieve a list of pinned objects and show them on a dashboard or a user interface.
- Validate or verify any pinned objects by retrieving the list and evaluating each.

## Overview of Pinning
Pinning is a method that allows you to instruct IPFS to store a specific object at a specific location – by default, your local node, though this can be changed if you utilise a third-party remote pinning service. This endpoint lists all of the pinned objects.

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/pinning/get_pinning_pins)

### This page is a work in progress
We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.pin.storage/feedback).

### Need more information?
Check out the [offical IPFS Pinning documentation](https://ipfs.github.io/pinning-services-api-spec/#tag/pins/paths/~1pins/get). We made sure the follow the standards.
`;
const key = "pinning-list";
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

function PinningGet(props) {
  return (
    <App
      title="Pin.Storage Documentation: Pinning: Get list"
      description="Get list of pinned objects."
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

export default PinningGet;
