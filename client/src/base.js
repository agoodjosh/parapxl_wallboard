import Rebase from 're-base';
import Firebase from 'firebase';


const app = Firebase.initializeApp({
    apiKey: "AIzaSyChMbEHetWFPIjZG2wjGipmZm1xPcRsUYU",
    authDomain: "pxlwallboard.firebaseapp.com",
    databaseURL: "https://pxlwallboard.firebaseio.com",
    projectId: "pxlwallboard",
});

const base = Rebase.createClass(app.database());

export default base;