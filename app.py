from flask import Flask, request, jsonify, send_from_directory
import string
from flask_restful import Api
from flask_cors import CORS
app = Flask(__name__,static_url_path='', static_folder='./react-frontend/build')
CORS(app) #comment this on deployment
api = Api(app)
# ...
@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route('/bhfl', methods=['GET', 'POST'])
def api():
    if request.method == 'GET':
        # For the GET method, return an operation code
        return jsonify({'operation_code': '1'})

    if request.method == 'POST':
        try:
            # Parse JSON data from the POST request
            data = request.get_json()
            
            # Extract the input data as a single string
            input_data = data.get('data')
            
            # Split the input string into an array of characters
            input_array = list(input_data)
            
            # Calculate the highest alphabet in the input array of alphabets
            highest_alphabet = max(input_array, key=lambda x: ord(x.lower()))
            
            response_data = {
                'status': 'Success',
                'user_id': 'Bharat_Kumar_K_22042003',
                'college_email_id': 'bk8498@srmist.edu.in',
                'college_roll_number': 'RA2011003020016',
                'numbers_array': [char for char in input_array if char.isnumeric()],
                'alphabets_array': [char for char in input_array if char.isalpha()],
                'highest_alphabet': highest_alphabet
            }

            return jsonify(response_data)
        except Exception as e:
            return jsonify({'status': 'Error', 'message': str(e)})


if __name__ == '__main__':
    app.run(debug=True)
