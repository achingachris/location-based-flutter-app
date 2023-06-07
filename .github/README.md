# GitHub Actions

## React: Client Side

This GitHub Actions workflow is triggered whenever a pull request is created to the `main` branch of the repository. It performs the necessary steps to build and test a Next.js application.

### Workflow Steps:

1. **Checkout code**: This step checks out the code from the pull request branch, allowing subsequent steps to access the application's source code.

2. **Setup Node.js**: This step sets up Node.js on the runner and specifies the version to use (Node.js 16 in this example).

3. **Install dependencies**: This step installs the project dependencies using `npm ci`. It ensures a reproducible installation based on the `package-lock.json` or `yarn.lock` file in the repository.

4. **Build Next.js app**: This step builds the Next.js application using `npm run build`. It compiles the code and generates the optimized production build of the application.

5. **Run tests**: This step executes the tests for the Next.js application using `npm run test`. It verifies the functionality and quality of the application, ensuring that it meets the required standards.

You can customize this workflow to suit your specific needs, such as using different Node.js versions, configuring additional tests or linting steps, or deploying the application after successful tests.
