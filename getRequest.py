import requests

# fetching data from the api using get request
response = requests.get('http://localhost:8000/api/get/')
data = response.json()["data"]

# sorting data by id
sorted_data = sorted(data, key=lambda k:k['id'])

# iterating through every object in the list and printing the name and id in sorted order
for i in sorted_data:
    print("id : " + str(i['id']))
    print("name :" + i['name'])
    
