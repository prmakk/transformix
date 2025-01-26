
# TransformiX

An online application that helps you encode/decode data using various ciphers (base64, caesar cipher), edit images and generate QRs


## Screenshots

![App Screenshot](https://i.imgur.com/syNOtwb.png)


## Run Locally

Clone the project

```bash
  git clone https://github.com/prmakk/transformix.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## FAQ

#### Do you use a server to process my data? If I want to encrypt my password, will you save it?

This happens fully in your browser using JavaScript, no content will be sent to any kind of server. Please note that the encryption methods offered below are very basic and therefore not considered as secure.

#### Is this tool free to use?

Yes, this tool is completely free and open-source. You can use it for personal or educational purposes without any restrictions.

#### What browsers are supported?

This tool should work on all modern browsers, including Chrome, Firefox, Safari, and Edge. For the best experience, ensure your browser is up to date.

#### Why do I see strange characters in the output?

Strange characters may appear if the input binary string is invalid or incomplete. Ensure that the binary string is correctly formatted (e.g., "01101000 01100101 01101100 01101100 01101111" for "hello").

#### What is binary encoding/decoding?

Binary encoding is the process of converting text or data into a binary format (a series of 0s and 1s). Binary decoding is the reverse process, where binary data is converted back into human-readable text.


## Tech Stack

**React, Typescript, TailwindCSS**

