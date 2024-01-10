# 🌟 Your Contribution Matters at Waifu.it! 🌟

Greetings, and a heartfelt thank you for considering becoming a part of the Waifu.it project! We're thrilled about the prospect of your contribution and have made the process a breeze. Whether you're fixing something, reporting an issue, joining us as a maintainer, suggesting fantastic new features, or just engaging in lively discussions about our code, here's your invitation to dive in:

## Embrace our Code of Conduct

Before you embark on your journey, take a moment to acquaint yourself with our [Code of Conduct](CODE_OF_CONDUCT.md). It's the cornerstone of our respectful and inclusive community.

## FAQs - Your Shortcut to Wisdom 🧠

To make your initiation smoother, we've compiled a list of Frequently Asked Questions:

- **Q:** [The Question?]
- **A:** [The Answer!]

## Dreaming Up Features? 🚀

Crafting a Feature Request? Elevate it with:

- A snappy summary of your brilliant idea.
- Unveil the why behind your feature vision.
- Sprinkle in some extra context—images, resource links—to paint the full picture.

## Join Our Dance of Development 💃🕺

Pull requests are your golden ticket to propose changes! Directly submit your pull requests [here](https://github.com/WaifuAPI/Waifu.it/pulls). After a bit of magic in the review, your changes can become part of our enchanting project.

## Crafting Pull Requests - Unleash Your Magic ✨

1. Fork the repo and weave your code into the `staging` branch.
2. If your code is a performer, let it showcase with some test examples.
3. Describe your pull request with the elegance it deserves.

## Issues - Illuminate the Path 🕯️

When reporting issues, cast a clear light with your description. Show us how to find the bug by [opening a new issue](https://github.com/WaifuAPI/Waifu.it/issues); it's as simple as that!

## Magic Happens Locally - Run the API 🎩🐇

**Requirements**

- Node.js >=18.x
- MongoDB

**1. Create a Database**

Craft a MongoDB database. No worries if you don't have MongoDB locally; [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) has a free hosted database waiting for you.

**2. Enchant with Environment Variables**

Craft a `.env` file in the project's magical realm. Copy the contents from `.env_example` and replace `<your-database-uri>` with your database connection string. Other mystical environment variables are revealed in the file.

```shell
MONGODB_URI=<your-mongodb-uri>
```

**3. Cast the Spell of Dependencies**

```shell
$ npm install
```

**4. Begin the Incantation - Start the Server**

The server dances to your tune, restarting gracefully with every code change.

```shell
$ npm run dev
```

**And there you have it!**

## License - Let's Create a Masterpiece Together 🎨

By contributing to Waifu.it, you're authoring a chapter in our story. Your contributions will be elegantly licensed under the terms specified in the [LICENSE file](LICENSE.md).

Let the adventure begin! Explore the realms of Waifu.it, and let's co-create something truly magical! 🚀✨

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
