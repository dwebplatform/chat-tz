import { Button } from "@material-ui/core"
import { auth } from "../firebase"

export const SignOut = () => {
  const handleSignOut = () => {
    auth.signOut()
  }
  return <Button onClick={handleSignOut}>Log out</Button>
}