---
sidebar_position: 11
title: Working with APIs and JSON
---

Working with APIs (Application Programming Interfaces) and JSON (JavaScript Object Notation) is a common task in modern Python development. APIs enable communication between software systems, while JSON provides a lightweight format for data exchange. This document explores how to interact with APIs, handle responses, and work with JSON data in Python.

---

### 1. What is an API?

An **API** (Application Programming Interface) allows different software systems to communicate with each other. In Python, we often interact with **REST APIs**, which use HTTP methods like `GET`, `POST`, `PUT`, and `DELETE` to perform operations.

- **Tools**: The `requests` module is commonly used to interact with APIs.
- **Use Cases**: Fetching data, sending data, updating resources, or deleting resources.

---

### 2. Making HTTP Requests with `requests`

The `requests` library simplifies HTTP requests in Python.

#### GET Request

```python
import requests

# GET Request
response = requests.get('https://api.github.com')
print(response.status_code)  # Output: 200
print(response.json())       # Output: JSON response from the API
```

#### POST Request

```python
payload = {"name": "Alice", "age": 25}
response = requests.post('https://httpbin.org/post', json=payload)
print(response.json())  # Output: JSON response with posted data
```

- **Explanation**:
  - `GET` fetches data from the server.
  - `POST` sends data to the server, often as JSON.

---

### 3. Common HTTP Methods

| Method   | Purpose                     |
|----------|-----------------------------|
| `GET`    | Fetch data                  |
| `POST`   | Send new data               |
| `PUT`    | Update existing data        |
| `DELETE` | Remove data                 |

---

### 4. Working with Response Data

API responses often include JSON data, which can be parsed into Python dictionaries.

```python
response = requests.get('https://api.github.com')
data = response.json()
print(data['current_user_url'])  # Access specific fields
```

- **Explanation**:
  - The `json()` method converts the response into a Python dictionary.

---

### 5. Status Codes

HTTP responses include status codes that indicate the result of the request.

| Code | Meaning          |
|------|------------------|
| `200`| OK               |
| `404`| Not Found        |
| `500`| Server Error     |

```python
if response.status_code == 200:
    print("Success!")
else:
    print("Something went wrong")
```

- **Explanation**:
  - Check the `status_code` to determine if the request succeeded.

---

### 6. Sending Query Parameters

Query parameters allow you to pass additional information in the URL.

```python
params = {"q": "python", "sort": "stars"}
response = requests.get("https://api.github.com/search/repositories", params=params)
print(response.url)  # Output: Full URL with query parameters
```

- **Explanation**:
  - The `params` argument appends query parameters to the URL.

---

### 7. Headers and Authentication

Some APIs require headers for authentication or content-type specification.

```python
headers = {
    "Authorization": "Bearer your_token_here",
    "Content-Type": "application/json"
}
response = requests.get("https://api.example.com/data", headers=headers)
```

- **Explanation**:
  - Headers like `Authorization` are often used for API tokens.
  - `Content-Type` specifies the format of the request body.

---

### 8. JSON Basics in Python

JSON is a lightweight data format that maps directly to Python dictionaries and lists.

#### Convert Python Dict to JSON String

```python
import json

person = {"name": "Bob", "age": 30}
json_string = json.dumps(person)
print(json_string)  # Output: {"name": "Bob", "age": 30}
```

#### Convert JSON String to Python Dict

```python
parsed = json.loads(json_string)
print(parsed["name"])  # Output: Bob
```

- **Explanation**:
  - `json.dumps()` converts a Python object to a JSON string.
  - `json.loads()` parses a JSON string into a Python object.

---

### 9. Reading JSON from a File

You can load JSON data from a file using the `json` module.

```python
with open('data.json', 'r') as file:
    data = json.load(file)
print(data)
```

- **Explanation**:
  - `json.load()` reads JSON data from a file and parses it into a Python object.

---

### 10. Writing JSON to a File

Similarly, you can write Python objects to a JSON file.

```python
person = {"name": "Eve", "age": 22}

with open('output.json', 'w') as file:
    json.dump(person, file)
```

- **Explanation**:
  - `json.dump()` writes a Python object to a file in JSON format.

---

### 11. Real-Time API Example: OpenWeatherMap

Here’s an example of fetching weather data from the OpenWeatherMap API.

```python
API_KEY = 'your_api_key_here'
city = 'London'
url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}"

response = requests.get(url)
data = response.json()
print(data['weather'][0]['description'])  # Output: Weather description
```

- **Explanation**:
  - Replace `your_api_key_here` with your actual API key.
  - The `weather` field contains details about the current weather.

---

### 12. Handling API Errors

Always handle potential errors when working with APIs.

```python
try:
    response = requests.get('https://api.github.com/invalid')
    response.raise_for_status()  # Raises an exception for HTTP errors
except requests.exceptions.HTTPError as err:
    print(f"HTTP Error: {err}")
```

- **Explanation**:
  - `raise_for_status()` raises an exception if the response contains an HTTP error (e.g., 404 or 500).

---

### Conclusion

This document covers the essentials of working with APIs and JSON in Python, including making HTTP requests, handling responses, parsing JSON data, and managing errors. By mastering these concepts, you can integrate external services, retrieve real-time data, and build dynamic applications. Whether you're fetching data from a public API or interacting with a private service, Python's tools make API interactions straightforward and efficient.