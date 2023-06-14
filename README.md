# MyNews App

## Running the Next.js App with Docker

This guide explains how to run the Next.js app using Docker. Docker allows you to package the application and its dependencies into a container, providing a consistent and reproducible environment for running the app.

### Prerequisites

Before getting started, make sure you have the following prerequisites installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)

### Step 1: Clone the Repository

Clone the repository containing the Next.js app to your local machine.

```bash
git clone <repository-url>
```

### Step 2: Build the Docker Image

Navigate to the root directory of the cloned repository, where the `Dockerfile` is located.

```bash
cd <repository-directory>
```

Build the Docker image using the following command:

```bash
docker build -t newsapp .
```

### Step 3: Run the Docker Container

After the Docker image is built successfully, you can run the Docker container using the following command:

```bash
docker run -p 3000:3000 newsapp
```

This command maps port 3000 from the container to port 3000 on the host, allowing you to access the Next.js app in your web browser at `http://localhost:3000`.

### Step 4: Access the Next.js App

Once the Docker container is running, you can access the Next.js app by opening your web browser and navigating to `http://localhost:3000`.

### Stopping the Docker Container

To stop the Docker container, you can use the `docker stop` command followed by the container ID or name.

```bash
docker stop <container-id-or-name>
```

Replace `<container-id-or-name>` with the actual ID or name of the running container.


## GitHub Actions

### React: Client Side

This GitHub Actions workflow is triggered whenever a pull request is created to the `main` branch of the repository. It performs the necessary steps to build and test a Next.js application.

#### Workflow Steps:

1. **Checkout code**: This step checks out the code from the pull request branch, allowing subsequent steps to access the application's source code.

2. **Setup Node.js**: This step sets up Node.js on the runner and specifies the version to use (Node.js 16 in this example).

3. **Install dependencies**: This step installs the project dependencies using `npm ci`. It ensures a reproducible installation based on the `package-lock.json` or `yarn.lock` file in the repository.

4. **Build Next.js app**: This step builds the Next.js application using `npm run build`. It compiles the code and generates the optimized production build of the application.

5. **Run tests**: This step executes the tests for the Next.js application using `npm run test`. It verifies the functionality and quality of the application, ensuring that it meets the required standards.

You can customize this workflow to suit your specific needs, such as using different Node.js versions, configuring additional tests or linting steps, or deploying the application after successful tests.
