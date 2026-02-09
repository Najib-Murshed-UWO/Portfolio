<div align="center">
  <br />
    <a href="https://www.youtube.com/watch?v=E-fdPfRxkzQ" target="_blank">
      <img src="public/images/readme.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </div>

  <h3 align="center">Interactive 3D Portfolio Website</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 📌 [Project Overview](#project-overview)
2. 🤖 [Introduction](#introduction)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🔋 [Features](#features)
5. 🤸 [Quick Start](#quick-start)
6. 🔗 [Assets & Snippets](#links)
7. 🚀 [More](#more)

---

## <a name="project-overview">📌 Project Overview</a>

### Project Heading
**Md Najib Murshed — Full-Stack Developer Portfolio**

### Short Description
A modern, responsive portfolio website built with 3D visuals and smooth animations. It showcases work, experience, and skills with an interactive hero section, project gallery, timeline experience, tech stack, and contact form. Includes light/dark theme, GSAP scroll animations, and optional 3D scenes (React Three Fiber) for a standout developer portfolio.

### Technologies Used

| Category | Technologies |
|----------|--------------|
| **Framework** | React 19 |
| **Build tool** | Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **3D & animation** | Three.js, React Three Fiber, Drei |
| **Animation** | GSAP, Framer Motion |
| **Forms** | EmailJS (contact form) |
| **Other** | React Responsive |

---

## 📄 Detailed Description

This project is a **personal portfolio website** for **Md Najib Murshed**, built as a single-page application (SPA) that presents professional experience, projects, skills, and contact information in a modern, accessible, and visually engaging way.

### Purpose

The site serves as a central hub for recruiters, clients, and collaborators to learn about the developer’s background, view featured work (including full-stack banking, robotics, risk analytics, and this portfolio itself), and get in touch via a contact form. It is designed to work well on desktop, tablet, and mobile, with optional light/dark themes and smooth animations to improve readability and engagement.

### Architecture & Structure

- **Framework:** React 19 with functional components and hooks.
- **Build & dev:** Vite 6 for fast development and optimized production builds.
- **Routing:** Single-page layout with anchor-based navigation (e.g. `#work`, `#experience`, `#skills`, `#contact`). Navbar links scroll to the corresponding sections with a small upward offset for better visibility.
- **State:** React context for theme (light/dark); local component state for modals, carousels, and form data. No global state library.
- **Data:** Content is centralized in `src/constants/index.js` (nav links, hero words, counter items, experience cards, tech stack sections, projects, social links, etc.), making it easy to update copy and assets without touching layout code.

### Sections & Features

1. **Navbar**  
   Fixed top bar with logo (name), links (Work, Experience, Skills), theme toggle (sun/moon), and “Contact me” button. Background and border adapt when scrolled (e.g. solid background when scrolled). All nav links use smooth scroll with a fixed offset so sections sit slightly below the top of the viewport.

2. **Hero**  
   Main landing area with:
   - Animated headline (“Shaping [Ideas / Concepts / Designs / Code] into Real Projects that Deliver Results”) and supporting copy.
   - **HeroExperience:** A circular carousel of personal images (e.g. Grad, Grad-Wife, Drumheller, Ottawa, Maldives, Waterton, Western-Fall, Banff) implemented with Framer Motion for smooth orbital motion.
   - “See my work” CTA that scrolls to the counter/projects area.
   - Styling aligned with the global theme (light/dark).

3. **Animated counter / stats**  
   Grid of cards showing highlights (e.g. years of experience, “Full-Stack Software Developer”, “Salesforce Certified”, “Robotics Development Experience”). Some cards show animated numbers (GSAP); others are text-only. Cards use the same bordered style as the rest of the site and support a subtle hover animation.

4. **Projects (Work)**  
   Section titled “My Selected Projects” listing featured work. Each row shows project title, tags, and a “Read More” button. Hovering over the row (excluding “Read More”) shows a floating preview image that follows the cursor; hovering over “Read More” hides the preview. Clicking “Read More” opens a **modal** with:
   - **Carousel** of images (and optionally one video per project, e.g. Smart Plant Care). Navigation arrows and dot indicators; Framer Motion for slide transitions.
   - Project title, description, sub-description, and technology logos (only tags with non-empty image paths are shown).
   - “View Project” link (opens in a new tab).  
   Projects such as **FinEdge**, **Smart Plant Care Robot**, **RiskIntellect**, and **Immersive Developer Portfolio** each have their own image sets and tags defined in constants.

5. **Feature cards**  
   Grid of value propositions (e.g. Quality Focus, Reliable Communication, On-Time Delivery) with icons and short descriptions.

6. **Experience**  
   Timeline-style section (“Professional Work Experience”) with cards for each role. Each card includes company logo, title, date range, and responsibilities. A vertical gradient line connects the entries; layout and line positioning are adjusted for smaller screens so the timeline remains visible.

7. **Tech stack (Skills)**  
   “How I Can Contribute & My Key Skills” with grouped technologies: Frontend Development, Backend Development, Infrastructure, and Robotics. Each item is a card with an icon (from `public/images` or `public/assets/logos`) and name. Cards use a shared hover animation and consistent border/background styling.

8. **Contact**  
   “Get in Touch” section with a form (name, email, message) wired to **EmailJS** for sending emails without a custom backend. Side content can include a 3D or visual element (e.g. ContactExperience). Submit button uses the same theme-aware styling as the navbar “Contact me” button.

9. **Footer**  
   Footer with terms, social links (from constants), and copyright. Styling follows the active theme.

### Theming

- **Light / dark mode** is controlled by `ThemeContext`. The choice is stored in `localStorage` under `portfolio-theme` and applied as a class and `data-theme` attribute on `<html>`.
- An inline script in `index.html` runs before React to set the initial theme from `localStorage` or `prefers-color-scheme`, reducing a flash of the wrong theme.
- CSS variables in `src/index.css` define colors for both themes (e.g. page background, text, nav bar, buttons, cards, timeline). Tailwind’s theme is extended so utility classes (e.g. `text-white-50`, `bg-black-100`) resolve from these variables, keeping the whole UI theme-consistent.
- Buttons (“Contact me”, “See my work”, “Send message”) use the same theme variables so they stay visible and consistent in both modes; dark mode gets explicit overrides where needed so contrast is sufficient.

### Technical Highlights

- **Animations:** GSAP (with ScrollTrigger) for hero text and counter entrance; Framer Motion for HeroExperience carousel, project modals, and transitions.
- **Accessibility:** Theme toggle and carousel controls use ARIA labels; form labels and semantic HTML are used where applicable.
- **Performance:** Vite code-splitting and optimized builds; images and assets served from `public/`; optional 3D (React Three Fiber/Drei) can be enabled for hero or contact if desired.
- **Maintainability:** Section and component structure is clear; constants file keeps content separate from layout; Tailwind and CSS variables keep styling consistent and easy to adjust.

### Summary

In short, this repo is a **production-oriented portfolio SPA** for Md Najib Murshed: responsive, themeable, and focused on showcasing projects (with image/video carousels and external links), experience, skills, and contact. It uses React 19, Vite, Tailwind CSS 4, GSAP, Framer Motion, and EmailJS, with optional Three.js-based 3D, and is structured so content can be updated via constants and theme via CSS variables and context.

---

## ⚠️ Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://www.youtube.com/watch?v=E-fdPfRxkzQ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

The 3D Portfolio project is a highly engaging personal website that features animated 3D scenes, smooth camera transitions, interactive model showcases, and responsive design. It’s ideal for developers, designers, or freelancers looking to stand out in the digital crowd.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **50k+** members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Three.js
- React Three Fiber
- Drei
- GSAP
- Tailwind CSS
- Vite
- React 19

## <a name="features">🔋 Features</a>

### Features of the 3D Portfolio Project

👉 Animated 3D models and reveal animations

👉 Realistic lighting and shadows

👉 GSAP-powered scroll interactions

👉 Responsive design with Tailwind CSS and Flexbox/Grid

👉 Micro Interactions

👉 Multi-section layout (About, Projects, Contact)

👉 Mobile optimized 3D experience

and many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/3d-portfolio.git
cd 3d-portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_APP_EMAILJS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

Replace the placeholder values with your actual **[EmailJS](https://www.emailjs.com/)** credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173/) in your browser to view the project.


## <a name="links">🔗 Assets and Snippets</a>

Assets and snippets used in the project can be found in the **[video kit](https://jsm.dev/pfolio25-kit)**.

<a href="https://jsm.dev/pfolio25-kit" target="_blank">
  <img src="public/images/readme-video-kit.png" alt="Video Kit Banner">
</a>


## <a name="more">🚀 More</a>

**Advance your skills with JSM Pro Courses**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with
detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://beta.jsmastery.pro/" target="_blank">
  <img src="public/images/readme-bottom.png" alt="Project Banner">
</a>
