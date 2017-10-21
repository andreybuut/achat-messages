import { uniq } from 'lodash';

import insane from 'insane';
// require('./css/app.scss');

const ages = [1,2,3,4,5,6];

console.log(uniq(ages));

const div = `<div class="ages"> Title</div><h1>${ages}</h1>`;
document.body.innerHTML = div;

const items = [
{ name: 'Snickers', age: 2},
{ name: 'Boris', age: 12},
{ name: 'Kolya', age: 12},
]

const markup = `
<ul class="numbers">
    ${items.map(item => `<li>${item.name} of ${item.age * 7} years old</li>`).join('')}
</ul>
`;
document.body.innerHTML = markup;