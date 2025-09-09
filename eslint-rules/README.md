# Custom ESLint Rules for Markdown Metadata Validation

This directory contains custom ESLint rules for validating markdown frontmatter metadata.

## Files

- `markdown-metadata.js` - Custom ESLint rule that validates markdown frontmatter metadata
- `index.js` - Plugin wrapper that exports the custom rules

## Usage

### Option 1: Standalone Script (Recommended)

Use the standalone validation script for better performance and reliability:

```bash
# Validate all markdown files in the posts directory
npm run lint:markdown

# Validate specific directory
node scripts/validate-markdown.js posts/

# Validate specific file
node scripts/validate-markdown.js posts/my-post.md
```

### Option 2: ESLint Integration

The custom rule is also integrated into ESLint, but due to parsing complexities with markdown files, the standalone script is recommended.

```bash
# Run ESLint on markdown files (may have parsing issues)
npx eslint posts/ --ext .md,.mdx
```

## Configuration

The validation checks for the following required metadata fields by default:

- `title` - Post title
- `date` - Publication date
- `author` - Author name
- `slug` - URL slug
- `image` - Featured image path
- `imageAlt` - Alt text for the image
- `excerpt` - Post excerpt

### Customizing Required Fields

You can customize the required fields by modifying the `REQUIRED_FIELDS` array in `scripts/validate-markdown.js` or the ESLint configuration in `eslint.config.mjs`.

## Error Messages

The validator will report:

- **Missing field**: When a required metadata field is not present
- **Empty field**: When a required metadata field is present but empty
- **Invalid YAML**: When the frontmatter YAML is malformed
- **No frontmatter**: When the file doesn't have YAML frontmatter

## Example

```markdown
---
title: "My Blog Post"
date: "2023-01-01"
author: "John Doe"
slug: "my-blog-post"
image: "/images/my-post.jpg"
imageAlt: "Description of the image"
excerpt: "This is a brief description of the post"
---

Your markdown content here...
```

## Integration with CI/CD

Add the markdown validation to your CI/CD pipeline:

```yaml
# GitHub Actions example
- name: Validate Markdown Metadata
  run: npm run lint:markdown
```

