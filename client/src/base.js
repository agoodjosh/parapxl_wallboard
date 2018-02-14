import Rebase from 're-base';
import Firebase from 'firebase';
import API_KEYS from '../keys';


const app = Firebase.initializeApp({
    apiKey: 'AIzaSyAIcLBMVJRCBo2oGc3rhis_tA3MrSGQ_xc',
    authDomain: "wallboard-60183.firebaseapp.com",
    databaseURL: "https://wallboard-60183.firebaseio.com",
});

const base = Rebase.createClass(app.database());

export default base;