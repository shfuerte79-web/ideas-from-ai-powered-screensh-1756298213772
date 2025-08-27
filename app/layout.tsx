import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Snap to Speak",
    "one_liner": "Convert screenshots to audio narration for the visually impaired.",
    "why_now": "Increased focus on accessibility tools and inclusive design.",
    "novel_mechanism": "Utilizing OCR followed by text-to-speech, custom-trained for diverse accents and speeds.",
    "ai_stack": [
      "GPT-4",
      "RAG",
      "Vision",
      "Speech"
    ],
    "edge_use_cases": [
      "Educational tools for students with visual impairments.",
      "Real-time translation of on-screen text for international travelers."
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "OCR functionality",
        "Text-to-speech integration",
        "User interface"
      ],
      "tools": [
        "React",
        "Firebase",
        "Twilio",
        "Whisper"
      ],
      "data_bootstrap": [
        "use sample screenshots to test OCR and TTS",
        "public accessibility datasets"
      ],
      "risk": [
        "technical limitations in OCR accuracy",
        "user engagement rates"
      ],
      "mitigation": [
        "focus on common languages and fonts",
        "user feedback loop for continuous improvement"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live demo showcasing instant conversion.",
        "Testimonials from users with accessibility needs."
      ],
      "channels": [
        "ProductHunt",
        "Instagram",
        "Accessibility forums"
      ],
      "pricing": {
        "free": "Limited daily usage",
        "pro": "$5/month for unlimited access",
        "business": "$20/month for teams"
      }
    },
    "moat": [
      "Strong community of advocacy and collaboration with accessibility organizations",
      "Continuous improvement through user-generated content"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 6,
      "defensibility": 7
    },
    "total_score": 28,
    "reasoning": "This targets underrepresented user needs, providing a unique service that on-screen text tools overlook."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}