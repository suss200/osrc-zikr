<div align="center">

<img src="./public/logo2.png" alt="OSRC Zikr" width="150">

# OSRC Zikr

**An open-source Arabic platform for daily Islamic Azkar.**

A simple, modern and privacy-focused experience for reading and keeping track of daily Azkar.

<br>

[Live Website](#live-website) · [Self-Hosting](#self-hosting) · [Sources](#sources)
<<<<<<< HEAD

<br>

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square\&logo=next.js\&logoColor=white)
![React](https://img.shields.io/badge/React-19-149eca?style=flat-square\&logo=react\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square\&logo=typescript\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square\&logo=tailwindcss\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-6EE7B7?style=flat-square)
=======
>>>>>>> 6e3a96d (Edit README, add LICENSE, fix bug)

</div>

---

## Overview

OSRC Zikr is an open-source Arabic web application built to make daily Azkar accessible through a clean and distraction-free interface.

The project is designed around a few simple principles:

* Arabic-first and RTL interface
* Clear references for religious content
* Simple repetition tracking
* Minimal and focused UI
* No database required for the core experience
* Easy deployment and self-hosting
* Open-source codebase

The goal is not to build a complicated platform, but to provide a reliable and comfortable place for daily remembrance.

---

## Preview

<div align="center">

<<<<<<< HEAD
<img src="./screenshots/home.png" alt="OSRC Zikr homepage" width="850">

<br><br>

<img src="./screenshots/azkar.png" alt="OSRC Zikr Azkar page" width="850">
=======
<img src="./screenshots/image.png" alt="OSRC Zikr screenshot 1" width="850">

<br><br>

<img src="./screenshots/image2.png" alt="OSRC Zikr screenshot 2" width="850">

<br><br>

<img src="./screenshots/image3.png" alt="OSRC Zikr screenshot 3" width="850">

</div>

---

## Features

### Azkar

Browse daily Azkar through categorized Arabic content with a clean reading experience.

### Repetition Tracking

Each Zikr can have its own repetition count, allowing users to keep track while reading.

### References

Azkar can include their relevant source, authenticity information and reference.

### Arabic-first Design

The interface is built specifically around Arabic content and RTL layouts rather than treating Arabic as an afterthought.

### Responsive

Designed to work across desktop, tablet and mobile screens.

### Lightweight

The core experience does not depend on a database or an external Azkar API.

---

## Technologies

<div align="center">

<table>
<tr>
<td align="center" width="180">

### ⚡ Next.js

**v16**

Application Framework

</td>

<td align="center" width="180">

### ⚛️ React

**v19**

UI Library

</td>

<td align="center" width="180">

### 🔷 TypeScript

**v5**

Type Safety

</td>
</tr>

<tr>
<td align="center" width="180">

### 🎨 Tailwind CSS

**v4**

Styling

</td>

<td align="center" width="180">

### 🧩 React Icons

**Latest**

Icons

</td>

<td align="center" width="180">

### ▲ Vercel

**Cloud**

Hosting

</td>
</tr>
</table>
>>>>>>> 6e3a96d (Edit README, add LICENSE, fix bug)

</div>

---

<<<<<<< HEAD
## Features

### Azkar

Browse daily Azkar through categorized Arabic content with a clean reading experience.

### Repetition Tracking

Each Zikr can have its own repetition count, allowing users to keep track while reading.

### References

Azkar can include their relevant source, authenticity information and reference.

### Arabic-first Design

The interface is built specifically around Arabic content and RTL layouts rather than treating Arabic as an afterthought.

### Responsive

Designed to work across desktop, tablet and mobile screens.

### Lightweight

The core experience does not depend on a database or an external Azkar API.

---

## Live Website

The production version of OSRC Zikr is deployed on **Vercel**.

You can use the hosted version directly without installing or configuring anything.

**[Open OSRC Zikr](YOUR_VERCEL_URL)**

---

## Tech Stack

| Technology   | Role                  |
| ------------ | --------------------- |
| Next.js      | Application framework |
| React        | UI                    |
| TypeScript   | Type safety           |
| Tailwind CSS | Styling               |
| React Icons  | Icons                 |
| Vercel       | Hosting               |

---

## Self-Hosting

OSRC Zikr can be run locally or deployed to your own server.

=======
## Live Website

The production version of OSRC Zikr is deployed on **Vercel**.

You can use the hosted version directly without installing or configuring anything.

**[Open OSRC Zikr](YOUR_VERCEL_URL)**

---

## Self-Hosting

OSRC Zikr can be run locally or deployed to your own server.

>>>>>>> 6e3a96d (Edit README, add LICENSE, fix bug)
### Requirements

* Node.js
* npm
* Git

Check your installed versions:

```bash
node --version
npm --version
<<<<<<< HEAD
git --version
```

### Installation

Clone the repository:

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

The application will be available at:

```text
http://localhost:3000
```

### Production

Create a production build:

```bash
npm run build
```

Start the application:

```bash
npm start
```

The current version does not require environment variables or a database for the core Azkar experience.

---

## Deployment

OSRC Zikr can be deployed anywhere that supports Next.js.

### Vercel

Vercel is the recommended option for a simple deployment.

The project can be deployed directly from the repository, with Next.js automatically detected as the framework.

### VPS / Dedicated Server

You can also run OSRC Zikr on your own Linux server.

A basic production setup is:

```text
Internet
   │
   ▼
Nginx / Reverse Proxy
   │
   ▼
Next.js
   │
   ├── Application
   └── Static Assets
```

After building the project:

```bash
npm run build
npm start
```

You can then use a reverse proxy and connect your own domain.

---

## Data & Storage

The current version intentionally keeps the data layer simple.

### Azkar Content

Azkar are maintained as application content rather than being requested from an external API whenever a page loads.

A typical entry contains information such as:

```ts
{
    text: "...",
    count: 3,
    virtue: "...",
    reference: "..."
}
```

This means the core application does not need a database to provide its main functionality.

### User Data

The current version does not require user accounts or persistent user data.

If future versions introduce features such as accounts, synchronized progress, favorites or personal settings, a database can be added separately.

Possible options include:

* PostgreSQL
* MySQL / MariaDB
* SQLite

---

## Privacy

Privacy is one of the project's design goals.

The core experience does not require users to:

* Create an account
* Provide personal information
* Connect an external Islamic API
* Use a database

When self-hosting, the server administrator is responsible for their own infrastructure, server logs and any additional services they choose to add.

---

## Sources

Religious content should be traceable to its underlying sources.

OSRC Zikr includes references where available and provides links to the resources used when preparing the content.

### Dorar.net

Used primarily for Hadith search, references and verification.

**https://dorar.net/**

### Quran.com

Used for Quranic references.

**https://quran.com/**

The project does not intend to replace primary sources or qualified scholars.

---

## Religious Content Disclaimer

OSRC Zikr is a software project, not a religious authority.

It does not issue Fatwas or religious rulings and should not be considered a replacement for qualified scholars or trusted Islamic institutions.

References are provided so users can review the underlying material themselves.

If a Zikr contains an incorrect wording, reference, attribution or count, the relevant source should be checked before relying on it.

---

## License

OSRC Zikr is released under the **MIT License**.

See [`LICENSE`](./LICENSE) for the complete license text.

---

<div align="center">

<img src="./public/logo2.png" alt="OSRC Zikr" width="90">

### OSRC Zikr

Open source · Arabic · Simple

Built with Next.js for the Arabic-speaking community.

<br>

[Back to top](#osrc-zikr)

</div>
=======
git --version
>>>>>>> 6e3a96d (Edit README, add LICENSE, fix bug)
