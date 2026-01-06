#!/usr/bin/env node

/**
 * SEO Health Check Script
 * Run: node check-seo.js
 */

import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

const checks = {
  passed: [],
  failed: [],
  warnings: []
};

console.log('🔍 Running SEO Health Check...\n');

// Check 1: Sitemaps exist
console.log('📄 Checking sitemaps...');
const sitemaps = ['sitemap-index.xml', 'sitemap-es.xml', 'sitemap-en.xml'];
sitemaps.forEach(sitemap => {
  const path = join(process.cwd(), 'public', sitemap);
  if (existsSync(path)) {
    const content = readFileSync(path, 'utf-8');
    const currentDate = new Date().toISOString().split('T')[0];
    if (content.includes(currentDate)) {
      checks.passed.push(`✅ ${sitemap} exists and is up to date`);
    } else {
      checks.warnings.push(`⚠️  ${sitemap} exists but may be outdated`);
    }
  } else {
    checks.failed.push(`❌ ${sitemap} not found`);
  }
});

// Check 2: robots.txt
console.log('🤖 Checking robots.txt...');
const robotsPath = join(process.cwd(), 'public', 'robots.txt');
if (existsSync(robotsPath)) {
  const robotsContent = readFileSync(robotsPath, 'utf-8');
  if (robotsContent.includes('Sitemap:')) {
    checks.passed.push('✅ robots.txt has sitemap reference');
  } else {
    checks.failed.push('❌ robots.txt missing sitemap reference');
  }
  if (robotsContent.includes('User-agent:')) {
    checks.passed.push('✅ robots.txt has user-agent directives');
  }
} else {
  checks.failed.push('❌ robots.txt not found');
}

// Check 3: OG Image
console.log('🖼️  Checking OG image...');
const ogImagePath = join(process.cwd(), 'public', 'images', 'og-image.png');
if (existsSync(ogImagePath)) {
  checks.passed.push('✅ OG image exists (og-image.png)');
} else {
  checks.failed.push('❌ OG image not found (og-image.png)');
}

// Check 4: Layout meta tags
console.log('🏷️  Checking Layout.astro meta tags...');
const layoutPath = join(process.cwd(), 'src', 'layouts', 'Layout.astro');
if (existsSync(layoutPath)) {
  const layoutContent = readFileSync(layoutPath, 'utf-8');

  const metaChecks = [
    { tag: 'og:title', name: 'Open Graph title' },
    { tag: 'og:description', name: 'Open Graph description' },
    { tag: 'og:image', name: 'Open Graph image' },
    { tag: 'twitter:card', name: 'Twitter card' },
    { tag: 'canonical', name: 'Canonical URL' },
    { tag: 'robots', name: 'Robots meta tag' },
    { tag: 'hreflang', name: 'Hreflang tags' }
  ];

  metaChecks.forEach(({ tag, name }) => {
    if (layoutContent.includes(tag)) {
      checks.passed.push(`✅ ${name} present`);
    } else {
      checks.failed.push(`❌ ${name} missing`);
    }
  });

  // Check for Google Analytics
  if (layoutContent.includes('googletagmanager.com/gtag/js')) {
    checks.passed.push('✅ Google Analytics configured');
  } else {
    checks.warnings.push('⚠️  Google Analytics may not be configured');
  }

  // Check for Search Console verification
  if (layoutContent.includes('google-site-verification')) {
    if (layoutContent.includes('VERIFICATION_CODE_PLACEHOLDER')) {
      checks.warnings.push('⚠️  Google Search Console verification needs real code');
    } else {
      checks.passed.push('✅ Google Search Console verification configured');
    }
  } else {
    checks.failed.push('❌ Google Search Console verification missing');
  }
} else {
  checks.failed.push('❌ Layout.astro not found');
}

// Check 5: Vercel config
console.log('⚙️  Checking Vercel configuration...');
const vercelPath = join(process.cwd(), 'vercel.json');
if (existsSync(vercelPath)) {
  const vercelContent = readFileSync(vercelPath, 'utf-8');
  if (vercelContent.includes('headers')) {
    checks.passed.push('✅ Security headers configured');
  }
  if (vercelContent.includes('Cache-Control')) {
    checks.passed.push('✅ Cache-Control headers configured');
  }
} else {
  checks.warnings.push('⚠️  vercel.json not found - headers may not be configured');
}

// Check 6: Astro config
console.log('🚀 Checking Astro configuration...');
const astroConfigPath = join(process.cwd(), 'astro.config.mjs');
if (existsSync(astroConfigPath)) {
  const astroContent = readFileSync(astroConfigPath, 'utf-8');
  if (astroContent.includes('site:')) {
    checks.passed.push('✅ Site URL configured in astro.config.mjs');
  } else {
    checks.warnings.push('⚠️  Site URL not configured in astro.config.mjs');
  }
  if (astroContent.includes('compressHTML')) {
    checks.passed.push('✅ HTML compression enabled');
  }
  if (astroContent.includes('webAnalytics')) {
    checks.passed.push('✅ Vercel Web Analytics enabled');
  }
  if (astroContent.includes('speedInsights')) {
    checks.passed.push('✅ Vercel Speed Insights enabled');
  }
}

// Print Results
console.log('\n' + '='.repeat(60));
console.log('📊 SEO Health Check Results');
console.log('='.repeat(60) + '\n');

if (checks.passed.length > 0) {
  console.log('✅ PASSED (' + checks.passed.length + ')');
  checks.passed.forEach(check => console.log('   ' + check));
  console.log('');
}

if (checks.warnings.length > 0) {
  console.log('⚠️  WARNINGS (' + checks.warnings.length + ')');
  checks.warnings.forEach(check => console.log('   ' + check));
  console.log('');
}

if (checks.failed.length > 0) {
  console.log('❌ FAILED (' + checks.failed.length + ')');
  checks.failed.forEach(check => console.log('   ' + check));
  console.log('');
}

// Summary
const total = checks.passed.length + checks.warnings.length + checks.failed.length;
const score = Math.round((checks.passed.length / total) * 100);

console.log('='.repeat(60));
console.log(`SEO Health Score: ${score}%`);
console.log('='.repeat(60));

if (score >= 90) {
  console.log('🎉 Excellent! Your SEO configuration is strong.');
} else if (score >= 70) {
  console.log('👍 Good! Address warnings for better SEO.');
} else if (score >= 50) {
  console.log('⚠️  Fair. Please fix failed checks soon.');
} else {
  console.log('🚨 Critical issues found. Fix immediately!');
}

console.log('\n💡 See SEO-IMPROVEMENTS-APPLIED.md for detailed instructions.\n');

// Exit code
process.exit(checks.failed.length > 0 ? 1 : 0);
