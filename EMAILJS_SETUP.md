# EmailJS Setup Instructions

## Why EmailJS?
EmailJS allows you to send emails directly from your frontend React app without needing a backend server. It's free for up to 200 emails per month.

## Step-by-Step Setup

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free)
3. Create an account using your email (hridyababu01@gmail.com)

### Step 2: Add Email Service
1. After logging in, go to **Email Services** in the dashboard
2. Click **"Add New Service"**
3. Choose **Gmail** (or any email provider you use)
4. Click **"Connect Account"** and authorize EmailJS to send emails from your Gmail
5. Give it a name (e.g., "Portfolio Contact")
6. Click **"Create Service"**
7. **Copy the Service ID** - you'll need this!

### Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **"Create New Template"**
3. Use this template:

**Template Name:** Portfolio Contact Form

**Subject:** New Message from Portfolio: {{subject}}

**Content:**
```
You have received a new message from your portfolio website.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click **"Save"**
5. **Copy the Template ID** - you'll need this!

### Step 4: Get Your Public Key
1. Go to **Account** → **General** in the dashboard
2. Find **"Public Key"** section
3. **Copy the Public Key** - you'll need this!

### Step 5: Add Credentials to Your Code
1. Open `src/components/Contact.jsx`
2. Find these lines (around line 30-32):
   ```javascript
   const SERVICE_ID = 'YOUR_SERVICE_ID'
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
3. Replace with your actual values:
   ```javascript
   const SERVICE_ID = 'service_xxxxxxx'  // Your Service ID from Step 2
   const TEMPLATE_ID = 'template_xxxxxxx'  // Your Template ID from Step 3
   const PUBLIC_KEY = 'xxxxxxxxxxxxx'  // Your Public Key from Step 4
   ```

### Step 6: Test It!
1. Save the file
2. Restart your dev server: `npm run dev`
3. Fill out the contact form
4. Click "Send Message"
5. Check your email (hridyababu01@gmail.com) - you should receive the message!

## Template Variables Used
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (hardcoded in the component)

## Security Note
The Public Key is safe to expose in frontend code. EmailJS uses it to identify your account, but it doesn't give full access. However, for production, consider:
- Using environment variables (create `.env` file)
- Setting up rate limiting in EmailJS dashboard
- Using EmailJS's built-in spam protection

## Troubleshooting

**"Email service not configured" error:**
- Make sure you replaced all three values (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)
- Check for typos in the IDs

**"Failed to send message" error:**
- Check your EmailJS dashboard for error logs
- Verify your email service is connected
- Make sure the template variables match ({{from_name}}, etc.)

**Not receiving emails:**
- Check spam folder
- Verify your email service is properly connected in EmailJS
- Check EmailJS dashboard for delivery status

## Free Tier Limits
- 200 emails per month (free)
- Perfect for a portfolio website!

## Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

