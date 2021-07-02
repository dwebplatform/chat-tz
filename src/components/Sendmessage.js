import { Button, Input } from "@material-ui/core"
import { useState } from "react"
import { db, auth } from '../firebase';
import firebase from "firebase";
export const SendMessage = () => {
  const [message, setMessage] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection('messages').add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setMessage('')
  }
  return <div>
    <form onSubmit={sendMessage}>
      <Input
        value={message}
        onChange={(e) => { setMessage(e.target.value) }}
        placeholder="type your message" />
      <Button type="submit">Send</Button>
    </form>
  </div>
}