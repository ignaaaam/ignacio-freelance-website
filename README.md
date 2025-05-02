# Ignacio Amat - Freelance Web Development Portfolio

This is a professional portfolio website built with Astro, showcasing web development services and allowing potential clients to get in touch.

## 🚀 Features

- Modern, responsive design
- Fast performance with Astro
- Contact form with Resend integration
- Dark theme
- SEO optimized
- Fully customizable sections

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [Resend](https://resend.com) for email handling
- TypeScript for type safety

## 📦 Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Projects.astro
│   │   ├── Process.astro
│   │   ├── Pricing.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── api/
│   │       └── contact.ts
│   └── styles/
│       └── global.css
└── package.json
```

## 🚀 Getting Started

1. Clone this repository:
```bash
git clone https://github.com/yourusername/ignacio-freelance-website.git
cd ignacio-freelance-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Resend API key:
```env
RESEND_API_KEY=your_resend_api_key_here
```

4. Update the email configuration in `src/pages/api/contact.ts` with your email address.

5. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration

### Environment Variables

- `RESEND_API_KEY`: Your Resend API key for email functionality

### Customization

- Update content in component files under `src/components/`
- Modify styles in `src/styles/global.css`
- Add new pages in `src/pages/`
- Customize colors and fonts in `src/styles/global.css`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

```sh
pnpm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Language Detection

The website implements simple language detection with these features:

1. **Browser Language Detection**: The site automatically detects the user's preferred language from their browser settings on their first visit.
   - If the browser language is Spanish or from a Spanish-speaking country, the site shows Spanish content
   - Otherwise, it defaults to English

2. **Manual Language Switching**: Users can manually switch languages at any time using the language toggle in the header.

3. **URL-based Languages**: Content is served from different URL paths:
   - Spanish (default): `/`
   - English: `/en/`

### How it works

- The system uses Astro middleware to detect the browser's language on the initial page load
- Language detection is based on the `Accept-Language` HTTP header
- The language switcher allows users to toggle between languages at any time
- Each language has dedicated content in the `/src/i18n/locales/` directory

### Implementation details

- Language detection logic: `src/i18n/utils.ts`
- Middleware implementation: `src/middleware.ts`
- Language switcher component: `src/components/LanguageSwitcher.astro`
