importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDvSdiWJ2hEeEHnFlE_bzvShvS0aDeOAfo",
  authDomain: "meetgreeksingles.firebaseapp.com",
  projectId: "meetgreeksingles",
  storageBucket: "meetgreeksingles.firebasestorage.app",
  messagingSenderId: "907263423139",
  appId: "1:907263423139:web:7c42633075d4796a540516",
  measurementId: "G-GNM0MDN284"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
