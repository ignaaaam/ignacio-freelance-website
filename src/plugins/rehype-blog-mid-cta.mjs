/**
 * Injects a commercial CTA `<aside>` after the 3rd paragraph in blog Markdown bodies.
 * Locale is inferred from `src/content/blog/es/` vs `en/` in the file path.
 */

/** @param {string} value */
function t(value) {
  return { type: 'text', value };
}

/** @param {string} tagName */
/** @param {Record<string, unknown>} [properties] */
/** @param {any[]} [children] */
function el(tagName, properties, children) {
  return {
    type: 'element',
    tagName,
    properties: properties ?? {},
    children: children ?? [],
  };
}

/** @param {import('../data/blog-commercial-nav.json')[keyof import('../data/blog-commercial-nav.json')]} localeNav */
function createMidCtaAside(localeNav) {
  const { title, body, contactLabel, contactHref, secondaryHeading, links } = localeNav.midCta;

  const linkAnchors = links.map((item) =>
    el(
      'a',
      { href: item.href, className: ['blog-mid-cta__secondary-link'], 'data-cta': 'blog-mid-secondary' },
      [t(item.label)],
    ),
  );

  return el('aside', { className: ['blog-mid-cta', 'surface-card'], 'data-blog-mid-cta': 'true' }, [
    el('h3', { className: ['blog-mid-cta__title'] }, [t(title)]),
    el('p', { className: ['blog-mid-cta__body'] }, [t(body)]),
    el(
      'a',
      {
        href: contactHref,
        className: ['btn-primary', 'blog-mid-cta__primary'],
        'data-cta': 'blog-mid-primary',
      },
      [t(contactLabel)],
    ),
    el('p', { className: ['blog-mid-cta__secondary-heading'] }, [t(secondaryHeading)]),
    el('div', { className: ['blog-mid-cta__links'] }, linkAnchors),
  ]);
}

/**
 * @param {import('../data/blog-commercial-nav.json')} nav
 */
export default function rehypeBlogMidCta(nav) {
  /** @param {import('hast').Root} tree */
  /** @param {import('vfile').VFile} file */
  return function transformer(tree, file) {
    const path = String(file.path ?? '').replace(/\\/g, '/');
    if (!path.includes('/src/content/blog/')) return;

    const locale = path.includes('/content/blog/en/') ? 'en' : 'es';
    const localeNav = nav[locale];
    if (!localeNav?.midCta) return;

    let paragraphCount = 0;
    const aside = createMidCtaAside(localeNav);
    /** @type {{ done: boolean }} */
    const state = { done: false };

    /**
     * @param {import('hast').Root['children']} nodes
     */
    function walk(nodes) {
      if (!nodes || state.done) return;
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (node.type !== 'element') continue;

        if (node.tagName === 'p') {
          paragraphCount += 1;
          if (paragraphCount === 3) {
            nodes.splice(i + 1, 0, aside);
            state.done = true;
            return;
          }
        }

        if (node.children?.length) {
          walk(node.children);
          if (state.done) return;
        }
      }
    }

    walk(tree.children);
  };
}
