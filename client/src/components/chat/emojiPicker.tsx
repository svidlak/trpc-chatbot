import { SmileIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import Picker from "@emoji-mart/react"
import data from "@emoji-mart/data"

interface Props {
    onChange: (value: string) => void;
}

export const EmojiPicker = ({ onChange }: Props) => {
    return (
        <Popover>
            <PopoverTrigger>
                <SmileIcon className="h-5 w-5 text-muted-foreground hover:text-foreground transition" />
            </PopoverTrigger>
            <PopoverContent
                className="w-full p-1">
                <Picker
                    emojiSize={18}
                    theme="dark"
                    data={data}
                    maxFrequentRows={1}
                    onEmojiSelect={(emoji: { native: string; }) => onChange(emoji.native)}
                />
            </PopoverContent>
        </Popover>
    )
}