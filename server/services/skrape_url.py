import requests
from bs4 import BeautifulSoup
import openai

openai.api_key = 'your_openai_api_key'

def skrape_website(url):
    try:
        response = requests.get(url)
    except Exception as e:
        print(e)
        return None
    
    soup = BeautifulSoup(response.content, 'html.parser')
    text = ' '.join(p.get_text() for p in soup.find_all('p'))
    return text[:2000]

def ask_question(content, question):
    prompt = f"Based on the following webpage content:\n{content}\n\nQuestion: {question}\nAnswer:"
    
    response = openai.Completion.create(
        engine="gpt-3.5-turbo",
        prompt=prompt,
        max_tokens=150,
        temperature=0.5
    )
    
    answer = response.choices[0].text.strip()
    return answer
    

