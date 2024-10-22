import requests
import os
from dotenv import load_dotenv

load_dotenv()

def get_ai_response(prompt: str) -> str:
    API_URL = "https://api-inference.huggingface.co/models/gpt2"
    headers = {"Authorization": f"Bearer {os.getenv('HUGGINGFACE_API_KEY')}"}
    
    response = requests.post(API_URL, headers=headers, json={"inputs": prompt})
    return response.json()[0]["generated_text"]