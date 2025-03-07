import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Search() {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    console.log("Searching for:", query)
    // Implement search logic here
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md"
      />
      <Button onClick={handleSearch} className="w-full max-w-md">
        Search
      </Button>
    </div>
  )
}
