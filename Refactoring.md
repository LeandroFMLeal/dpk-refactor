# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

### Considerations about some changes

I am using `nodemon`, just to do an easier refactoring. I changed to _ES modules_ so we can use a modern syntax in the project. Command `npm test` was changed to use _ES modules_ too.

### Refactor

Change the name of the file to be more descriptive. First a quick check if we received an _event_ and prevent any unnecessary computing. Dismembered the _if statements_ into functions, based on the fact that we might want to improve some checks and that method was overloaded with more than 1 responsability. Moved the constants (check note below). The code returns a pipe that receives the `event` or `event.partitionKey` as a parameter

### Notes

**MAX_PARTITION_KEY_LENGTH** and **TRIVIAL_PARTITION_KEY** could probably be `environment variables`
