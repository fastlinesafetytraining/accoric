const yaml = require('yaml');
const fs = require('fs');

/**
 * Custom ESLint rule to validate markdown frontmatter metadata
 * Ensures required metadata fields are not empty
 */
module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensure markdown frontmatter metadata fields are not empty',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: null,
    schema: [
      {
        type: 'object',
        properties: {
          requiredFields: {
            type: 'array',
            items: {
              type: 'string',
            },
            description: 'List of required metadata fields that must not be empty',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      missingField: 'Required metadata field "{{field}}" is missing',
      emptyField: 'Required metadata field "{{field}}" is empty',
      invalidYaml: 'Invalid YAML frontmatter: {{error}}',
      noFrontmatter: 'Markdown file is missing YAML frontmatter',
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const requiredFields = options.requiredFields || [
      'title',
      'date',
      'author',
      'slug',
      'image',
      'imageAlt',
      'excerpt',
    ];

    return {
      Program(node) {
        const filename = context.getFilename();
        
        // Only process markdown files
        if (!filename.endsWith('.md') && !filename.endsWith('.mdx')) {
          return;
        }

        try {
          const fileContent = fs.readFileSync(filename, 'utf8');
          
          // Check if file has frontmatter
          const frontmatterMatch = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
          
          if (!frontmatterMatch) {
            context.report({
              node,
              messageId: 'noFrontmatter',
              loc: { line: 1, column: 1 },
            });
            return;
          }

          // Parse YAML frontmatter
          let metadata;
          try {
            metadata = yaml.parse(frontmatterMatch[1]);
          } catch (yamlError) {
            context.report({
              node,
              messageId: 'invalidYaml',
              data: { error: yamlError.message },
              loc: { line: 1, column: 1 },
            });
            return;
          }

          // Check each required field
          requiredFields.forEach(field => {
            if (!(field in metadata)) {
              context.report({
                node,
                messageId: 'missingField',
                data: { field },
                loc: { line: 1, column: 1 },
              });
            } else if (metadata[field] === null || metadata[field] === undefined || 
                      (typeof metadata[field] === 'string' && metadata[field].trim() === '')) {
              context.report({
                node,
                messageId: 'emptyField',
                data: { field },
                loc: { line: 1, column: 1 },
              });
            }
          });

        } catch (error) {
          // If we can't read the file, skip validation
          console.warn(`Warning: Could not read file ${filename}: ${error.message}`);
        }
      },
    };
  },
};
