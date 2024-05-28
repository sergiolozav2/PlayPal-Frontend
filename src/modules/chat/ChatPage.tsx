import { ModuleTitle } from "../core/components/ModulesLayout";
import React, { useEffect, useState } from "react";
import { LoadingModule } from "../core/components/LoadingModule";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdSend } from "react-icons/md";

type MessageType = {
  fromMe: boolean;
  message: string;
};

export function ChatPage() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const time = setTimeout(async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setLoading(false);
    }, 0);
    return () => {
      clearTimeout(time);
    };
  }, []);

  function handleSendMessage() {
    const message = {
      fromMe: true,
      message: text,
    };
    setText("");
    setMessages([...messages, message]);
  }
  return (
    <div className="flex h-screen min-h-screen w-full max-w-[100vw] flex-col">
      <ModuleTitle separator={false}>
        <div className="flex items-center">Chat</div>
      </ModuleTitle>
      <div className="fade-in-animation flex h-full flex-col gap-5 pb-[60px] pt-3">
        {loading && <LoadingModule />}
        {!loading && (
          <div className="relative flex h-full flex-1 flex-col bg-muted">
            <div className="absolute inset-0 bottom-11 overflow-auto">
              <div className="flex h-screen flex-col gap-3 px-4 pt-4">
                <div className="w-fit max-w-[80%] rounded-xl rounded-bl-none bg-background px-4 py-2 text-foreground">
                  <div className="whitespace-pre-line text-sm">
                    <p>
                      {
                        "Buenas noches! Soy tu asistente personal, puedes consultarme sobre:\n- Dudas\n- Reclamos\n- Recomendaciones"
                      }
                    </p>
                  </div>
                </div>
                <React.Fragment>
                  {messages &&
                    messages.map((message, index) => (
                      <div
                        key={index}
                        className={`${message.fromMe ? "ml-auto rounded-br-none bg-primary_2/85 text-primary-foreground" : "rounded-bl-none bg-background text-foreground"} w-fit max-w-[80%] rounded-xl px-4 py-2`}
                      >
                        <div className="whitespace-pre-line text-sm">
                          <p>{message.message}</p>
                        </div>
                      </div>
                    ))}
                </React.Fragment>
              </div>
            </div>
            <div className="mt-auto flex h-11 items-center py-0.5 pl-3">
              <Input
                className="mr-0.5 rounded-xl"
                placeholder="Mensaje"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <Button variant="ghost" size="icon" onClick={handleSendMessage}>
                <MdSend />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
