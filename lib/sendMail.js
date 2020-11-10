const mailgun = require('mailgun-js');
const htmlGenerator = require('./htmlGenerator');

const mailgunOptions = {
  apiKey: process.env.MAILGUN_ACTIVE_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
}

module.exports = {
  sendMailRegisterCustomer,
}

async function sendMailRegisterCustomer(email, name) {
  const html = await htmlGenerator.generator('emailConfirmation', { name: name });
  try {
    const transport = mailgun(mailgunOptions);
    const objectSend = {
      from: "Du hoc Interlink<mail@duhocinterlink.com>",
      to: email,
      subject: "Cảm ơn bạn đã liên hệ với chúng tôi",
      html
    }
    const result = transport.messages().send(objectSend);
  } catch (error) {
    console.log(error);
  }
}