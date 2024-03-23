from openai import OpenAI

def perplexityAI(majorName):
    with open('.env', 'r') as file:
        API_KEY = file.readline()
    model = 'pplx-7b-online'
    prompt = f'Give me a 4 year plan semester by semester for a {majorName} major at the University Of Virginia based on the University Of Virginia requirements. Please dont repeat classes'

    messages = [
        {
            "role": "system",
            "content": (
                "You are a helpful assistant who provides course plans and guidance for users at the University Of Virginia."
            ),
        },
        {
            "role": "user",
            "content": (
                prompt
            ),
        },
    ]

    client = OpenAI(api_key=API_KEY, base_url="https://api.perplexity.ai")

    response = client.chat.completions.create(
        model=model,
        messages=messages,
        max_tokens=4000
    )
    print(response.choices[0].message.content)