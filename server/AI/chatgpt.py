from flask import Flask, request, jsonify
from gradio_client import Client

app = Flask(__name__)

@app.route('/', methods=['POST'])
def chatgpt():
    data = request.get_json()  # 获取JSON数据
    content = data.get('content')  # 从JSON数据中获取'number'字段
    if content is None:
        response = {
            'error': 'No number provided.',
        }
    else:
        print('connect to HF_spaces')
        client = Client("https://jollyomnivore-fusion92-chatgpt-sandbox.hf.space/")
        result = client.predict(
            content,	# str  in 'user_input' Textbox component
            "",	# str  in 'AI_Role' Textbox component
            api_name="/predict"
        )
        print('finish HF_spaces')
        response = {
            'result': result, 
        }
    return jsonify(response)  # 将结果转换为JSON格式并返回

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3010)  # 在本地的3010端口运行服务器
