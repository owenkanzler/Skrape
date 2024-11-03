import requests
from bs4 import BeautifulSoup
from openai import OpenAI

client = OpenAI(
    api_key = "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"
)

def skrape_website(url):
    headers = {'User-Agent': 'Mozilla/5.0'}

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
    except Exception as e:
        print(f"Failed to fetch URL: {e}")
        return None
    
    soup = BeautifulSoup(response.content, 'html.parser')

    if not soup.find_all('p'):
        return None

    text = ' '.join(p.get_text() for p in soup.find_all('p'))

    return text[:5000]

def ask_question(content, question):
    prompt = f"based on the following content from a webpage: {content} \n\nQuestion: {question} \n\nAnswer:"


    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are an assistant called Skrape that helps users understand and summarize webpages. respond to the question with a short answer."},
                {"role": "user", "content": prompt}
            ],
        )
    except Exception as e:
        print(f"Failed to ask question: {e}")
        return None

    answer = response.choices[0].message.content.strip()
    print(answer)

    return answer

    

