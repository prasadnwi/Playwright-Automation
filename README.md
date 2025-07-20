# Playwright Web Automation Project

This project demonstrates end-to-end web automation using [Playwright](https://playwright.dev/). It is designed to showcase proficiency in modern web testing practices, including cross-browser testing, advanced Playwright configurations, HTML reporting, and post-test integrations with email and Slack notifications.

---

## Features

* **Automated UI Testing**: Runs tests on the web application.
* **Cross-Browser Testing**: Supports **Chromium**, **Safari** and **Firefox** for multi-browser testing.
* **Advanced Playwright Configurations**:

  * Headless testing
  * Retries and timeouts
  * Screenshot and video recording on failure
  * Parallel test execution for faster results
* **HTML Test Reports**: Generates detailed graphical reports after test execution.
* **Post-Test Notifications**:

  * Sends test results via **Email**.
  * Sends test completion notifications to a **Slack channel**.

---

## Requirements

* **Node.js** (>= 14.0.0)
* **npm** or **yarn**

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/playwright-automation-demo.git
   cd playwright-automation-demo
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install Playwright browsers**:

   ```bash
   npx playwright install
   ```

---

## Running the Tests

### 1. Run the tests and generate reports

```bash
npx playwright test
```

This command will:

* Run tests using Playwright.
* Generate an HTML report.
* Trigger email and Slack notifications after test completion.

### 2. View the Test Report

After running the tests, you can view the HTML test report with:

```bash
npx playwright show-report
```

---

## Configuration

### Playwright Configuration

The test configurations are set in `playwright.config.ts`, where you can specify:

* **Timeout** for tests
* **Retries** on failures
* **Browser options** (Headless mode, viewport size, etc.)
* **Reporter settings** (HTML, list)

Here’s an example configuration in `playwright.config.ts`:

```ts
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [['html', { outputFolder: 'playwright-report' }], ['list']],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
  ],
});
```

### Notifications

* **Email Notifications**: The project sends test reports via **Nodemailer**. Update the `.env` file with your email credentials and recipient details.
* **Slack Notifications**: Use the **Slack Incoming Webhook** URL in the `.env` file to send test results to your Slack channel.

---

## Post-Test Automation

After tests complete, a **post-test script** (`postRun.ts`) is executed. This script sends:

* An email with the test report attached.
* A message to Slack notifying the completion of the test.

---

## Customizing the Project

Feel free to modify the following files to tailor the project to your needs:

* **`tests/todo.spec.ts`**: Add or modify test scenarios.
* **`playwright.config.ts`**: Adjust browser configurations, retries, timeouts, etc.
* **`dataSet/vaildUSer.ts`**: Modify data -> handle this

---

## Data Handling Strategy

To improve scalability, separation of concerns, and maintainability, the test data is externalized from the test cases and organized in a modular manner. This allows for easy management of test data, reusability across multiple test cases, and cleaner code.

* **`Centralized Test Data`**: All test data (such as login credentials, user profiles, and product information) is stored in a dedicated /test-data/ directory, making it easy to maintain and scale.
* **`Externalized Data`**: Test data is stored in JSON files to separate data from test logic. This ensures changes to data can be made without modifying the core test structure.
* **`Data-Driven Testing`**: By using loops to iterate through datasets, we can easily simulate different test scenarios with minimal code duplication.
* **`Dynamic Data Generation`**: For user-specific or constantly changing data (like email addresses or user names), dynamic data is generated using helper functions to keep tests fresh and unique.

This strategy ensures that the tests are flexible, easy to update, and able to cover a wide range of scenarios without redundancy.

---

## CI/CD Integration

You can integrate this project into your CI/CD pipeline (e.g., GitHub Actions, GitLab CI, Jenkins). This project integrates GitHub Actions to run tests automatically whenever a Pull Request (PR) is raised for the main branch. The tests will be executed on different browsers, and the results will be reported in the GitHub Actions interface.

* On every PR, the action will trigger the test suite, ensuring that code changes do not break existing functionality. 
* The test results will be shown directly in the GitHub Actions logs, making it easier to review failures or issues.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

* [Playwright](https://playwright.dev/) for providing a powerful framework for browser automation.
* [Nodemailer](https://nodemailer.com/) for email notifications.
* [Slack API](https://api.slack.com/) for Slack integration.

---

Let me know if you'd like to make any changes or add specific sections!
