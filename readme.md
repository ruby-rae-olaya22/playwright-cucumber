# Test Automation Project

## Precondition
Before getting started, make sure the following tools are installed:

- Preferred IDE (for example, Visual Studio Code)
- Node.js
- Git
- Preferred AI tool for assistance

## Project Setup
Install the required dependencies for the automation framework:

```bash
npm init -y
npm init playwright@latest
npm install --save-dev @cucumber/cucumber
npm install -D ts-node typescript
npx tsc --init
npm install dotenv --save
```

Optional tools to install
1. For HTML report  
```bash
npm install --save-dev multiple-cucumber-html-reporter
```

Install the extensions (VS Code IDE)
1. Playwright Test for VSCode by Microsoft
2. Cucumber by Cucumber 

Remove the following files
- playwright.config.ts
- example.spec.ts

Update the Preference Settings in VS Code
1. Go to File -> Preferences -> Settings
2. Expand Extensions -> Cucumber
3. update the following
```bash
"cucumber.features": [
	"features/**/*.feature",
],
```
```bash
"cucumber.glue": [
	"src/step-definitions/**/*.ts",
]
```

## Project Structure

```text
config/
features/
scripts/
src/
  pages/
  step-definitions/
  support/
```

- config folder: contains application and environment settings
- features folder: contains what to test
- scripts folder: contains helper utilities and automation scripts
- src/pages folder: contains page locators and page actions
- src/step-definitions folder: contains the implementation of feature steps
- src/support folder: contains framework setup and hooks

## Getting Started
1. Clone the repository.
2. Install the dependencies listed above.
3. Configure the environment settings in the config folder.
4. Add feature files in the features folder.
5. Implement step definitions and page objects under src.

## Notes
This project is intended to provide a clean starting point for UI automation using Playwright, Cucumber, and TypeScript.
