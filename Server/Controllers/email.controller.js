const nodemailer = require("nodemailer");

// selecting mail service and authorizing with our credentials
const transport = nodemailer.createTransport({
  // you need to enable the less secure option on your gmail account
  // https://support.google.com/mail/answer/185833?hl=en
  // remember to enter your credentials in the .env file
  service: "Gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

const send_email = async (req, res) => {
  console.log(req.body);
  const { name, email, subject, message } = req.body;
  const default_subject = "This is a default subject";
  const mailOptions = {
    // to: field is the destination for this outgoing email, your admin email for example. We can also include several email in an array, for example admin's email and user's email from the form. Check out official documentation of nodemailer message: https://nodemailer.com/message/
    to: process.env.DESTINATION_EMAIL,
    // to: email, // coming from the request body
    replyTo: email, // An email address that will appear on the Reply-To: field
    subject: "New message from " + name,
    // The HTML version of the message -
    html: `<p>" 
      ${subject || default_subject} 
      </p><p><pre>
      ${message} 
      </pre></p>`,
  };
  try {
    const success = await transport.sendMail(mailOptions);
    console.log("success: ", success);
    if (success && success.response.includes("OK")) {
      return res.json({ ok: true, message: "email sent" });
    } else {
      return res.json({ ok: false, message: "Something went wrong!" });
    }
  } catch (err) {
    console.log(err.message || err);
    return res.json({ ok: false, message: err.message || err });
  }
};

const send_newsletter = async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  // const default_subject = "This is a default subject";
  const mailOptions = {
    // to: field is the destination for this outgoing email, your admin email for example. We can also include several email in an array, for example admin's email and user's email from the form. Check out official documentation of nodemailer message: https://nodemailer.com/message/
    to: email,
    // to: email, // coming from the request body
    replyTo: email, // An email address that will appear on the Reply-To: field
    subject: "Welcome to OKdude, we are happy that you joined us!",
    // The HTML version of the message -
    html: `
    <h1>The T-Shirt Chronicles: Your Wardrobe's Best Friend!</h1>
    <p>Greetings, T-Shirt Aficionados!</p>
    <p>We hope this missive finds you in the finest of fettle and with an appreciation for the staple of every wardrobe: the humble yet mighty T-shirt! In this edition of our newsletter, we're diving deep into the world of T-shirts, exploring their history, versatility, and everlasting charm.</p>
    <h2>A Brief History Lesson:</h2>
    <p>Did you know that the T-shirt has roots tracing back to the 19th century? Originally worn as an undergarment by soldiers during World War I, it wasn't until the mid-20th century that the T-shirt stepped into the limelight as a symbol of rebellion, comfort, and self-expression.</p>
    <!-- Add more content as needed -->
    <p>Stay Connected:</p>
    <p>Want to stay in the loop with the latest T-shirt trends, styling tips, and exclusive offers? Be sure to follow us on social media and subscribe to our newsletter for regular updates and inspiration. Together, let's celebrate the enduring allure of the T-shirt and make every day a T-shirt day!</p>
    <p>Until next time, stay stylish and keep rocking those tees!</p>
    <p>Warmest regards,</p>
    <p> The okdude Team</p>`,
  };
  try {
    const success = await transport.sendMail(mailOptions);
    console.log("success: ", success);
    if (success && success.response.includes("OK")) {
      return res.json({ ok: true, message: "email sent" });
    } else {
      return res.json({ ok: false, message: "Something went wrong!" });
    }
  } catch (err) {
    console.log(err.message || err);
    return res.json({ ok: false, message: err.message || err });
  }
};

module.exports = { send_email, send_newsletter };
