# Student Portfolio Website

A modern, responsive portfolio website built with React and Bootstrap for job applications. This portfolio showcases your skills, projects, education, and provides easy access to your resume and portfolio files via Google Drive links.

## Features

- 🎨 **Modern UI/UX** - Clean and professional design using Bootstrap 5
- 📱 **Fully Responsive** - Works perfectly on all devices (desktop, tablet, mobile)
- 🚀 **Fast Performance** - Built with Vite for optimal loading speeds
- 📄 **Resume Download** - Direct download functionality for your resume PDF
- 💼 **Project Showcase** - Display your projects with GitHub and demo links
- 🎓 **Education Section** - Highlight your academic achievements
- 📧 **Contact Form** - Easy way for employers to reach out
- 🔗 **Social Links** - Connect your LinkedIn, GitHub, and other profiles

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Me** - Personal information and goals
3. **Skills** - Technical skills organized by category
4. **Projects** - Portfolio of your work with links
5. **Education** - Academic background and achievements
6. **Contact** - Contact form and social media links
7. **Footer** - Additional links and information

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd cursor_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Adding Your Resume

### Quick Steps to Upload Resume:

1. **Prepare your resume:**
   - Save your resume as a PDF file
   - Name it `resume.pdf`

2. **Copy to public folder:**
   ```bash
   # Copy your resume file to the public folder
   cp /path/to/your/resume.pdf public/resume.pdf
   ```
   Or simply drag and drop your `resume.pdf` file into the `public` folder.

3. **Verify it works:**
   - Start the dev server: `npm run dev`
   - Click "Download Resume" button
   - The resume should download automatically

**Note:** The resume file should be located at `public/resume.pdf`. When deployed, it will be accessible at `yoursite.com/resume.pdf`.

For detailed instructions, see `public/RESUME_INSTRUCTIONS.md`

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change name, title, and description
   - Update resume and portfolio Drive links

2. **Resume** (`public/resume.pdf`):
   - Place your resume PDF file in the `public` folder
   - Name it `resume.pdf`
   - The download buttons will automatically work

3. **About Section** (`src/components/About.jsx`):
   - Modify the "About Me" content
   - Update your personal story

4. **Skills** (`src/components/Skills.jsx`):
   - Add or remove skills
   - Organize skills by category

5. **Projects** (`src/components/Projects.jsx`):
   - Replace with your actual projects
   - Update GitHub and demo links
   - Add project images

6. **Education** (`src/components/Education.jsx`):
   - Update your educational background
   - Add achievements and GPA

7. **Contact** (`src/components/Contact.jsx`):
   - Update email, phone, and location
   - Add your LinkedIn and GitHub profiles
   - Update Drive links for resume and portfolio

### Google Drive Links (Alternative)

If you prefer using Google Drive instead of hosting the resume file:

1. Upload your resume and portfolio to Google Drive
2. Right-click the file → Share → Get link
3. Make sure the link is set to "Anyone with the link can view"
4. Replace the resume links in:
   - `Hero.jsx` - Change `href="/resume.pdf"` to your Drive link
   - `Contact.jsx` - Change `href="/resume.pdf"` to your Drive link
   - Remove the `download` attribute from buttons
5. Update portfolio links in `Projects.jsx` and `Contact.jsx`

### Styling

- Main styles: `src/index.css`
- Bootstrap customization: Modify CSS variables in `:root` selector
- Component-specific styles: Add inline styles or create separate CSS files

## Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## Technologies Used

- **React 18** - UI library
- **Bootstrap 5** - CSS framework
- **React Bootstrap** - Bootstrap components for React
- **React Icons** - Icon library
- **Vite** - Build tool and dev server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

For questions or suggestions, feel free to reach out!

---

**Note:** Remember to replace all placeholder content (names, links, projects, etc.) with your actual information before deploying!

