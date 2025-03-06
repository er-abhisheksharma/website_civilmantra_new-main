import type React from "react"
import { Award, Clock, Users, Shield, TrendingUp, CheckCircle } from "lucide-react"

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex items-start p-4">
      <div className="mr-4 text-primary mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award size={24} />,
      title: "Industry Expertise ",
      description:
        "With over 9 years of experience, our team brings unparalleled knowledge to every project we undertake.",
    },
    {
      icon: <Clock size={24} />,
      title: "Detailed design Engineering",
      description:
        "We provide comprehensive design solutions that ensure structural integrity, cost efficiency and long-term sustainability.",
    },
    {
      icon: <Users size={24} />,
      title: "Pre Tender Engineering",
      description:
        "Our pre-tender engineering services help clients make informed decisions by conducting feasibility studies, cost estimations, risk assessments, and technical evaluations before bidding.",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Project Management ",
      description: "With a focus on timely execution and budget control, we offer end-to-end project management services.",
    },
    {
      icon: <Shield size={24} />,
      title: "Safety Consultant",
      description:
        "We maintain rigorous safety protocols that exceed industry standards to protect workers and the public.",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Authority Engineering",
      description: "As an authority engineering consultant, we act as a bridge between project stakeholders and regulatory bodies.",
    },
  ]

  return (
    <section className="py-10 ">
      <div className="lg:max-w-[80vw] text-center mx-auto mb-10 px-4 1600px:hidden">
          <h1 className="unihead my-4 ">Why Choose Us?</h1>
          <p className="unip ">
          We combine technical expertise with innovative thinking to deliver civil engineering projects that stand
          the test of time.
          </p>
        </div>
      <div className="container mx-auto max-w-[88vw] px-4">
        <div className="flex flex-col xl:flex-row items-center">
          <div className="xl:w-1/2 mb-10 lg:mb-0 xl:pr-12">
            <div className="relative">
              <img
                src="/images/Home/BusinessHelp/Dwarka.jpeg?height=600&width=800"
                alt="Civil engineering project"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white py-4 px-8 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold">9+ Years</p>
                <p>of Excellence</p>
              </div>
            </div>
          </div>

          <div className="xl:w-1/2">
           <div className="max-[1600px]:hidden">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine technical expertise with innovative thinking to deliver civil engineering projects that stand
              the test of time.
            </p>
           </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 2xl:gap-6 ">
              {features.map((feature, index) => (
                <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}