import Rebase from 're-base';
import Firebase from 'firebase';
import API_KEYS from '../keys';


const app = Firebase.initializeApp({
    apiKey: "AIzaSyChMbEHetWFPIjZG2wjGipmZm1xPcRsUYU",
    authDomain: "pxlwallboard.firebaseapp.com",
    databaseURL: "https://pxlwallboard.firebaseio.com",
    projectId: "pxlwallboard",
});

const base = Rebase.createClass(app.database());

export default base;