import { BookOpen, Brain, HeartPulse, Globe } from "lucide-react"

export const researchInterests = [
  {
    title: "Machine Learning and Deep Learning",
    icon: <Brain className="h-6 w-6 text-white" />,
    description:
      "Exploring advanced neural network architectures and optimization techniques for solving complex computational problems. Focused on improving model interpretability and reducing computational requirements.",
  },
  {
    title: "Natural Language Processing (NLP)",
    icon: <BookOpen className="h-6 w-6 text-white" />,
    description:
      "Researching semantic understanding, multilingual models, and context-aware text generation. Interested in developing more efficient fine-tuning methods for domain-specific applications.",
  },
  {
    title: "Data-Driven Insights for Education and Healthcare",
    icon: <HeartPulse className="h-6 w-6 text-white" />,
    description:
      "Applying data science to improve educational outcomes and healthcare delivery. Developing predictive models for early intervention and personalized learning/treatment plans.",
  },
  {
    title: "AI Applications for Social Good",
    icon: <Globe className="h-6 w-6 text-white" />,
    description:
      "Creating AI solutions that address social challenges and promote equity. Focused on building accessible technology that can scale to underserved communities and regions.",
  },
]

