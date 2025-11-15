# Formspree Setup (Easiest Option)

## Quick Setup (2 minutes)

### Option 1: Use Mailto (Works Immediately - No Setup!)
The form is already configured to use mailto as a fallback. It will open the user's email client with a pre-filled message. **This works right now without any setup!**

### Option 2: Use Formspree (Recommended for Better UX)

1. **Go to Formspree:**
   - Visit [https://formspree.io/](https://formspree.io/)
   - Click "Sign Up" (it's free)

2. **Create a Form:**
   - After signing up, click "New Form"
   - Give it a name: "Portfolio Contact Form"
   - Click "Create"

3. **Get Your Form ID:**
   - You'll see a form ID like: `xrgkqjpn` or `mknvqjpn`
   - Copy this ID

4. **Update Your Code:**
   - Open `src/components/Contact.jsx`
   - Find line 40: `const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'`
   - Replace `'YOUR_FORM_ID'` with your actual form ID:
     ```javascript
     const FORMSPREE_FORM_ID = 'xrgkqjpn'  // Your actual form ID
     ```

5. **Configure Email:**
   - In Formspree dashboard, go to Settings
   - Add your email: `hridyababu01@gmail.com`
   - Save settings

6. **Test It:**
   - Fill out the form on your website
   - Submit it
   - Check your email - you should receive the message!

## Current Status

Right now, the form uses **mailto fallback** which means:
- When someone submits the form, it opens their email client
- The email is pre-filled with the message
- They just need to click "Send"

This works immediately, but Formspree provides a better user experience (no email client needed).

## Free Tier Limits
- Formspree Free: 50 submissions per month
- Perfect for a portfolio website!

## Need Help?
- Formspree Docs: https://help.formspree.io/
- Support: support@formspree.io

