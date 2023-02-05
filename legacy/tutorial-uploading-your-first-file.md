# Uploading your file

Once you have an API key, you can use the code explorer to the right to upload a file to the Filecoin Network, just follow these steps:

1. Click Authorize to the right and enter in your HTTP Authentication header. Remember to add the Bearer prefix so the field looks something like this:

   > `Bearer ESTxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxARY`

2. Click "File to upload" and choose the file you would like to upload
3. Enter a filename for your file
4. Click the Execute button and your browser will send the API Request!

There are a couple of caveats

- If your data's size is under **3.57 GB**, the Filecoin storage deals will not immediately execute after the upload. That means you have some time to upload more data if you would like.

- Pin.Storage is in its alpha testing phase, so the add api has an upper size limit of about **30 GB**, larger files will need to be broken up.

- We pick 6 Filecoin miners for you, so you don't have to worry about knowing about any. If you are curious which Miners [https://pin.storage](https://pin.storage) works with, click [here](https://pin.storage/ecosystem).

- If any miner fails to store your deal, we find another.

- Uploading data and Filecoin deals are free for now thanks to verified Filecoin deals from the [Filecoin Plus](https://docs.filecoin.io/store/filecoin-plus/) program.

- We can not guarantee physically _where_ your data ends up. It may be on an Pin.Storage node in your city or on another continent. We're working on this.

Based on the size of the data you used for this step, the example to the right might take a while, but this is all thats involved with getting data onto the Filecoin Network through Pin.Storage.

### What is next?

Next, we will learn how to [get a list of the data you have uploaded](https://docs.pin.storage/tutorial-listing-your-files).
