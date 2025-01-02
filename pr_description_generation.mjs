import { CSS_VARS_TRANSFORMS_MAP, CSS_IN_JS_VARS_TRANSFORMS_MAP } from "./replacements.mjs";
import {promises as fs} from 'fs';

const categoryMap = {
    "bs": "Bootstrap",
    "el": "Element Plus"
}

async function generatePRDescription(transformsPerformed, filename, cwd) {
    const markdown = ['### In CSS code'];
    let prevCategory = null;

    // for each instance in CSS_VARS_TRANSFORMS_MAP
    // write a markdown list item with the selector and props
    for (const { selector, props } of CSS_VARS_TRANSFORMS_MAP) {
        // if we change category, add a bold title
        const category = selector.replace(/^--/, "").split('-')[0];
        const categoryName = categoryMap[category] || "Kestra";
        if(categoryName !== prevCategory) {
            markdown.push(`\n\n#### ${categoryName}\n`);
            prevCategory = categoryName;
        }
        markdown.push(`- When we find \`var(${selector})\`:`);

        for (const prop in props) {
            markdown.push(`  - if the prop is \`${prop}\` replace it with \`${props[prop]}\``);
        }
    }

    const markdownForRegExp = ['### In JS code'];

    // for each instance in CSS_IN_JS_VARS_TRANSFORMS_MAP
    // write in markdown that we will replace in a string interpolation the selector with the replacement
    for (const { selector, replacement } of CSS_IN_JS_VARS_TRANSFORMS_MAP) {
        const selectorString = selector.toString().slice(1,-1).replace(/\\\(/g, '(');
        markdownForRegExp.push(`- When we find \`${selectorString}\` in a string interpolation, we replace it with \`${replacement}\`.`);
    }

    await fs.writeFile('pr_description.md', `${markdown.join('\n')}\n\n${markdownForRegExp.join('\n')}`, {encoding: 'utf-8'});

    console.log('PR description generated');
}

generatePRDescription();