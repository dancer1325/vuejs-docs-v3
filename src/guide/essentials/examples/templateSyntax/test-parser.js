const { JSDOM } = require('jsdom');

// Template Vue -- as -- string
const vueTemplate = `
<div id="app">
    <h1>{{ title }}</h1>
    <button :disabled="isLoading" @click="increment">
        Count: {{ count }}
    </button>
    <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
</div>
`;

try {
    const dom = new JSDOM(`<!DOCTYPE html><html><body>${vueTemplate}</body></html>`);
    const document = dom.window.document;

    console.log('✅ HTML parsed successfully');
    console.log('Found elements:', document.querySelectorAll('*').length);

    const button = document.querySelector('button');
    for (let attr of button.attributes) {
        console.log(`  ${attr.name}: ${attr.value}`);
    }

} catch (error) {
    console.log('❌ Error at parse:', error.message);
}
