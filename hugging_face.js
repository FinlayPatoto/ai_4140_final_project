const apiKey = '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';
const model = 'Qwen/Qwen2.5-72B-Instruct';  // Ai model being used

// Function to query Hugging Face API
async function queryHuggingFace(text, topic) {
  const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      inputs: text,
      parameters: {
        max_new_tokens: 8192, // Increase this number as needed
        temperature: 0.7     // Optional: Adjust other generation parameters
      }
    })
  });

  const responseText = await response.text(); // Use .text() to see raw response body

  if (response.ok) {
    try {
      const result = JSON.parse(responseText);
      console.log("Parsed response:", result);
      
      // Get the generated text (which includes the input text and the AI's response)
      let generatedText = result[0].generated_text;
      let cleanedText = generatedText.replace(text, '').trim(); // This removes the input text
      console.log(cleanedText);

      console.log("Cleaned response:", generatedText);
      document.getElementById('dynamicInput').innerHTML = marked.parse(cleanedText); // Display the cleaned response

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

// Event listener for the submit button
document.getElementById('submit_button_finn').addEventListener('click', () => {
  const textareaValue = document.getElementById('validationTextarea').value;
  const dropdownValue = document.querySelector('select').value;

  // Check if the textarea has content and dropdown is selected
  if (textareaValue && dropdownValue) {
    // Hide the submit button and show the spinner
    document.getElementById('submit_button_finn').style.display = 'none';
    document.querySelector('.spinner-border').style.display = 'block';
    disableFields();

    // You can use the dropdown value to customize the AI query, e.g., pass it as part of the request
    let prompt = `Topic: ${dropdownValue}\nText: ${textareaValue}`;

    queryHuggingFace(prompt, dropdownValue)
      .then(response => {
        console.log("Response:", response);
        // Once AI response is received, show the submit button and hide the spinner
        document.getElementById('submit_button_finn').style.display = 'inline-block';
        document.querySelector('.spinner-border').style.display = 'none';
        document.getElementById('dynamicInput').style.display = 'block';
        enableFields();
      })
      .catch(error => {
        console.error("Error:", error);
        // In case of an error, show the submit button and hide the spinner
        document.getElementById('submit_button_finn').style.display = 'inline-block';
        document.querySelector('.spinner-border').style.display = 'none';
        enableFields();
      });
  } else {
    alert("Please fill in both the textarea and select a topic.");
  }
});

function disableFields() {
    // Disable the textarea
    const textarea = document.getElementById("validationTextarea");
    if (textarea) {
        textarea.disabled = true;
    }

    // Disable the select element
    const select = document.querySelector(".form-select");
    if (select) {
        select.disabled = true;
    }
}

function enableFields() {
    // Enable the textarea
    const textarea = document.getElementById("validationTextarea");
    if (textarea) {
        textarea.disabled = false;
    }

    // Enable the select element
    const select = document.querySelector(".form-select");
    if (select) {
        select.disabled = false;
    }
}
