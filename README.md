# Webpage: SEO Tag and Social Media Topic Generation
Generate SEO tags and/or social media tags based on url

## Notes

- Amazon Nova Pro (Price per 1,000 input tokens): $0.0008
  - Text, Image, Video-to-text
- Cohere Command R (Price per 1,000 input tokens): $0.0005
  - Natural language processing
  - Text generation
  - Text summarization
- Llama 3.2 (1B) Instruct (Price per 1,000 input tokens): $0.0001
  - Agents
  - Chat optimized
  - Code generation
  - Complex reasoning analysis
  - Conversation
  - Document summarization
  - Math
  - Multilingual support
  - Natural language processing
  - On-device processing
  - Question answering
  - RAG
  - Rich text formatting
  - Sentence similarity
  - Text classification
  - Text generation
  - Text summarization
  - Text-to-text
  - Token classification
  - Translation

### Amazon Nova Pro - Sample Request
```
{
  "modelId": "amazon.nova-pro-v1:0",
  "contentType": "application/json",
  "accept": "application/json",
  "body": {
    "inferenceConfig": {
      "max_new_tokens": 1000
    },
    "messages": [{
      "role": "user",
      "content": [{
        "text": "this is where you place your input text"
      }]
    }]
  }
}
```
### Cohere Command R - Sample Request
{
  "modelId": "cohere.command-r-v1:0",
  "contentType": "application/json",
  "accept": "*/*",
  "body": "{\
    "chat_history\": [{\
      "role\": \"USER\",\
      "message\": \"What is an interesting new role in AI if I don't have an ML background\"
    }, {\
      "role\": \"CHATBOT\",\ "You could explore being a prompt engineer!\"
    }],\
    "message\": \"What are some skills I should have\"
  }"
}

### Llama 3.2 (1B) Instruct - Sample Request
```
{
  "modelId": "meta.llama3-2-1b-instruct-v1:0",
  "contentType": "application/json",
  "accept": "application/json",
  "body": {
    "inputs": [
      [{
        "role": "user",
        "content": "Tell me about Paris"
      },{
        "role": "assistant",
        "content": "Paris is a city in France."
      },{
        "role": "user",
        "content": "Is it the biggest city in France?"
      }]
    ],
    "parameters": {
      "max_new_tokens": 512,
      "top_p": 0.9,
      "temperature": 0.6
    }
  }
}
```
