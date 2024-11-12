import nltk
from nltk.chat.util import Chat, reflections

# Sample pairs of patterns and responses
pairs = [
    ["hello", ["Hi there!", "Hello!"]],
    ["(.*) your name?", ["My name is Chatbot.", "I'm a bot created for conversation."]],
    ["how are you?", ["I'm doing well, thank you.", "I'm just a bunch of code, but I'm fine!"]],
    ["quit", ["Goodbye!", "It was nice talking to you."]]
]

# Initialize the chatbot
chatbot = Chat(pairs, reflections)

# Start the conversation
print("Chatbot: Hi, type something to talk to me or type 'quit' to exit.")
chatbot.converse()
