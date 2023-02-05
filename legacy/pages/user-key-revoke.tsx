import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/user/api-keys/{key}";
const markdown =
  `# ➟ ` +
  endpoint +
  `

## Overview
Use the endpoint to revoke an API key on your server.

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/user/delete_user_api_keys)

`;

const curl = `curl -X DELETE https://api.pin.storage/user/api-keys/{key} -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json"`;
const code = null;

function APIContentStats(props) {
  return (
    <App
      title="Pin.Storage Documentation: API: /user/api-keys/:key"
      description="https://api.pin.storage/user/api-keys/:key"
      url="https://docs.pin.storage/user-key-revoke"
      active="user-key-revoke"
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
