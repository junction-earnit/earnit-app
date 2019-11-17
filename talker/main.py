import requests
import time

last_seen_time = 0


def shouldSendMessage(current_data):
    global last_seen_time
    if not current_data.get("options", {}).get("phishing", False):
        return False
    last = current_data.get("options", {}).get("lastPhishing", 0)
    if last > last_seen_time:
        last_seen_time = last
        return True


def sendPhishingMessage():
    r = requests.put(
        'https://earnit-63f7c.firebaseio.com/earnitdata/options/lastPhishing.json',
        data="0"
    )
    requests.post(
        'https://api.telegram.org/bot1047999170:AAGWIysJXSGlOxbGI9olLxqu4zTdd8ZF1Vk/sendMessage',
        data={
            "chat_id": 43492392,
            "text": "Hello! I am the very rich prince from Nigeria and I decided to give FREE XBOX to all children in your local area: https://free-xbox-from-nigeria-now.netlify.com"
        }
    )


while(True):
    r = requests.get('https://earnit-63f7c.firebaseio.com/earnitdata.json')
    current_data = r.json()
    print(current_data)
    if (shouldSendMessage(current_data)):
        sendPhishingMessage()
    time.sleep(3)

