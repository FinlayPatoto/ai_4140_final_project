const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_key = 'AIzaSyDbO9Hn8bZZcufb2WsuVeNghwV1rrEbAos';

const genAI = new GoogleGenerativeAI(API_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const email_text = 'I am very sorry for your loss.';

async function ask_AI() {
    const result = await model.generateContent(`Prompt me for evaulating the connotation of an email: ${email_text}`);
    console.log(result.response.text());
}

ask_AI();
