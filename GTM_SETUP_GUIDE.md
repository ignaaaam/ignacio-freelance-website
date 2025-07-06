# Google Tag Manager Setup Guide for CTA Tracking

## Overview
This guide will walk you through setting up Google Tag Manager to track all CTA button clicks and form submissions on your website.

## Prerequisites
- Google Tag Manager account
- GTM Container ID: `GTM-54MWG58S`
- GA4 Property ID: `G-3ZDBF6HWZX`

---

## 📋 **Step 1: Access Your GTM Container**

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Select your container: `GTM-54MWG58S`
3. You should see the workspace dashboard

---

## 🏷️ **Step 2: Create GA4 Configuration Tag**

### 2.1 Create GA4 Config Tag
1. Click **"Tags"** in the left sidebar
2. Click **"New"** button
3. Click on the tag configuration area
4. Select **"Google Analytics: GA4 Configuration"**
5. Enter your **Measurement ID**: `G-3ZDBF6HWZX`
6. **Tag Name**: `GA4 - Configuration`
7. **Triggering**: Select **"All Pages"**
8. Click **"Save"**

---

## 🎯 **Step 3: Create CTA Click Tracking**

### 3.1 Create CTA Click Event Tag
1. Click **"Tags"** → **"New"**
2. **Tag Configuration**: Select **"Google Analytics: GA4 Event"**
3. **Configuration Tag**: Select the GA4 config tag you just created
4. **Event Name**: `cta_click`
5. **Event Parameters**:
   - **Parameter Name**: `cta_location` | **Value**: `{{cta_location}}`
   - **Parameter Name**: `event_category` | **Value**: `CTA`
   - **Parameter Name**: `event_action` | **Value**: `click`
