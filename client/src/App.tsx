import { ChatContainer } from "./components/chat/chatContainer"
import { ModeThemeToggle } from "./components/mode-theme-toggle"
import { GoogleLogin } from "./components/views/googleLogin"

function App() {
  return (
    <>
      <GoogleLogin />
      <ModeThemeToggle />
      <ChatContainer />
    </>
  )
}

export default App
