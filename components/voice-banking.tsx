"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, MicOff, Volume2 } from "lucide-react"

export function VoiceBanking() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [response, setResponse] = useState("")

  const startListening = () => {
    setIsListening(true)
    setTranscript("Listening...")
    // Simulate voice recognition
    setTimeout(() => {
      setTranscript("What's my balance?")
      setResponse("Your current balance is $12,847.50 and 795.43 Pi")
      setIsListening(false)
    }, 2000)
  }

  const stopListening = () => {
    setIsListening(false)
    setTranscript("")
    setResponse("")
  }

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          <Volume2 className="h-5 w-5 text-primary" />
          Voice Banking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <Button
            size="lg"
            variant={isListening ? "destructive" : "default"}
            className="w-20 h-20 rounded-full"
            onClick={isListening ? stopListening : startListening}
          >
            {isListening ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
          </Button>
          <p className="text-sm text-muted-foreground mt-3">{isListening ? "Listening..." : "Tap to speak"}</p>
        </div>
        {transcript && (
          <div className="bg-secondary p-3 rounded-lg">
            <p className="text-sm font-semibold text-foreground mb-1">You said:</p>
            <p className="text-sm text-muted-foreground">{transcript}</p>
          </div>
        )}
        {response && (
          <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
            <p className="text-sm font-semibold text-foreground mb-1">Assistant:</p>
            <p className="text-sm text-foreground">{response}</p>
          </div>
        )}
        <div className="text-xs text-muted-foreground">
          Try saying: "What's my balance?", "Send money", "Recent transactions"
        </div>
      </CardContent>
    </Card>
  )
}
