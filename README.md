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

Sure! Here's a step-by-step guide on how to run a Dockerized Laravel application:

**Prerequisites:**
- Docker installed on your machine.

**Step 1: Clone the Laravel Application**
1. Open a terminal or command prompt.
2. Clone the Laravel application repository to your local machine using the following command:
   ```
   git clone <repository_url>
   ```
   Replace `<repository_url>` with the actual URL of the Laravel application repository.

**Step 2: Create Dockerfile**
1. In the root directory of the Laravel application, create a file named `Dockerfile` (without any file extension).
2. Open the `Dockerfile` with a text editor and copy the content provided in the previous response.

**Step 3: Build the Docker Image**
1. Open a terminal or command prompt.
2. Navigate to the root directory of the Laravel application (where the `Dockerfile` is located).
3. Run the following command to build the Docker image:
   ```
   docker build -t laravel-app .
   ```
   This command builds the Docker image using the `Dockerfile` and tags it as `laravel-app`. Make sure you include the `.` at the end of the command to specify the current directory as the build context.
4. Wait for the build process to complete. It may take a few minutes depending on the size of the Laravel application and the speed of your internet connection.

**Step 4: Run the Docker Container**
1. After the Docker image is successfully built, run the following command to start a Docker container based on the image:
   ```
   docker run -d -p 8080:80 --name laravel-container laravel-app
   ```
   This command runs a container named `laravel-container` based on the `laravel-app` image. It maps port 8080 on the host to port 80 inside the container, allowing you to access the Laravel application at `http://localhost:8080`.
2. Wait for the container to start. You can check the running containers using the command:
   ```
   docker ps
   ```
   The container named `laravel-container` should be listed with its status.

**Step 5: Access the Laravel Application**
1. Open a web browser and visit `http://localhost:8080`.
2. You should see the Laravel application running inside the Docker container.

Congratulations! You have successfully run a Dockerized Laravel application. You can now interact with the application through the browser. Any changes made to the source code will require rebuilding the Docker image and restarting the container to apply the changes.

Note: If your Laravel application requires additional services like a database, you can include them in the Docker Compose file and modify the Dockerfile and Laravel configuration accordingly.

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
