const apiKey = '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';
const model = 'Qwen/Qwen2.5-1.5B-Instruct';  // Replace with the model ID you want to use

async function queryHuggingFace(text) {
  const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inputs: text })
  });

  const responseText = await response.text(); // Use .text() to see raw response body

  if (response.ok) {
    try {
      const result = JSON.parse(responseText);
      console.log("Parsed response:", result);
      // Update the HTML content to display the response
      document.getElementById('response').innerText = JSON.stringify(result, null, 2);
      return result;
    } catch (error) {
      console.error("Error parsing response:", error);
      console.log("Raw response:", responseText);
    }
  } else {
    console.error('Error:', response.statusText);
    throw new Error('Request failed');
  }
}

// Call the function with text input
queryHuggingFace("How does this email come across to the person who is recieving it: Hey Sawyer! I am sorry for the delay on their contacts! I have attached them and CC d them on this email. Finlay Patoto: Main Jetson Nano Processor, frpatoto42@tntech.edu Kevin Ulrich: Camera system, kwulrich42@tntech.edu Katie Swinea: Image Processing, keswinea42@tntech.edu Let me know if you need anything else! ")
  .then(response => console.log("Response:", response))
  .catch(error => console.error("Error:", error));
