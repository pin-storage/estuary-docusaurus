import styles from "@pages/Page.module.scss";

import * as React from "react";

import App from "@components/App";

const endpoint = "/content/add-car";
const markdown =
  `# ➟ ` +
  endpoint +
  `
Use this endpoint to write a Content-Addressable Archive (CAR) file, and make storage deals for its contents.
For more information on CARs check the [spec page](https://ipld.io/specs/transport/car/)

### Swagger
For more information about this API swagger specification, see [here](swagger-ui-page#/content/post_content_add_car)

### This page is a work in progress

We will be adding more code examples and more details over time. Thanks for bearing with us and our team! If you have ideas, write us some [feedback](https://docs.pin.storage/feedback).
`;

const key = `api-content-add-car`;
const curl = `curl -X POST https://upload.estuary.tech/content/add-car?filename=FILENAME&commp=COMMP&size=SIZE -H "Authorization: Bearer REPLACE_ME_WITH_API_KEY" -H "Accept: application/json" -d '{"body": "BODY"}'`;

const code =
  `class Example extends React.Component {
 upload(e) {
    e.persist();
    
    // NOTE
    // This example uses XMLHttpRequest() instead of fetch
    // because we want to show progress. But you can use
    // fetch in this example if you like.
    const xhr = new XMLHttpRequest();
    var url = "https://upload.estuary.tech";
    xhr.upload.onprogress = (e) => {
      this.setState({ 
        loaded: event.loaded, 
        total: event.total 
      });
    }
    
    xhr.open(
      "POST", 
      url+"` +
  endpoint +
  `"
    );
    xhr.setRequestHeader(
      "Authorization", 
      "Bearer REPLACE_ME_WITH_API_KEY"
    );
    xhr.send(e.target.files[0]);
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

function APIContentAddCAR(props) {
  return (
    <App
      title="Pin.Storage Documentation: API: /content/add-car"
      description="https://upload.estuary.tech/content/add-car" // question: where does this show up?
      url={`https://docs.pin.storage/${key}`}
      active={key}
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

export default APIContentAddCAR;
