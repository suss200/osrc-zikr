<div align="center">

<img src="./public/logo2.png" alt="OSRC Zikr" width="180">

# OSRC Zikr

### An open-source Arabic platform for daily Islamic Azkar

A clean, simple and privacy-focused web experience for reading and keeping track of daily Azkar.

<br>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge\&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149eca?style=for-the-badge\&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge\&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge\&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-6EE7B7?style=for-the-badge)](./LICENSE)

<br>

**[Live Website](YOUR_VERCEL_URL)** · **[Source Code](YOUR_GITHUB_REPOSITORY_URL)**

</div>

---

## 🌙 About

**OSRC Zikr** is an open-source Arabic web platform built to provide a simple and comfortable experience for reading daily Islamic Azkar.

The project was created with a focus on:

* 📿 Easily accessible daily Azkar
* 📚 Clear references for religious content
* 🔢 Interactive repetition counters
* 🌙 Calm and distraction-free UI
* 📱 Responsive Arabic-first experience
* 🔓 Open-source development
* 🚀 Easy deployment and self-hosting

The goal is simple:

> Make daily Azkar accessible through a modern, lightweight and easy-to-use Arabic interface.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 📿 Azkar

Browse different categories of daily Azkar through a clean Arabic interface.

</td>

<td width="50%">

### 🔢 Smart Counter

Keep track of repetitions with an interactive counter designed specifically for Azkar.

</td>
</tr>

<tr>
<td width="50%">

### 📚 References

Each Zikr can include its source, authenticity information and relevant references.

</td>

<td width="50%">

### 📱 Responsive

Designed to work comfortably across desktop, tablet and mobile devices.

</td>
</tr>

<tr>
<td width="50%">

### 🌐 Arabic First

The entire interface is designed around Arabic content and RTL layouts.

</td>

<td width="50%">

### 🔓 Open Source

The complete project is available publicly for inspection, improvement and contribution.

</td>
</tr>
</table>

---

# 🖥️ Preview

<div align="center">

<img src="./screenshots/home.png" alt="OSRC Zikr Homepage" width="850">

<br><br>

<img src="./screenshots/azkar.png" alt="OSRC Zikr Azkar Page" width="850">

</div>

> Screenshots may be updated as the project evolves.

---

# 🌐 Live Deployment

The production version of **OSRC Zikr** is deployed using **Vercel**.

You can access the hosted version directly without installing anything:

### → [Open OSRC Zikr](YOUR_VERCEL_URL)

Vercel provides a straightforward deployment environment for Next.js applications and automatically handles production builds and deployments.

---

# 🛠️ Tech Stack

| Technology       | Purpose               |
| ---------------- | --------------------- |
| **Next.js**      | Application framework |
| **React**        | User interface        |
| **TypeScript**   | Type safety           |
| **Tailwind CSS** | Styling               |
| **React Icons**  | UI icons              |
| **Vercel**       | Production hosting    |

---

# 🚀 Self-Hosting

You can run OSRC Zikr on your own machine or server.

## Requirements

Make sure you have:

* Node.js
* npm
* Git

Check your installation:

```bash
node --version
npm --version
git --version
```

---

## 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd osrc-zikr
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Run the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 4. Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

That's it.

The current version does **not require environment variables or a database** for the core Azkar experience.

---

# ☁️ Deploying Your Own Instance

OSRC Zikr can be deployed to any platform capable of running a Next.js application.

### Vercel

The simplest option is Vercel.

After connecting the repository, Vercel can automatically detect the Next.js project and handle the deployment.

### VPS / Dedicated Server

You can also run the application on your own Linux server:

```bash
npm install
npm run build
npm start
```

For production deployments, you can place a reverse proxy such as Nginx in front of the Next.js server and connect your own domain.

---

# 💾 Data & Storage

OSRC Zikr is intentionally kept simple.

The current version does **not require a database** for its core functionality.

The Azkar and their associated information are maintained as application content rather than being requested from an external Azkar API every time a user opens the website.

A Zikr can contain information such as:

```ts
{
    text: "...",
    count: 3,
    virtue: "...",
    reference: "..."
}
```

This approach provides several advantages:

* No dependency on an external Azkar API
* Faster access to content
* Easier self-hosting
* Predictable content
* No database setup for the current version

### Future Storage

If future versions introduce features such as:

* User accounts
* Saved Azkar
* Synchronized progress
* Personal preferences
* User-generated content

a database may be introduced.

Possible options include:

* PostgreSQL
* MySQL / MariaDB
* SQLite

The actual storage solution will depend on the features introduced in future versions.

---

# 📚 Religious Sources

Religious content is an important part of this project.

The project attempts to provide references alongside the included Azkar rather than presenting religious information without attribution.

Current sources include:

### Dorar.net

Used primarily for Hadith search, references and verification.

→ https://dorar.net/

### Quran.com

Used for Quranic references.

→ https://quran.com/

Each Zikr may include its relevant source and reference where available.

---

# ⚠️ Disclaimer

OSRC Zikr is a software project and is **not a religious authority**.

The project does not issue Fatwas or religious rulings and should not be considered a replacement for qualified scholars or trusted Islamic institutions.

References are provided to help users locate and review the original material.

If you find an incorrect:

* Zikr wording
* Reference
* Hadith attribution
* Repetition count
* Classification

please open an issue or submit a contribution so it can be reviewed.

---

# 🔐 Privacy

OSRC Zikr is designed with simplicity and privacy in mind.

The core application does not require users to create an account simply to read or use the Azkar.

The current core experience does not require:

* User accounts
* Personal profiles
* A database
* External Azkar APIs

When self-hosting the project, the server administrator is responsible for the infrastructure, server logs and any additional services added to their deployment.

---

# 🤝 Contributing

Contributions are welcome.

You can help improve OSRC Zikr by contributing:

* 🕌 Verified Azkar
* 📚 Correct references
* 🐛 Bug fixes
* 🎨 UI improvements
* ♿ Accessibility improvements
* ⚡ Performance improvements
* 📱 Mobile improvements
* 📖 Documentation
* ✨ New features

### Development

Clone the project:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd osrc-zikr
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create your changes, test them locally and submit them for review.

---

# 📁 Project Structure

A simplified structure of the project:

```text
osrc-zikr/
│
├── public/
│   ├── logo2.png
│   └── screenshots/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── sources/
│   │   ├── azkar/
│   │   └── ...
│   │
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── ZikrItem.tsx
│       ├── ScrollToTop.tsx
│       └── ...
│
├── public/
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── README.md
└── LICENSE
```

---

# 📜 License

OSRC Zikr is released as open-source software under the **MIT License**.

See the [`LICENSE`](./LICENSE) file for the complete license text.

The MIT License allows others to use, modify and distribute the software under its terms while preserving the copyright and license notice.

---

# ❤️ Acknowledgements

This project would not be possible without the open web ecosystem and the resources used to reference its content.

Special thanks to:

* [Dorar.net](https://dorar.net/)
* [Quran.com](https://quran.com/)
* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Vercel](https://vercel.com/)

---

<div align="center">

<img src="./public/logo2.png" alt="OSRC Zikr" width="120">

### OSRC Zikr

**Open Source · Arabic · Simple**

Made with ❤️ for the Arabic-speaking community.

<br>

[⬆ Back to top](#osrc-zikr)

</div>
