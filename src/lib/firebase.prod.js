import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//seed

//config
const config = {
  apiKey: 'AIzaSyCc0KICS7-KG4M_F2djSmcpysrYV1qpA9o',
  authDomain: 'netflix-clone-36719.firebaseapp.com',
  projectId: 'netflix-clone-36719',
  storageBucket: 'netflix-clone-36719.appspot.com',
  messagingSenderId: '982210351174',
  appId: '1:982210351174:web:a66a951fbabee046fc3a47'
};

const firebase = Firebase.initializeApp(config);

export { firebase };
