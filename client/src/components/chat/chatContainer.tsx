import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { ChatMessageInput } from "./chatMessageInput";

export const ChatContainer = () => {
    const [messages, setMessages] = useState<string[]>([])

    const chatRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        chatRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
    }, [messages])


    return (
        <div className="p-12">
            <Card>
                <CardHeader>
                    <CardTitle>Chat test</CardTitle>
                </CardHeader>
                <CardContent className="mb-5 w-[100%] h-[500px] overflow-auto">
                    {
                        messages.map((msg, idx) => <div key={msg + idx} className="flex"
                        >
                            <span className="bg-primary text-primary-foreground rounded-3xl mt-3 p-2"
                            >{msg}</span>
                        </div>)
                    }
                    <div ref={chatRef}></div>
                </CardContent>
                <CardFooter>
                    <ChatMessageInput setMessages={(newMsg: string)=> setMessages((msgs)=> [...msgs, newMsg])}/>
                </CardFooter>
            </Card>
        </div>
    )
}