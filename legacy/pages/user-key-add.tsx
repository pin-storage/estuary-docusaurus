import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/user/api-keys?perms=upload&expiry=24h";
const markdown =
  `# ➟ ` +
  endpoint +
  `

## Overview
Use the endpoint to create an API key on your server that you can expose to any client. This is useful for uploading large files from the browser since you do not have to proxy through your own servers and potentially take ingress or egress costs.

Make sure you use this endpoint with the query parameters. If you don't you will create an API key with a longer expiry and potentially more permissions then you should be granting through this API.

This endpoint should never called on the client. You should never expose your root API key to the client.

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/user/post_user_api_keys)

`;

const curl = `curl -X POST https://api.pin.storage/user/api-keys -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json"`;
const code = null;

function APIContentStats(props) {
  return (
    <App
      title="Pin.Storage Documentation: API: /user/api-keys?perms=upload&expiry=24h"
      description="https://api.pin.storage/user/api-keys?perms=upload&expiry=24h"
      url="https://docs.pin.storage/user-key-add"
      active="user-key-add"
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
