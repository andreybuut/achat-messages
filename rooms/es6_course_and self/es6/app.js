import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, url, sayHi } from'./src/config';


const ages = [1,2,12,1123,33,4,5,];

console.log(uniq(ages));
console.log(apiKey, url);
sayHi('Andrey');

import User, { createURL, gravatar} from './src/user';

const user = new User('Andrey But', 'andrey.but@saritasa.com', 'buh.asia');

console.log(user);

const profile = createURL(user.name);
console.log(profile);

const ava = gravatar(user.email);
console.log(ava);

