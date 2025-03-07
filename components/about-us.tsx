import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Ekrili</h2>
          <p className="mt-4 text-xl text-gray-600">Learn more about our mission, vision, and values</p>
        </div>
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium text-center mt-4">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                At Ekrili, our mission is to connect students with affordable and comfortable housing options, making the search for student accommodation easy and efficient.
              </p>
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-center mt-4">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600">
                We envision a world where every student can find a safe and welcoming place to live, no matter where they are studying.
              </p>
            </CardContent>
          </Card>
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-center mt-4">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600">
                <li>Integrity: We believe in honesty and transparency in all our dealings.</li>
                <li>Community: We strive to build a supportive community for students and homeowners.</li>
                <li>Innovation: We are constantly looking for ways to improve our platform and services.</li>
                <li>Excellence: We are committed to providing the best possible experience for our users.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
