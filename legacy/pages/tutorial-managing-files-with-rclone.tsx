import * as React from "react";
import App from "@components/App";
import markdown from "@documentation/tutorial-managing-files-with-rclone.md";

function TutorialManagingFilesWithRclone(props) {
  return (
    <App
      title="Pin.Storage Documentation: Tutorial: Managing Files with Rclone"
      description="Learn more about how to use rclone to move files from other storage providers to Pin.Storage"
      url="https://docs.pin.storage/tutorial-managing-files-with-rclone"
      // curl={curl}
      markdown={markdown}
      // code={code}
      active="tutorial-managing-files-with-rclone"
    ></App>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default TutorialManagingFilesWithRclone;
