const fs = require('fs');
const path = require('path');

const src_path = path.join(__dirname, '../', 'src');
const root_path = path.join(__dirname, '../');

const component_copy = (cmp) => {

    const cmp_path = path.join(root_path, cmp);
    if (!fs.existsSync(cmp_path)){
        fs.mkdirSync(cmp_path);
    }

    // copio tutti i file all'interno del componente
    fs.readdirSync(path.join(src_path, cmp)).forEach(f => {

        if (path.extname(f) === '.scss') {
            scss_file = fs.readFileSync(
                path.join(src_path, cmp, f)
            ).toString();
            scss_file = scss_file.replace('@import \'../styles/style\';', scss_vars);
            fs.writeFileSync(
                path.join(cmp_path, f),
                scss_file
            )
            console.log(`${f}`);
        }
    })
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

