# Google Analytics & Tag Manager Implementation Guide

## Overview
This website uses Google Analytics 4 (GA4) and Google Tag Manager (GTM) to track user interactions and conversions. The implementation is privacy-compliant and includes comprehensive event tracking.

## Setup Details

### Google Analytics 4 (GA4)
- **GA4 Property ID**: `G-3ZDBF6HWZX`
- **Domain**: ignacioamatweb.com

### Google Tag Manager (GTM)
- **GTM Container ID**: `GTM-54MWG58S`
- **Domain**: ignacioamatweb.com

### Privacy Configuration
- **IP Anonymization**: Enabled (`anonymize_ip: true`)
- **Google Signals**: Disabled (`allow_google_signals: false`)
- **Ad Personalization**: Disabled (`allow_ad_personalization_signals: false`)

### GTM Benefits
- **Centralized Tag Management**: Manage all tracking tags from one interface
- **No Code Deployment**: Add/modify tracking without code changes
- **Advanced Triggers**: Complex event tracking conditions
- **Third-party Integration**: Easy integration with other marketing tools
- **Version Control**: Track changes and rollback if needed

## Event Tracking Implementation

### 1. Contact Form Submissions
- **Event Name**: `form_submit`
- **Category**: `Contact`
- **Label**: `Contact Form`
- **Triggered**: When contact form is successfully submitted
- **Location**: `src/components/Contact.astro`

### 2. CTA Button Clicks
- **Event Name**: `click`
- **Category**: `CTA`
- **Labels**:
  - `Hero CTA - Start Project`
  - `Hero CTA - Explore Services`
  - `Header CTA - Contact`
  - `Mobile Header CTA - Contact`
  - `Pricing CTA - Get Quote`
  - `Projects CTA - Discuss Project`
- **Triggered**: When any CTA button is clicked
- **Locations**: Various components (Hero, Header, Pricing, Projects)

### 3. Lead Magnet Submissions
- **Event Name**: `form_submit`
- **Category**: `Lead Magnet`
- **Label**: `Website Analysis Request`
- **Triggered**: When lead magnet form is successfully submitted
- **Location**: `src/components/LeadMagnet.astro`

## File Structure

```
src/
├── components/
│   ├── GoogleAnalytics.astro    # Main GA4 implementation
│   ├── GoogleTagManager.astro   # GTM implementation
│   ├── Contact.astro            # Contact form tracking
│   ├── Hero.astro               # Hero CTA tracking
│   ├── Header.astro             # Header CTA tracking
│   ├── Pricing.astro            # Pricing CTA tracking
│   ├── Projects.astro           # Projects CTA tracking
│   └── LeadMagnet.astro         # Lead magnet tracking
└── layouts/
    └── Layout.astro             # GA & GTM component integration
```

## Implementation Notes

### Safety Checks
All tracking functions include safety checks to prevent errors:
```javascript
if (typeof window.trackCTAClick === 'function') {
  window.trackCTAClick('Button Label');
}
```

### Global Functions
The following functions are available globally:
- `window.trackContactForm()`
- `window.trackCTAClick(label)`
- `window.trackLeadMagnet()`

## Verification Checklist

### Google Analytics 4 (GA4)
- [x] GA4 property configured with correct measurement ID
- [x] Privacy settings configured (IP anonymization, disabled signals)
- [x] Contact form submissions tracked
- [x] All CTA buttons tracked with descriptive labels
- [x] Lead magnet submissions tracked
- [x] Safety checks implemented for all tracking calls
- [x] DNS prefetch configured for Google Analytics domains

### Google Tag Manager (GTM)
- [x] GTM container configured with correct container ID
- [x] GTM script added to head section
- [x] GTM noscript fallback added to body
- [x] DNS prefetch configured for GTM domains
- [x] dataLayer initialized properly

## Analytics Goals

### Primary Conversions
1. **Contact Form Submissions** - Main conversion goal
2. **Lead Magnet Submissions** - Lead generation goal

### Secondary Metrics
1. **CTA Click Rates** - Engagement measurement
2. **Page Views** - Traffic analysis
3. **Session Duration** - User engagement

## Monitoring & Optimization

### Key Metrics to Track
- Contact form conversion rate
- Lead magnet conversion rate
- CTA click-through rates by location
- Traffic sources and user behavior

### Recommended Reports
1. **Conversion Reports** - Track form submissions
2. **Event Reports** - Monitor CTA performance
3. **Audience Reports** - Understand user demographics
4. **Acquisition Reports** - Track traffic sources

## Troubleshooting

### Common Issues
1. **Events not firing**: Check browser console for JavaScript errors
2. **GA4 tracking not working**: Verify GA4 property ID is correct
3. **GTM not loading**: Check GTM container ID and network connectivity
4. **Privacy compliance**: Ensure cookie consent is properly implemented

### Testing
- Use Google Analytics Debugger Chrome extension
- Check Real-Time reports in GA4
- Verify events in GA4 DebugView
- Use GTM Preview mode for testing tags
- Check GTM container in Tag Assistant

## Updates & Maintenance

### Regular Tasks
- Monitor tracking accuracy monthly
- Update event labels if new CTAs are added
- Review privacy compliance quarterly
- Analyze conversion funnel performance

### When Adding New Tracking
1. Define clear event naming convention
2. Add safety checks for function calls
3. Update this documentation
4. Test thoroughly before deployment

---

**Last Updated**: December 2024
**Version**: 1.0
**Maintained by**: Ignacio Amat