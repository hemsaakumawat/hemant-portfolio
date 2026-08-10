# Hemant Kumawat | Developer Portfolio

Personal developer portfolio for **Hemant Kumawat** (Student / Aspiring Full-Stack Developer), built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, **Lucide React**, **React Router**, and **EmailJS**.

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop)

---

## 🌟 Key Features

- ⚡ **Lightning Fast**: Built on Vite with Tailwind CSS v4 & code-split asset loading.
- 🎨 **Modern Glassmorphic UI**: High-end dark theme with smooth gradient accents and glowing background Orbs.
- 📱 **Fully Responsive**: Mobile-first architecture with animated hamburger drawer menu.
- ✨ **Framer Motion Animations**: Subtle micro-interactions, scroll spy, tab transitions, and project detail modals.
- 🛠️ **Categorized Tech Stack Showcase**: Filterable skill grid with proficiency level indicators.
- 💼 **Interactive Experience Timeline**: Work history & education background switcher.
- 🚀 **Project Showcase & Modal**: View live demo & source links with full modal preview for project features.
- ✉️ **EmailJS Contact Form**: Client-side validation, loading states, success toasts, and error handling.
- 🔍 **SEO & OpenGraph Ready**: Optimized meta tags, Twitter card tags, semantic HTML5, `robots.txt`, and `sitemap.xml`.
- ☁️ **Vercel Ready**: `vercel.json` rewrite configuration for single-page routing.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Contact Form**: EmailJS (`@emailjs/browser`)

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have Node.js (v18.x or later) installed on your machine.

### 2. Installation

Clone the repository and install dependencies:

```bash
# Navigate to project directory
cd MY-PORTFOILYO

# Install packages
npm install
```

### 3. Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 📧 EmailJS Setup Guide

To receive contact form submissions directly in your email inbox:

1. **Sign Up / Log In to EmailJS**:
   Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account.

2. **Add an Email Service**:
   - Go to **Email Services** -> **Add New Service**.
   - Select your provider (e.g., Gmail, Outlook) and connect your account.
   - Copy your **Service ID** (e.g., `service_abc123`).

3. **Create an Email Template**:
   - Go to **Email Templates** -> **Create New Template**.
   - Map your template fields as follows:
     - `{{from_name}}` -> Sender's Name
     - `{{from_email}}` -> Sender's Email
     - `{{subject}}` -> Subject line
     - `{{message}}` -> Message content
   - Save the template and copy your **Template ID** (e.g., `template_xyz789`).

4. **Get Your Public Key**:
   - Go to **Account** -> **API Keys**.
   - Copy your **Public Key** (e.g., `pk_live_123456`).

5. **Configure Environment Variables**:
   Create a `.env` file in the root directory (or edit existing `.env`) with your keys:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

*(Note: If environment variables are not set, the form runs in Preview Mode with an informative notification banner!)*

---

## 📦 Production Build

To test or build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Deploying to Vercel

1. Push your code to a **GitHub** repository.
2. Log into [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Under **Environment Variables**, add:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Click **Deploy**. Vercel will automatically build and deploy your portfolio!

---

## 📄 License

This project is licensed under the MIT License.
