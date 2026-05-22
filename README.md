# 🏫 Vidyalaya Attendance System

A full-stack student attendance management system for schools (Balvatika to Class X), built with **React + Vite** frontend and **Supabase** (PostgreSQL) backend. Deploy to Vercel or Netlify with a custom domain in minutes.

---

## ✨ Features

- **Dashboard** — Live today's attendance overview, class-wise breakdown
- **Take Attendance** — Mark Present / Absent / Late per class, save to DB
- **Class Teachers** — Assign/edit/remove teachers per class
- **Student Directory** — Add, search, filter, remove students
- **Reports** — Monthly attendance analytics with CSV export
- **Persistent storage** — All data saved in Supabase PostgreSQL

---

## 🚀 Quick Start

### 1. Clone & install

```bash
git clone https://github.com/YOUR_USERNAME/vidyalaya-attendance.git
cd vidyalaya-attendance
npm install
```

### 2. Set up Supabase (free)

1. Go to [supabase.com](https://supabase.com) → **New Project**
2. Copy your **Project URL** and **Anon Key** from:
   `Settings → API → Project URL / Project API Keys`
3. Open the **SQL Editor** in Supabase and paste the contents of `supabase/schema.sql` → Run
4. This creates all tables and seeds sample data.

### 3. Configure environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run locally

```bash
npm run dev
# → http://localhost:3000
```

---

## 🌐 Deploy to Vercel (recommended)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/vidyalaya-attendance.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repository
3. Framework: **Vite** (auto-detected)
4. Under **Environment Variables**, add:
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase anon key
5. Click **Deploy** → your app is live at `your-app.vercel.app`

### Step 3 — Add Custom Domain
1. In Vercel → your project → **Settings → Domains**
2. Click **Add Domain** → enter `attendance.yourschool.in`
3. Vercel shows you the DNS record to add:
   - Type: `CNAME`
   - Name: `attendance`
   - Value: `cname.vercel-dns.com`
4. Log in to your domain registrar (GoDaddy / Namecheap / BigRock)
5. Go to **DNS Settings** → add the CNAME record
6. Wait 15 min–24 hours → your app is live at your domain ✅

---

## 🌐 Deploy to Netlify (alternative)

1. Go to [netlify.com](https://netlify.com) → **Add New Site → Import from Git**
2. Connect GitHub → select your repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Under **Environment Variables**, add your Supabase credentials
6. Deploy → Add custom domain from **Site Settings → Domain Management**

---

## 🗄️ Database Schema

```
teachers    — id, name, class (unique), subject, phone, email
students    — id, first_name, last_name, class, roll_number, gender, phone...
attendance  — id, student_id, class, date, status (P/A/L), remark
```

All tables have Row Level Security enabled. For production, add Supabase Auth and replace the open policies with user-based ones.

---

## 📁 Project Structure

```
src/
  components/
    Layout.jsx       — Sidebar + topbar wrapper
  pages/
    Dashboard.jsx    — Overview stats + class table
    Attendance.jsx   — Daily attendance marking
    Teachers.jsx     — Teacher assignment UI
    Students.jsx     — Student directory
    Reports.jsx      — Monthly report + CSV export
  hooks/
    useData.js       — All Supabase data hooks
  lib/
    supabase.js      — Supabase client + CLASSES constant
  main.jsx           — React entry point
  index.css          — Global design system styles
supabase/
  schema.sql         — Database tables + seed data
```

---

## 🔒 Adding Login (optional)

Supabase Auth supports email/password, OTP, and Google login.

```js
// In src/lib/supabase.js — sign in
const { error } = await supabase.auth.signInWithPassword({ email, password })

// Get current user
const { data: { user } } = await supabase.auth.getUser()
```

Then in `supabase/schema.sql`, replace the open RLS policies with:
```sql
create policy "Authenticated only" on attendance
  for all using (auth.role() = 'authenticated');
```

---

## 💰 Cost Estimate

| Service | Free Tier | Paid |
|---------|-----------|------|
| Supabase | 500MB DB, 50k rows | $25/mo |
| Vercel | 100GB bandwidth | $20/mo |
| Domain (.in) | — | ~₹800/year |
| **Total** | **₹0/month** | — |

---

Built with ❤️ for Indian schools
