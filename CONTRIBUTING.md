# Contributing to Waifu.it

We love your input! We want to make contributing to this project as easy as possible, whether it's:

- Submitting a fix
- Reporting an issue
- Becoming a maintainer
- Proposing new features
- Discussing the current state of the code

## Code of Conduct

The code of conduct is described in [Code of Conduct](CODE_OF_CONDUCT.md).

## Frequently Asked Questions (FAQs)

<!--- I thought it would be great to have a list of FAQs for the project to help save time for new contributors--->

    - Q: [The Question?]
    - A: [The Answer!]

## Feature Request

Great Feature Requests tend to have:

- A quick idea summary.
- What & why you wanted to add the specific feature.
- Additional context like images, links to resources to implement the feature etc, etc.

## Development Process

Pull requests are the best way to propose changes. We actively welcome your pull requests and invite you to submit pull requests directly <a href="https://github.com/WaifuAPI/Waifu.it/pulls">here</a>, and after review, these can be merged into the project.

## Pull Requests

1. Fork the repo and pr to `staging` branch only.
2. If you've added code that should be tested, add some test examples.
3. Ensure to describe your pull request.

## Issues

Please ensure your description is
clear and has sufficient instructions to be able to reproduce the issue. Report a bug by <a href="https://github.com/WaifuAPI/Waifu.it/issues">opening a new issue</a>; it's that easy!

## Running the API Locally

**Requirements**

- Node >= 12.x
- MongoDB

**1. Create a database**

Create a MongoDB database.

If you don't have MongoDB setup locally, then you can use [MongoDB Atlas][mongodb/atlas] to create a free hosted database.

**2. Environment Variables**

You need to set the `MONGODB_URI` environment variable to point to your database.

Create a file called `.env` in the root directory of the project. Copy everything from `.env_example` and replace `<your-database-uri>` with the connection string for your database, _other env variables info are commented in the file itself._

```shell
MONGODB_URI=<your-mongodb-uri>
```

**3. Installing dependencies**

```shell
$ npm install
```

**4. Starting the Server**

The server will automatically restart when you make changes to the code.

```shell
$ npm run dev
```

**And you're done!**

## License

By contributing to Waifu.it, you agree that your contributions will be licensed
under the [LICENSE file](LICENSE.md).

[mongodb/atlas]: https://www.mongodb.com/cloud/atlas
