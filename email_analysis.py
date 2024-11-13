import language_tool_python
from transformers import pipeline
import re

# Initialize sentiment analysis
sentiment_analyzer = pipeline("sentiment-analysis")
# Initialize language tool
tool = language_tool_python.LanguageTool('en-US')

def analyze_email(email_text):
    # Sentiment analysis
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

    # Empathy and politeness analysis
    empathy_score, politeness_score, empathy_feedback, politeness_feedback = analyze_empathy_politeness(email_text)

    # Grammar and style analysis
    grammar_feedback = analyze_grammar_and_style(email_text)

    combined_feedback = f"{feedback}\n\n{empathy_feedback}\n{politeness_feedback}\n\n{grammar_feedback}"
    
    return sentiment, score, combined_feedback, empathy_score, politeness_score

def analyze_empathy_politeness(email_text):
    polite_phrases = [
        "please", "thank you", "kindly", "would you mind", "I appreciate", "I hope this email finds you well.",
        "Hope you are well", "Thanks for your time", "Much appreciated, thank you", "Kindly let me know",
        "Looking forward to it", "Please feel free", "Thank you sincerely", "At your convenience",
        "Wishing you the best", "Warmest regards always"
    ]

    empathetic_phrases = [
        "I understand", "I’m sorry", "I can imagine", "I sympathize", "It must be difficult",
        "I understand completely", "So sorry to hear", "That sounds frustrating", "Your concerns matter",
        "I am here", "Must be so difficult", "Appreciate your patience", "Here to support", "I can imagine"
    ]

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

def analyze_grammar_and_style(email_text):
    # Check grammar and style
    matches = tool.check(email_text)
    if not matches:
        return "Your email has no grammar or style issues. Great job!"

    feedback = "Grammar and Style Issues:\n"
    for match in matches:
        feedback += f"- {match.message} (at position {match.offset})\n"
    
    return feedback
