import google.generativeai as genai
from email_analysis import analyze_email

API_key = 'AIzaSyDbO9Hn8bZZcufb2WsuVeNghwV1rrEbAos'
email_text = 'I wanted to thank you for your hard work on this project. I really appreciate your effort, and I understand the challenges you have faced.'

genai.configure(api_key=API_key)
model = genai.GenerativeModel("gemini-1.5-flash")
response = model.generate_content(f'Prompt me for evaulating the connotation of an email: {email_text}')

print(response.text)

sentiment, score, feedback, empathy_score, politeness_score = analyze_email(email_text)

print(f'Sentiment: {sentiment}')
print(f'Confidence Score: {score:2f}')
print(f'Empathy: {empathy_score}')
print(f'Politeness: {politeness_score}')
print(f'Feedback: {feedback}')
