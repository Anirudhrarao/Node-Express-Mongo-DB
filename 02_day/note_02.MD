
---
# 🟨 **Day 2: NPM, `package.json`, Installing Packages, and Creating Your Own Module**

---
## 📘 What is NPM?

> **NPM** (Node Package Manager) is the **default package manager** for Node.js.  
> It lets you:

- 🔽 **Install** packages (libraries/tools others have built)
    
- 📦 **Manage** dependencies in your project
    
- 🚀 **Publish** your own packages

---
## 📁 What is `package.json`?

It’s the **manifest** file of a Node.js project.

### It stores:

- Project name, version, description
    
- List of installed packages (dependencies)
    
- Scripts like `start`, `test`, `dev`

---
## 💡 Why Do We Need NPM?

Imagine you want to:

- Use **Express** instead of writing your own server logic
    
- Use **Mongoose** instead of writing raw MongoDB queries
    
- Use **Lodash** to simplify array or object operations

📦 NPM makes it 1 command away:

```bash
npm install express
```

---
## ✅ Real-world Flow (Diagram)

![!\[\[day2_img.png\]\]](day2_img.png)