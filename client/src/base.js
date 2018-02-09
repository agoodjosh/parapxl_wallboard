import Rebase from 're-base';
import API_KEYS from './keys';

const base = Rebase.createClass({
    apiKey: API_KEYS,
    authDomain: "wallboard-60183.firebaseapp.com",
    databaseURL: "https://wallboard-60183.firebaseio.com",
});

export default base;