# Skill Sphere

**Live Site:** [https://skill-sphere-mu.vercel.app](https://skill-sphere-mu.vercel.app)

Skill Sphere is an online course browsing platform where users can explore courses, view details, and manage their profile.

## Features

- **Hero Slider** — animated banner on the homepage showcasing the platform
- **Course Browsing** — view all available courses with search/filter by title
- **Popular & Trending Sections** — curated course lists on the homepage
- **Course Detail Pages** — individual pages for each course
- **User Authentication** — register and log in with email/password
- **Google OAuth** — sign in with Google
- **Profile Management** — view and update your name and profile photo
- **Toast Notifications** — feedback on actions like login, register, and profile updates
- **Animated Course Cards** — spring-physics hover animation on course cards
- **Responsive Design** — works across mobile and desktop

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling
- [DaisyUI v5](https://daisyui.com/) — component library built on Tailwind
- [Better Auth](https://better-auth.com/) — authentication (email/password + Google OAuth)
- [MongoDB](https://www.mongodb.com/) — database via MongoDB Atlas
- [React Hook Form](https://react-hook-form.com/) — form handling
- [React Hot Toast](https://react-hot-toast.com/) — toast notifications
- [React Spring](https://www.react-spring.dev/) — spring-physics animations
- [Swiper](https://swiperjs.com/) — hero slider

## Getting Started

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
