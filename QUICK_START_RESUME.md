# Quick Start: Adding Your Resume

## ✅ Simple 3-Step Process

### Step 1: Get Your Resume Ready
- Make sure your resume is saved as a **PDF file**
- If it's a Word document (.docx), convert it to PDF:
  - Open in Word/Google Docs
  - File → Save As → PDF

### Step 2: Copy Resume to Project
**Option A: Using File Manager (Easiest)**
1. Open the `public` folder in your file manager
2. Drag and drop your resume PDF into the `public` folder
3. Rename it to `resume.pdf` if it has a different name

**Option B: Using Terminal**
```bash
# Navigate to your project
cd /home/user/Desktop/cursor_portfolio

# Copy your resume (replace /path/to/your/resume.pdf with actual path)
cp /path/to/your/resume.pdf public/resume.pdf
```

### Step 3: Test It
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser to `http://localhost:5173`
3. Click the **"Download Resume"** button
4. Your resume should download automatically! ✅

## 📁 File Location
Your resume should be at:
```
/home/user/Desktop/cursor_portfolio/public/resume.pdf
```

## 🎯 That's It!
The download buttons are already configured. Once you place `resume.pdf` in the `public` folder, everything will work automatically.

## 🔄 Updating Your Resume
Just replace the `resume.pdf` file in the `public` folder with your new version. No code changes needed!

## ❓ Troubleshooting

**Resume doesn't download?**
- Make sure the file is named exactly `resume.pdf` (lowercase)
- Make sure it's in the `public` folder, not `src` folder
- Restart the dev server after adding the file

**File not found error?**
- Check the file path: `public/resume.pdf`
- Verify the file exists using: `ls public/resume.pdf`

