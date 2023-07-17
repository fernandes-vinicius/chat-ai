'use client'

import { useChat } from 'ai/react'

import { ScrollArea } from './ui/scroll-area'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat', // default
  })

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className="flex gap-2 text-slate-600 text-sm mb-4"
              >
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>VF</AvatarFallback>
                    <AvatarImage src="https://github.com/fernandes-vinicius.png" />
                  </Avatar>
                )}

                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="/ai.jpg" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-800">
                    {message.role === 'user' ? 'User' : 'AI'}
                  </span>
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="flex flex-1 gap-2" onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
