import { sendEmail } from '../utils/email';
import { sendSlackNotification } from '../utils/slack';

(async () => {
  await sendEmail();
  await sendSlackNotification();
})();
