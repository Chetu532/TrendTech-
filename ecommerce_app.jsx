Here’s a clean **Next.js source code** for your TrendTech App that you can directly use for GitHub + Vercel deployment:

### File: `package.json`
```json
{
  "name": "trendtech",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "13.5.0",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  }
}
```

---

### File: `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
```

---

### File: `app/layout.js`
```javascript
import './globals.css'

export const metadata = {
  title: 'TrendTech App',
  description: 'E-commerce app built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

---

### File: `app/page.js`
```javascript
import TrendTechApp from "@/components/TrendTechApp";

export default function Home() {
  return <TrendTechApp />;
}
```

---

### File: `components/TrendTechApp.jsx`
```javascript
import React from "react";

export default function TrendTechApp() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">TrendTech App</h1>
        <button className="border px-4 py-2 rounded-lg">Cart</button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white p-4 rounded-2xl shadow-md">
            <img
              src={`https://via.placeholder.com/200?text=Product+${item}`}
              alt={`Product ${item}`}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">Product {item}</h2>
            <p className="text-gray-600 mb-2">$ {(item * 10).toFixed(2)}</p>
            <button className="bg-blue-500 text-white w-full py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

---

### File: `app/globals.css`
```css
body {
  margin: 0;
  font-family: sans-serif;
}
```

---

⚡ Steps to use this source code:
1. Create a new folder `trendtech` and add these files.
2. Run `npm install`.
3. Run `npm run dev` → your app will start locally.
4. Push this to GitHub.
5. Import repo into **Vercel** → Deploy → Live site 🎉.

Chetu, do you want me to **prepare this as a ZIP file** so you can directly download and upload to GitHub? 🚀
