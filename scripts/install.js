const fs = require('fs');
const path = require('path');

console.log('install');
const src_path = path.join(__dirname, '../', 'src');
const root_path = path.join(__dirname, '../');

const component_copy = (cmp) => {
    fs.mkdirSync(path.join(root_path, cmp))
}

//  contenuto di _variables.scss
const scss_vars_path = path.join(src_path, 'styles', '_variables.scss');
const scss_vars = fs.readFileSync(scss_vars_path).toString();

//  processo i componenti
const components = fs.readdirSync(src_path);
components.forEach(c => {
    if (c.startsWith('upscale-')) {
        component_copy(c)
    }
})

