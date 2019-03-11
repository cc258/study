# Scaling your Redux App with ducks

![ducks](https://images-na.ssl-images-amazon.com/images/I/6122cNvGwmL._SL1200_.jpg)

How does your front-end application scale? How do you make sure that the code you’re writing is maintainable 6 months from now?

When you learn about redux and the roles of actions and reducers, you start with very simple examples. Most tutorials available today don’t go to the next level. But if you’re building something with Redux that’s more complicated than a todo list, you’ll need a smarter way of scaling your codebase over time.

Someone once said that naming things is one of the hardest jobs in computer science. I couldn’t agree more. But structuring folders and organizing files is a close second.

Let’s explore how we approached code organization in the past.

# Function vs Feature

There are two established approaches of structuring applications: function-first and feature-first.

One the left below you can see a function-first folder structure. On the right you can see a feature-first approach.

![folders](./ppt/folders.png)
