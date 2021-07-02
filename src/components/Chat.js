import { SignOut } from "./Signout"
import { useEffect, useState } from "react"
import { db } from "../firebase";
import { SendMessage } from "./Sendmessage";
export const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {

    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [messages])
  return (<div>
    <SignOut></SignOut>
    {messages.map(({ id, text, photoURL }) => {
      return <div key={id} >
        <img src={photoURL} alt="avatar" />
        <p>{text}</p>
      </div>
    })}
    <SendMessage />

  </div>)
}