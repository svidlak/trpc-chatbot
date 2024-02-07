import { KeyboardEvent, useRef } from "react"
import { Input } from "../ui/input"
import { EmojiPicker } from "./emojiPicker"

const ENTER_BUTTON_KEY = 'Enter';

interface Props {
    setMessages: (newMessage: string) => void
}
export const ChatMessageInput = ({ setMessages }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        const newValue = (inputRef.current?.value || '').trim();

        if (e.key === ENTER_BUTTON_KEY) {
            if (newValue.length) {
                setMessages(newValue);
            }

            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }

    const handleEmojiSelect = (emoji: string) => {
        if (inputRef.current) {
            inputRef.current.value = inputRef.current?.value + emoji
        }
    }

    return (
        <>
            <Input
                className="rounded-full"
                placeholder="Aa"
                ref={inputRef}
                onKeyUp={handleKeyPress}
            />
            <span className='ml-3 mt-1'
            >
                <EmojiPicker
                    onChange={handleEmojiSelect}
                />
            </span>

        </>
    )
}