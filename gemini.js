// Define the Google Generative AI model setup
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_key = 'AIzaSyDbO9Hn8bZZcufb2WsuVeNghwV1rrEbAos';
let model;

// Async function to initialize model
async function initializeModel() {
    try {
        const genAI = new GoogleGenerativeAI(API_key);
        model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        console.log("Model initialized");
    } catch (error) {
        console.error("Error initializing model:", error);
    }
}

// Call the initialization function at the start
initializeModel();

// Ensure model is ready before using it in ask_AI
async function ask_AI(response) {
    if (!model) {
        console.error("Model not initialized");
        return;
    }
    
    try {
        const result = await model.generateContent(`${response}`);
        console.log(result.response.text());
    } catch (error) {
        console.error("Error calling ask_AI:", error);
    }
}
