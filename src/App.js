import { Chat } from './components/Chat';
import { SignIn } from './components/Signin';
import { auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);

  return (
    < >
      {
        user ? <Chat /> : <SignIn />
      }
    </>
  );
}

export default App;
