# GBELS School ERP Portal

Complete modern School Management ERP Web Portal for:

- **School:** GBELS Yar Muhammad Mangrio (Semiscode: 405050083)
- **Location:** UC Sindhri, Taluka Sindhri, District Mirpurkhas, Sindh, Pakistan
- **Established:** 1950

## Stack

- **Frontend:** React + Vite + Tailwind CSS
- **UX:** Framer Motion + Lucide Icons
- **Charts:** Chart.js + react-chartjs-2
- **i18n:** i18next (English, Urdu, Sindhi)
- **Backend:** Firebase Auth + Firestore + Cloud Functions
- **PWA:** Manifest + service worker

## ERP Features Included

- SPA sidebar + top navbar + dark/light mode + responsive layout
- School core modules (Home, About/Mission/Vision, Teachers, Students, Classes, Timetable, Results, Gallery, Contact)
- School Statistics dashboard with charts and budget analytics
- Top Achievers page (year/class filters, ranking cards, search)
- ERP modules page:
  - Admission tracking
  - Attendance overview
  - Exam/roll-slip status
  - Assignments, notices, messaging
  - Certificate generation flow
  - Academic calendar
  - Parent portal view
- Login roles: Admin, Teacher, Student, Parent
- Loading spinner + 404 page + SEO meta tags + PWA install support

## Folder Structure

```txt
school/
  public/
    favicon.svg
    manifest.webmanifest
    sw.js
  src/
    App.jsx
    i18n.js
    main.jsx
    index.css
    components/
      StatsCharts.jsx
    services/
      firebase.js
      erpApi.js
  functions/
    index.js
    package.json
  firestore.rules
  firestore.indexes.json
  firebase.json
  .env.example
  package.json
  vite.config.js
```

## Setup

1. Install:
   ```bash
   npm install
   ```
2. Create env:
   ```powershell
   Copy-Item .env.example .env
   ```
3. Add Firebase web config values in `.env`.
4. Run:
   ```bash
   npm run dev
   ```
5. Build:
   ```bash
   npm run build
   ```

## Firebase Database Setup

1. Create Firebase project.
2. Enable Authentication providers.
3. Enable Firestore.
4. Deploy rules/indexes:
   ```bash
   firebase deploy --only firestore
   ```
5. (Optional) Deploy cloud function:
   ```bash
   cd functions
   npm install
   cd ..
   firebase deploy --only functions
   ```

### Suggested Firestore Collections

- `users` (role, name, email)
- `students` (name, className, rollNumber, fatherName)
- `results` (year, className, position, percentage)
- `attendance` (className, month, present, absent)
- `admissions` (name, className, status, createdAt)
- `notices` (title, body, createdAt)

## Deployment (GitHub + Vercel)

### Push to GitHub

```bash
git init
git add .
git commit -m "Initial GBELS ERP portal"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

### Deploy to Vercel

1. Import GitHub repo into Vercel.
2. Framework: **Vite**
3. Add `.env` values in Vercel environment variables.
4. Deploy.

### Vercel SPA Rewrite

Add `vercel.json` if needed:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```
