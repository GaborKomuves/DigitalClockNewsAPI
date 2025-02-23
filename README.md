# 🕒 Digital Clock News API

**Digital Clock News API** is a simple web application that displays a digital clock and retrieves news from an API source.

---

## 🌟 Features
✅ Displays a **real-time digital clock**.  
✅ Integrates with a **news API** to fetch the latest headlines.  
✅ Simple and user-friendly interface.  
✅ Uses **HTML, CSS, and JavaScript** for the frontend.

---

## 🛠️ Technologies Used
- 🌐 **HTML5** - Web page structure
- 🎨 **CSS3** - Styling and design
- ⚡ **JavaScript** - Dynamic functionality
- 🔗 **News API** - Fetching real-time news

---

## 📥 Installation & Usage

### 🔹 1. Clone the Repository
```sh
   git clone https://github.com/GaborKomuves/DigitalClockNewsAPI.git
   cd DigitalClockNewsAPI
```

### 🔹 2. Open in Browser
Simply open the `index.html` file in a web browser.

```sh
   open index.html
```

### 🔹 3. API Configuration
- To fetch news data, you need to use a **News API Key**.
- In the `script.js` file, replace `YOUR_API_KEY` with your API key obtained from [NewsAPI.org](https://newsapi.org/).

```js
   const API_KEY = "YOUR_API_KEY";
```

---

## 📌 API Functionality
The application uses **NewsAPI** to retrieve news. Example request:

```js
fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## 📸 Screenshots
![Application Interface](https://your-image-host.com/image.png)

---

## 🚀 Planned Improvements
- 🏗️ Add a **dark mode**.
- 🌍 Support for **multiple languages**.
- ⏳ Option to **set an alarm**.

---

## 🤝 Contributions
Contributions are welcome! To contribute:
1. **Fork** the repository 🍴
2. Create a **new branch**: `git checkout -b new-feature` 🌿
3. Make your changes and **commit**: `git commit -m "Add feature X"` ✨
4. **Push** to GitHub: `git push origin new-feature` 🚀
5. Create a **Pull Request** 🔄

---

## 📜 License
This project is available under the **MIT License**.

📧 For any inquiries, contact me at [GaborKomuves](https://github.com/GaborKomuves)!

---

### 🎉 Enjoy Coding! 🚀

