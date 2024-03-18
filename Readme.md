# Creating an npm package

### initial files and folders
1. Create a new package project in a new folder `npm init -y`
2. Create an `src` folder and a `index.ts` file inside it.

### Running Typescript in Node.js while developing the package
We will start by installing `tsx`. 
It uses `esbuild` to run typescript files on the fly in `node.js` with _zero configuration_.
1. run `npm install -D tsx`
2. add a `dev` script to `package.json` to run `tsx` in `watch` mode.
    
    ```json
    "scripts": {
        "dev": "tsx watch ./src/index.ts",
    }
    ```
3. Write some typescript code in `index.ts` and run `npm run dev` to see it in action. 

### Building the package
While `esbuild` is orders-of-magnitude faster then `tsc` it doesn't type-check our code.
Although there are configuration options to use tsc only for type-checking in tandam with `esbuild` for the actual compilation, I want to keep our config simple and not rely too much on `esbuild` other then spontanious zero-config development. So let's use `tsc` to build our package for production.
1. install the following **`dev dependencies`**
   1. typescript - the `tsc` compiler for our build step
   2. @types/node - types for node.js
   3. rimraf - a `rm -rf` util for node.js that works on windows too

2. Add a `tsconfig.json` file to the root of the project with the following code.
   If you're curious about the configuration options, you can read about them [here](https://www.typescriptlang.org/tsconfig), or run `tsc --init` to generate a `tsconfig.json` file with comments explaining each option...

    ```json
    {
        "compilerOptions": {
            "target": "esnext",
            "module": "esnext",
            "outDir": "dist",
            "rootDir": "src",
            "strict": true,
            "noEmitOnError": true,
            "moduleResolution": "node",
            "esModuleInterop": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true
        },
        "exclude": ["**/*.spec.ts"]
    }
    ```

3. Add a `build` script to `package.json` to run `tsc` .
    
    ```json
    "scripts": {
        "build": "rimraf dist && tsc",
    }
    ```
   

### unit tests
   1. vitest - a lightweight next generation drop-in replacement for jest

### Code coverage
   1. nyc - a code coverage tool that works well with mocha

### Creating type declarations files

### Linting
   1. eslint - a pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript
   2. prettier - an opinionated code formatter
   3. husky - a tool to prevent bad `git commit`, `git push` and more by using hooks
   4. lint-staged - a tool to run linters on files that are staged in git

### Documentation   
    1. typedoc - a documentation generator for typescript projects
    2. markdown - a lightweight markup language with plain-text-formatting syntax
    3. github pages - a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub

### Publishing the package
    1. npm - a package manager for the JavaScript programming language
    2. github - a provider of Internet hosting for software development and version control using Git
    3. git - a distributed version-control system for tracking changes in source code during software development

### Versioning
    1. semver - a semantic versioning specification
    2. conventional commits - a specification for adding human and machine readable meaning to commit messages
    3. commitlint - a tool to lint your commit messages
    4. standard-version - a utility for versioning using semver and CHANGELOG generation powered by conventional commits

### Continuous Integration
    1. github actions - a CI/CD service that can be used to build, test, and deploy your code
    2. environment variables - a way to store sensitive information and use them in your CI/CD pipeline
