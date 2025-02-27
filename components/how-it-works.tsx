import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Home, MessageSquare, CreditCard } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-blue-500" />,
      title: "Search Properties",
      description: "Browse through our extensive list of verified properties that match your preferences and budget.",
    },
    {
      icon: <Home className="h-12 w-12 text-blue-500" />,
      title: "Choose Your Home",
      description:
        "Select the perfect property that suits your needs, whether it's for a short stay or long-term rental.",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-blue-500" />,
      title: "Contact the Owner",
      description: "Communicate directly with property owners to ask questions, negotiate terms, or schedule viewings.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-blue-500" />,
      title: "Secure Booking",
      description:
        "Once you've found your ideal property, make a secure payment through our platform to confirm your booking.",
    },
  ]

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How Ekrili Works</h2>
          <p className="mt-4 text-xl text-gray-600">Find your perfect rental property in just a few simple steps</p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-center">{step.icon}</div>
                  <CardTitle className="text-lg font-medium text-center mt-4">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

