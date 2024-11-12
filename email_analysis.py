from transformers import pipeline
import re

sentiment_analyzer = pipeline("sentiment-analysis")

def analyze_email(email_text):

    result = sentiment_analyzer(email_text)
    sentiment = result[0]['label']
    score = result[0]['score']

   
    feedback = ""
    if sentiment == "POSITIVE":
        feedback = "Your email has a positive tone. It should be well-received!"
    elif sentiment == "NEGATIVE":
        feedback = (
            "Your email seems to have a negative tone. Consider softening your language or "
            "adding a friendly closing line."
        )
    else:
        feedback = "Your email has a neutral tone. Ensure your main points are clear and concise."

  
    empathy_score, politeness_score, empathy_feedback, politeness_feedback = analyze_empathy_politeness(email_text)

   
    combined_feedback = f"{feedback}\n\n{empathy_feedback}\n{politeness_feedback}"
    
    return sentiment, score, combined_feedback, empathy_score, politeness_score

def analyze_empathy_politeness(email_text):

    polite_phrases = ["please", "thank you", "kindly", "would you mind", "I appreciate"]
    empathetic_phrases = ["I understand", "I’m sorry", "I can imagine", "I sympathize", "It must be difficult"]


    empathy_score = 0
    politeness_score = 0


    for phrase in polite_phrases:
        if re.search(r'\b' + re.escape(phrase) + r'\b', email_text, re.IGNORECASE):
            politeness_score += 1

   
    for phrase in empathetic_phrases:
        if re.search(r'\b' + re.escape(phrase) + r'\b', email_text, re.IGNORECASE):
            empathy_score += 1

    empathy_feedback = (
        "Your email shows empathy. Great job connecting with the recipient!" if empathy_score > 0 else
        "Consider adding a phrase that shows understanding or empathy, like 'I understand' or 'It must be difficult.'"
    )
    politeness_feedback = (
        "Your email is polite. Nicely done!" if politeness_score > 0 else
        "Consider adding polite phrases like 'please' or 'thank you' to make your email more courteous."
    )

    return empathy_score, politeness_score, empathy_feedback, politeness_feedback
