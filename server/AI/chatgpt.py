from flask import Flask, request, jsonify
from gradio_client import Client

app = Flask(__name__)

@app.route('/', methods=['POST'])
def chatgpt():
    data = request.get_json()  # 获取JSON数据
    print("data from py:",data)
    prompt = data.get('prompt')  # 从JSON数据中获取内容
    if prompt is None:
        response = {
            'error': 'No number provided.',
        }
    else:
        print('connect to HF_spaces')
        client = Client("https://ysharma-explore-llamav2-with-tgi.hf.space/")
        result = client.predict(
            prompt,	# str in 'parameter_6' Textbox component
			api_name="/chat"
        )
        print("result from py:",result)
        print('finish HF_spaces')
        response = {
            'result': result, 
        }
    return jsonify(response)  # 将结果转换为JSON格式并返回

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3010)  # 在本地的3010端口运行服务器
