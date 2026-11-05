import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';
// Firebase Console থেকে config বসান; mobile/firebaseConfig.js-এও একই config দিন.
const firebaseConfig={apiKey:'PASTE_API_KEY',authDomain:'PASTE_PROJECT.firebaseapp.com',projectId:'PASTE_PROJECT_ID',storageBucket:'PASTE_PROJECT.appspot.com',messagingSenderId:'PASTE_SENDER_ID',appId:'PASTE_APP_ID'};
const app=initializeApp(firebaseConfig),db=getFirestore(app);const ids=['appName','primaryColor','accentColor','bannerText','roomBackground','seatStyle','profileFrame'];const el=id=>document.getElementById(id);
function preview(){const p=el('preview');p.style.background=el('primaryColor').value;p.style.borderColor=el('accentColor').value;p.querySelector('h2').textContent=el('appName').value;p.querySelector('p').textContent=el('bannerText').value;}ids.forEach(id=>el(id).addEventListener('input',preview));preview();
el('save').addEventListener('click',async()=>{try{const data={};ids.forEach(id=>data[id]=el(id).value);data.updatedAt=new Date().toISOString();await setDoc(doc(db,'appConfig','design'),data,{merge:true});el('status').textContent='Saved. অ্যাপ নতুন সেটিংস পাবে।';}catch(e){el('status').textContent='Save হয়নি: '+e.message;}});
