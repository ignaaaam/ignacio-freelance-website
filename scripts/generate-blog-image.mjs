import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);

function getArg(name, fallback = null) {
  const index = args.indexOf(`--${name}`);
  if (index === -1) return fallback;
  return args[index + 1] ?? fallback;
}

const locale = getArg('locale');
const slug = getArg('slug');
const quality = getArg('quality', 'medium');
const model = getArg('model', 'gpt-image-1-mini');
const dryRun = args.includes('--dry-run');

if (!locale || !slug) {
  console.error('Usage: pnpm generate:blog-image --locale <es|en> --slug <slug> [--quality low|medium|high] [--model gpt-image-1-mini]');
  process.exit(1);
}

if (!['es', 'en'].includes(locale)) {
  console.error('Locale must be "es" or "en".');
  process.exit(1);
}

if (!['low', 'medium', 'high', 'auto'].includes(quality)) {
  console.error('Quality must be low, medium, high, or auto.');
  process.exit(1);
}

const rootDir = process.cwd();
const contentDir = path.join(rootDir, 'src', 'content', 'blog', locale);
const publicDir = path.join(rootDir, 'public');
const outputDir = path.join(publicDir, 'images', 'blog', 'generated');
const apiKey = process.env.OPENAI_API_KEY;

function getFrontmatterValue(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s+"?(.+?)"?$`, 'm'));
  return match?.[1]?.trim() ?? null;
}

function findEntryFile() {
  const files = fs.readdirSync(contentDir).filter((file) => file.endsWith('.md'));

  for (const file of files) {
    const fullPath = path.join(contentDir, file);
    const source = fs.readFileSync(fullPath, 'utf8');
    const match = source.match(/^---\n([\s\S]*?)\n---/);
    if (!match) continue;

    const fileSlug = getFrontmatterValue(match[1], 'slug');
    if (fileSlug === slug) {
      return { fullPath, source, frontmatter: match[1] };
    }
  }

  return null;
}

const entry = findEntryFile();

if (!entry) {
  console.error(`Could not find blog entry for locale="${locale}" and slug="${slug}".`);
  process.exit(1);
}

const title = getFrontmatterValue(entry.frontmatter, 'title');
const description = getFrontmatterValue(entry.frontmatter, 'description');
const heroImagePrompt = getFrontmatterValue(entry.frontmatter, 'heroImagePrompt');
const outputRelativePath = `/images/blog/generated/${slug}.png`;
const outputAbsolutePath = path.join(outputDir, `${slug}.png`);

const prompt = heroImagePrompt || [
  `Create a premium editorial hero image for a blog article.`,
  `Title: ${title ?? slug}.`,
  `Description: ${description ?? ''}.`,
  `Use a clean technology look aligned with a freelance web developer brand.`,
  `No text overlay, no logos, no UI screenshots, no watermarks.`,
  `Warm neutral palette, subtle contrast, polished composition, suitable for a business blog.`,
].join(' ');

if (dryRun) {
  console.log(JSON.stringify({
    locale,
    slug,
    model,
    quality,
    outputRelativePath,
    prompt,
  }, null, 2));
  process.exit(0);
}

if (!apiKey) {
  console.error('Missing OPENAI_API_KEY. Set it in your environment before running this script.');
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const response = await fetch('https://api.openai.com/v1/images/generations', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model,
    prompt,
    size: '1024x1024',
    quality,
    response_format: 'b64_json',
  }),
});

if (!response.ok) {
  const errorText = await response.text();
  console.error(errorText);
  process.exit(1);
}

const payload = await response.json();
const imageBase64 = payload?.data?.[0]?.b64_json;

if (!imageBase64) {
  console.error('OpenAI response did not include image data.');
  process.exit(1);
}

fs.writeFileSync(outputAbsolutePath, Buffer.from(imageBase64, 'base64'));

const nextSource = entry.source.replace(
  /^heroImage:\s+"[^"]+"$/m,
  `heroImage: "${outputRelativePath}"`
);

fs.writeFileSync(entry.fullPath, nextSource);

console.log(`Saved ${outputRelativePath}`);
