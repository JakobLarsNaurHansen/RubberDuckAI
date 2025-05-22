import type { FC } from "react";

interface ChatBoxProps {
  setDuckIsThinking: (thinking: boolean) => void;
}

declare const ChatBox: FC<ChatBoxProps>;
export default ChatBox;