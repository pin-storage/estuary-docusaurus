import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/content/add";
const markdown =
  `# ➟ ` +
  endpoint +
  `

Use this endpoint to upload data to the Pin.Storage Node, one file at a time.

For more of an explanation, read [this](https://docs.pin.storage/tutorial-uploading-your-first-file).

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/content/post_content_add)

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.pin.storage/feedback).
`;

const code = `class Example extends React.Component {
  upload(e) {
    e.persist();
    console.log(e.target.files);
    
    const formData  = new FormData();
    formData.append("data", e.target.files[0]);
    
    // NOTE
    // This example uses XMLHttpRequest() instead of fetch
    // because we want to show progress. But you can use
    // fetch in this example if you like.
    const xhr = new XMLHttpRequest();
    
    xhr.upload.onprogress = (event) => {
      this.setState({ 
        loaded: event.loaded, 
        total: event.total 
      });
    }
    
    xhr.open(
      "POST", 
      "https://upload.estuary.tech/content/add"
    );
    xhr.setRequestHeader(
      "Authorization", 
      "Bearer REPLACE_ME_WITH_API_KEY"
    );
    xhr.send(formData);
  }

  render() {
    return (
      <React.Fragment>
        <input type="file" onChange={this.upload.bind(this)} />
        <br />
        <pre>{JSON.stringify(this.state, null, 1)}</pre>
      </React.Fragment>
    );
  }
}`;

const curl = `curl -X POST https://upload.estuary.tech/content/add?coluuid=UUID-OF-YOUR-COLLECTION&dir=/foo/bar -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json" -H "Content-Type: multipart/form-data" -F "data=@PATH_TO_FILE_BUT_REMEMBER_THE_@_SYMBOL_IS_REQUIRED"`;

function APIContentAdd(props) {
  return (
    <App
      title="Pin.Storage Documentation: API: /content/add"
      description="https://upload.estuary.tech/content/add"
      url="https://docs.pin.storage/api-content-add"
      active="api-content-add"
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

export default APIContentAdd;
