import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/user/api-keys?perms=upload&expiry=24h";
const markdown =
  `# ➟ ` +
  endpoint +
  `

## Overview
Use the endpoint to list all API keys for the current user.

This endpoint should never called on the client. You should never expose your root API key to the client.

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/user/get_user_api_keys)

`;

const curl = `curl -X POST https://api.pin.storage/user/api-keys -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json"`;
const code = null;

function APIContentStats(props) {
  return (
    <App
      title="Pin.Storage Documentation: API: /user/api-keys"
      description="https://api.pin.storage/user/api-keys"
      url="https://docs.pin.storage/user-key-get"
      active="user-key-get"
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
