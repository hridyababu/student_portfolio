# How to Get Your Formspree Form ID

## Step-by-Step Instructions

### Step 1: Go to Formspree
1. Open your browser
2. Go to: **https://formspree.io/**
3. Click **"Get Started"** or **"Sign Up"** button

### Step 2: Create Account
1. Sign up with your email: `hridyababu01@gmail.com`
2. Create a password
3. Click **"Sign Up"**
4. Check your email and verify your account

### Step 3: Create a Form
1. After logging in, you'll see a dashboard
2. Click the **"New Form"** or **"Create Form"** button (usually big and prominent)
3. Give your form a name: `Portfolio Contact` or `Contact Form`
4. Click **"Create"** or **"Submit"**

### Step 4: Find Your Form ID
After creating the form, you'll see a page with your form details. Look for:

**Option A: In the URL**
- The URL will look like: `https://formspree.io/f/xrgkqjpn`
- The part after `/f/` is your Form ID: `xrgkqjpn`

**Option B: On the Form Page**
- You'll see text like: "Your form endpoint: `https://formspree.io/f/xrgkqjpn`"
- Or: "Form ID: `xrgkqjpn`"
- Copy the ID part (the letters/numbers after `/f/`)

**Option C: In Settings**
- Click on your form
- Go to "Settings" or "Integration"
- You'll see the Form ID there

### Step 5: Copy Your Form ID
Your Form ID will look something like:
- `xrgkqjpn`
- `mknvqjpn`
- `xyzkqjpn`
- `abc123xy`

It's usually 8 characters (letters and numbers).

### Step 6: Add Your Email Address
1. In Formspree dashboard, click on your form
2. Go to **"Settings"** or **"Email"** tab
3. Add your email: `hridyababu01@gmail.com`
4. Save

### Step 7: Update Your Code
Once you have your Form ID:

1. Open: `src/components/Contact.jsx`
2. Find line 39:
   ```javascript
   const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'
   ```
3. Replace `'YOUR_FORM_ID'` with your actual Form ID:
   ```javascript
   const FORMSPREE_FORM_ID = 'xrgkqjpn'  // ← Your actual Form ID here
   ```
4. Save the file
5. Restart your dev server if it's running

## Example

If your Formspree URL is: `https://formspree.io/f/xrgkqjpn`

Then your Form ID is: `xrgkqjpn`

And you would update the code to:
```javascript
const FORMSPREE_FORM_ID = 'xrgkqjpn'
```

## Still Can't Find It?

1. Make sure you're logged into Formspree
2. Check the dashboard - your form should be listed there
3. Click on the form name to see details
4. The Form ID is always in the URL or form settings

## Need Help?

If you're stuck, you can:
1. Take a screenshot of your Formspree dashboard
2. Or tell me what you see on the Formspree page
3. I'll help you locate the Form ID

