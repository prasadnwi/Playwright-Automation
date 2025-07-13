// utils/slack.ts
import axios from 'axios';

export async function sendSlackNotification() {
  const webhookURL = 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL';

  await axios.post(webhookURL, {
    text: '✅ Playwright tests completed. View the report: http://your-report-url',
  });
}
