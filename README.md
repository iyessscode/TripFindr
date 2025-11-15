# 🌍 **Discover Beautiful Destinations Around the World**

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Made_With-HTML%20%7C%20CSS%20%7C%20JS-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-Free-lightgrey?style=for-the-badge" />
</p>

<p align="center">
A lightweight, fast, and fully client-side <strong>travel discovery web app</strong> built with vanilla HTML, CSS, and JavaScript.<br>
Powered entirely by a static JSON dataset — <strong>no backend required</strong>.
</p>

---

## ✨ **Features**

### 🔎 Smart Search

* Search by **location**, **description**, or **tags**
* Live search (updates as you type)
* Enter-key search support
* Auto show/hide results container

### 📱 Fully Responsive UI

* Mobile-first layout
* Clean hamburger navigation
* Flexible typography and spacing

### ⚡ 100% Client-Side

* No API calls
* No backend server
* Fast, lightweight, and easy to deploy

---

## 🌐 **Travel Categories**

Includes curated tags such as:
`beach`, `mountain`, `island`, `temple`, `city`, `culture`, `nature`, `historical`

---

## 🗂️ **Project Structure**

```
TripFindr/
│
├── index.html
├── about.html
├── contact.html
│
├── styles/
│   ├── globals.css
│   ├── home.css
│   ├── about.css
│   └── contact.css
│
├── scripts/
│   ├── index.js
│   └── search.js
│
├── assets/
│   ├── icons/
│   └── images/
│
└── destinations.json
```

---

## 📥 **Installation & Usage**

### **Option A — Run Locally**

Clone the repository:

```bash
git clone https://github.com/yourusername/TripFindr.git
```

Open `index.html` in your browser.

---

### **Option B — VS Code Live Server (Recommended)**

1. Install the **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**

---

## 📄 **destinations.json Format**

```json
[
  {
    "location": "Bali, Indonesia",
    "description": "A tropical paradise known for beaches and temples.",
    "tags": ["beach", "island", "culture"],
    "image": "assets/images/bali.jpg"
  }
]
```

---

## 🔍 **How Search Works**

### Filtering Logic

```js
const response = await fetch('./destinations.json');
const data = await response.json();

const filtered = data.filter(item =>
  item.location.toLowerCase().includes(query) ||
  item.description.toLowerCase().includes(query) ||
  item.tags.some(tag => tag.toLowerCase().includes(query))
);
```

### Results Visibility

```js
resultsContainer.classList.toggle('hidden', filtered.length === 0);
```

---

## 🚀 **Future Enhancements**

* ⭐ Favorites using `localStorage`
* 🧭 Tag-based filtering UI (chips)
* 📊 Sort by popularity, newest, recommended
* 🔄 Smooth animation transitions for results
* 🌐 Multi-language support

---

## ❤️ **Credits**

Built as part of an educational project using HTML, CSS, and JavaScript.
All icons and images belong to their respective creators.

---

## 📜 **License**

Free to use, modify, enhance, and learn from.

