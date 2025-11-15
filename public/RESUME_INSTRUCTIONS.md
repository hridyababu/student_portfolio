# How to Add Your Resume

## Step-by-Step Instructions

### Step 1: Prepare Your Resume File
1. Make sure your resume is saved as a PDF file
2. Name it `resume.pdf` (or rename it to `resume.pdf`)

### Step 2: Copy Resume to Public Folder
1. Copy your `resume.pdf` file
2. Paste it into the `public` folder of this project
3. The file path should be: `public/resume.pdf`

### Step 3: Verify the File
- The resume file should be located at: `/home/user/Desktop/cursor_portfolio/public/resume.pdf`
- The file will be accessible at `http://localhost:5173/resume.pdf` when running the dev server

### Step 4: Test the Download
1. Start your development server: `npm run dev`
2. Click the "Download Resume" button in the Hero section
3. The resume should download automatically

## Alternative: Using Google Drive (Optional)

If you prefer to use Google Drive instead:

1. Upload your resume to Google Drive
2. Right-click the file → Share → Get link
3. Set permission to "Anyone with the link can view"
4. Copy the link
5. Update the links in:
   - `src/components/Hero.jsx` - Change `href="/resume.pdf"` to your Drive link
   - `src/components/Contact.jsx` - Change `href="/resume.pdf"` to your Drive link
6. Remove the `download` attribute from the buttons

## File Format Support
- ✅ PDF (recommended) - `resume.pdf`
- ✅ DOCX - `resume.docx` (less recommended for web)
- ✅ DOC - `resume.doc` (less recommended for web)

**Note:** PDF is the best format for resumes as it maintains formatting across all devices and browsers.

## Customizing the Download Filename

If you want to change the downloaded filename, edit the `download` attribute in:
- `src/components/Hero.jsx` - Line 24
- `src/components/Contact.jsx` - Line 86

Example: `download="HRIDYA_BABU_Resume.pdf"`