6. **Tag Name**: `GA4 - CTA Click`
7. **Triggering**: We'll create this next
8. **Save** (don't submit yet)

### 3.2 Create CTA Click Trigger
1. Click **"Triggers"** → **"New"**
2. **Trigger Configuration**: Select **"Custom Event"**
3. **Event Name**: `cta_click`
4. **Trigger Name**: `CTA Click - All`
5. Click **"Save"**

### 3.3 Assign Trigger to CTA Tag
1. Go back to your **"GA4 - CTA Click"** tag
2. Click on **"Triggering"**
3. Select **"CTA Click - All"** trigger
4. Click **"Save"**

---

## 📝 **Step 4: Create Form Submission Tracking**

### 4.1 Contact Form Submission Tag
1. **Tags** → **"New"**
2. **Tag Configuration**: **"Google Analytics: GA4 Event"**
3. **Configuration Tag**: Select your GA4 config tag
4. **Event Name**: `form_submit`
5. **Event Parameters**:
   - **Parameter Name**: `form_type` | **Value**: `contact`
   - **Parameter Name**: `event_category` | **Value**: `Contact`
6. **Tag Name**: `GA4 - Contact Form Submit`
7. **Triggering**: Create trigger next

### 4.2 Contact Form Trigger
1. **Triggers** → **"New"**
2. **Trigger Configuration**: **"Custom Event"**
3. **Event Name**: `form_submit`
4. **Trigger Name**: `Contact Form Submit`
5. **Some Custom Events**: Enable this
6. **Event**: equals `form_submit`
7. **form_type**: equals `contact`
8. **Save**

### 4.3 Lead Magnet Form Tag
1. **Tags** → **"New"**
2. **Tag Configuration**: **"Google Analytics: GA4 Event"**
3. **Configuration Tag**: Select your GA4 config tag
4. **Event Name**: `lead_magnet_submit`
5. **Event Parameters**:
   - **Parameter Name**: `form_type` | **Value**: `lead_magnet`
   - **Parameter Name**: `event_category` | **Value**: `Lead Magnet`
6. **Tag Name**: `GA4 - Lead Magnet Submit`

### 4.4 Lead Magnet Trigger
1. **Triggers** → **"New"**
2. **Trigger Configuration**: **"Custom Event"**
3. **Event Name**: `lead_magnet_submit`
4. **Trigger Name**: `Lead Magnet Submit`
5. **Save**

---

## 🔧 **Step 5: Create Variables (Optional but Recommended)**

### 5.1 Create CTA Location Variable
1. **Variables** → **"New"**
2. **Variable Configuration**: **"Data Layer Variable"**
3. **Data Layer Variable Name**: `cta_location`
4. **Variable Name**: `DLV - CTA Location`
5. **Save**

### 5.2 Create Form Type Variable
1. **Variables** → **"New"**
2. **Variable Configuration**: **"Data Layer Variable"**
3. **Data Layer Variable Name**: `form_type`
4. **Variable Name**: `DLV - Form Type`
5. **Save**

---

## 🧪 **Step 6: Test Your Setup**

### 6.1 Enable Preview Mode
1. Click **"Preview"** in the top right
2. Enter your website URL: `https://ignacioamatweb.com`
3. Click **"Connect"**
4. A new tab will open with GTM debug mode

### 6.2 Test CTA Clicks
1. Click on different CTA buttons on your site
2. Check the GTM debug panel for:
   - `cta_click` events
   - Correct `cta_location` values
   - Tags firing properly

### 6.3 Test Form Submissions
1. Submit the contact form
2. Submit the lead magnet form
3. Verify events are firing in debug mode

---

## 🚀 **Step 7: Publish Your Changes**

### 7.1 Submit Changes
1. Click **"Submit"** in the top right
2. **Version Name**: `CTA and Form Tracking Setup`
3. **Version Description**: `Added tracking for all CTA buttons and form submissions`
4. Click **"Publish"**

---

## 📊 **Current CTA Buttons Being Tracked**

Your website currently tracks these CTA buttons:

### Hero Section
- **"Start Your Project Today"** → `Hero CTA - Start Project`
- **"Explore My Services"** → `Hero CTA - Explore Services`

### Header
- **Contact Button (Desktop)** → `Header CTA - Contact`
- **Contact Button (Mobile)** → `Mobile Header CTA - Contact`

### Pricing Section
- **"Get Your Custom Quote"** → `Pricing CTA - Get Quote`

### Projects Section
- **"Let's Discuss Your Project"** → `Projects CTA - Discuss Project`

### Forms
- **Contact Form** → `form_submit` with `form_type: contact`
- **Lead Magnet Form** → `lead_magnet_submit` with `form_type: lead_magnet`

---

## 🔍 **Verification in GA4**

After publishing, verify tracking in GA4:

1. Go to **GA4 Reports** → **Realtime**
2. Click CTA buttons on your site
3. Check for events appearing in realtime
4. Go to **Events** report to see historical data

---

## 📈 **Advanced GTM Configurations (Optional)**

### Enhanced E-commerce Tracking
- Set up purchase events
- Track add to cart actions
- Monitor checkout steps

### Custom Dimensions
- User engagement level
- Traffic source details
- Device categories

### Conversion Tracking
- Set up goals in GA4
- Import conversions to Google Ads
- Track ROI and attribution

---

## 🛠️ **Troubleshooting**

### Common Issues:
1. **Events not firing**: Check trigger conditions
2. **Wrong data**: Verify dataLayer variable names
3. **GA4 not receiving data**: Check configuration tag
4. **Preview mode not working**: Clear browser cache

### Debug Steps:
1. Use GTM Preview mode
2. Check browser console for errors
3. Verify dataLayer pushes in Network tab
4. Test with GA4 DebugView

---

## 📋 **Maintenance Checklist**

### Monthly Tasks:
- [ ] Review event data in GA4
- [ ] Check for any failed tags in GTM
- [ ] Verify all CTA buttons are still tracked
- [ ] Update tracking for any new buttons/forms

### When Adding New CTAs:
1. Add tracking code to the button: `onclick="trackCTAClick('New CTA Label')"`
2. No GTM changes needed (uses existing setup)
3. Test in GTM Preview mode
4. Verify in GA4 Realtime reports

---

**Your GTM setup is now complete and ready to track all user interactions!** 🎉