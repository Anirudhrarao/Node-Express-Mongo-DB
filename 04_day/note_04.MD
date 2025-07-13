
---
# 🟦 **Day 4: Routing and Middleware in Express.js**

---
## 📘 What is Routing in Express?

> Routing in Express.js means defining **how your server responds** to different **HTTP methods** (GET, POST, PUT, DELETE) and **URL paths** (`/home`, `/login`, etc.)

It’s like telling the server:

> "If someone visits `/about`, respond with this content."

---
### 🧱 Example

```js
app.get('/about', (req, res) => {
  res.send('About Us Page');
});
```

--- 
## 📘 What is Middleware in Express?

> Middleware are **functions** that run **between** the time a request comes in and the final response is sent.

Middleware can:

- Log request info
    
- Check authentication
    
- Parse request body
    
- Serve static files
    
- Handle errors

🧠 **Think of middleware as checkpoints** in the request–response pipeline.

---
## 🔧 Built-in Middleware You’ll Use

|Middleware|Purpose|
|---|---|
|`express.json()`|Parse JSON from request body|
|`express.urlencoded()`|Parse form data|
|`express.static()`|Serve static files like CSS, images|
|`custom middleware`|Logging, access control, etc.|

---
