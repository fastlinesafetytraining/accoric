#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

// Configuration
const REQUIRED_FIELDS = [
  'title',
  'date',
  'author',
  'slug',
  'image',
  'imageAlt',
  'excerpt'
];

function validateMarkdownFile(filePath) {
  const errors = [];
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has frontmatter
    const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    
    if (!frontmatterMatch) {
      errors.push({
        file: filePath,
        line: 1,
        column: 1,
        message: 'Markdown file is missing YAML frontmatter',
        rule: 'markdown-metadata'
      });
      return errors;
    }

    // Parse YAML frontmatter
    let metadata;
    try {
      metadata = yaml.parse(frontmatterMatch[1]);
    } catch (yamlError) {
      errors.push({
        file: filePath,
        line: 1,
        column: 1,
        message: `Invalid YAML frontmatter: ${yamlError.message}`,
        rule: 'markdown-metadata'
      });
      return errors;
    }

    // Check each required field
    REQUIRED_FIELDS.forEach(field => {
      if (!(field in metadata)) {
        errors.push({
          file: filePath,
          line: 1,
          column: 1,
          message: `Required metadata field "${field}" is missing`,
          rule: 'markdown-metadata'
        });
      } else if (metadata[field] === null || metadata[field] === undefined || 
                (typeof metadata[field] === 'string' && metadata[field].trim() === '')) {
        errors.push({
          file: filePath,
          line: 1,
          column: 1,
          message: `Required metadata field "${field}" is empty`,
          rule: 'markdown-metadata'
        });
      }
    });

  } catch (error) {
    errors.push({
      file: filePath,
      line: 1,
      column: 1,
      message: `Error reading file: ${error.message}`,
      rule: 'markdown-metadata'
    });
  }

  return errors;
}

function findMarkdownFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

function main() {
  const args = process.argv.slice(2);
  const targetDir = args[0] || 'posts';
  
  console.log(`Validating markdown files in: ${targetDir}`);
  
  const markdownFiles = findMarkdownFiles(targetDir);
  let totalErrors = 0;
  
  for (const file of markdownFiles) {
    const errors = validateMarkdownFile(file);
    
    if (errors.length > 0) {
      totalErrors += errors.length;
      
      for (const error of errors) {
        console.log(`${error.file}:1:1: ${error.message} [${error.rule}]`);
      }
    }
  }
  
  if (totalErrors === 0) {
    console.log('✅ All markdown files have valid metadata!');
    process.exit(0);
  } else {
    console.log(`\n❌ Found ${totalErrors} error(s) in ${markdownFiles.length} markdown file(s)`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { validateMarkdownFile, findMarkdownFiles };
