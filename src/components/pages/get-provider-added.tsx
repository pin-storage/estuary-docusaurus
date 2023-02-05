import styles from "@site/legacy/pages/Page.module.scss";
import rstyles from "@site/legacy/components/RichText.module.scss";

import * as React from "react";
import * as U from "@site/legacy/common/utilities";

import Layout from "@theme/Layout";
import Input from "@site/legacy/components/Input";
import Textarea from "@site/legacy/components/Textarea";
import Button from "@site/legacy/components/Button";

function GetProviderAdded(props) {
  const [state, setState] = React.useState({
    name: "",
    provider: "",
    configuration: "",
    message: "",
    success: false,
    loading: false,
  });

  return (
    <>
      {state.success ? (
        <div className={U.classNames(styles.group, rstyles.block)}>
          <h1 style={{ marginTop: 22 }}>Thank you!</h1>
          <p>
            Everyone on our team will get a chance to read this request. Thank
            you for submitting it!
          </p>
        </div>
      ) : (
        <div>
          <p>
            Fill out this form to to get your provider added to{" "}
            <a href="https://pin.storage" target="_blank">
              https://pin.storage
            </a>{" "}
            and receive verified Filecoin storage deals. If your provider is
            qualified, we will add it to our provider index and you will receive
            storage deals.
          </p>

          <p>
            The expectations below are intended to give you an idea of the deals
            you will be receiving, they are <b>not</b> hard requirements and
            will not prevent you from being added to the provider index.
          </p>

          <ul className={styles.ul}>
            <li className={styles.li}>
              SPs are expected to have an unsealed copy and a sealed copy of the
              data
            </li>
            <li className={styles.li}>
              SPs are expected to enable and provide Fast Retrievals (unsealed
              sectors)
            </li>
            <li className={styles.li}>
              SPs are expected to offer free retrieval
            </li>
            <li className={styles.li}>
              SPs are expected to set all deals for the longest available
              duration
            </li>
            <li className={styles.li}>
              SPs have the freedom to accept as many deals as they can handle
              and reject deals as needed.
            </li>
            <li className={styles.li}>
              The standard start epoch for deals is 72 hours
            </li>
          </ul>

          <div className={styles.title} style={{ marginTop: 48 }}>
            Name
          </div>
          <Input
            style={{ marginTop: 8 }}
            value={state.name}
            placeholder="ex: Mark Walters"
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
            name="name"
          />
          <div className={styles.title}>Provider ID</div>
          <Input
            style={{ marginTop: 8 }}
            value={state.provider}
            placeholder="ex: f0100"
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
            name="provider"
          />
          <div className={styles.title}>Your provider configuration</div>
          <Textarea
            style={{ marginTop: 8 }}
            value={state.configuration}
            placeholder="hardware spec, ask price, sealing capacity, dealing rate and so on..."
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
            name="configuration"
            maxLength={5000}
          />

          <div className={styles.title}>Notes</div>
          <Textarea
            style={{ marginTop: 8 }}
            value={state.message}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
            name="message"
            maxLength={5000}
          />

          <ul className={styles.ul}>
            <li className={styles.li}>
              We are in the early stages of Pin.Storage development and we have
              a preference for storage providers who want to store public data
              that is meant to be accessed by anyone.
            </li>
          </ul>

          <div className={styles.action}>
            <Button
              loading={state.loading}
              onClick={async () => {
                if (U.isEmpty(state.name)) {
                  alert("You must provide your name.");
                  return;
                }

                if (U.isEmpty(state.provider)) {
                  alert("You must provide a provider ID.");
                  return;
                }

                if (U.isEmpty(state.configuration)) {
                  alert("You must provide feedback");
                  return;
                }

                setState({ ...state, loading: true });
                try {
                  fetch(
                    "https://estuary-docs.onrender.com/api/request-add-provider",
                    {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        name: state.name,
                        provider: state.provider,
                        configuration: state.configuration,
                        message: state.message,
                      }),
                    }
                  );
                } catch (e) {
                  console.log(e);
                }

                setState({
                  ...state,
                  success: true,
                  loading: true,
                  message: "",
                  configuration: "",
                });
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default GetProviderAdded;
