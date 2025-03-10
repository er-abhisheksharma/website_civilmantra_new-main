"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface TeamMember {
  id: string
  name: string
  position: string
  bio: string
  imageUrl: string
  department?: string
  email?: string
  linkedin?: string
  fullBio?: string
}

// Sample data - replace with your actual data
const managingDirector: TeamMember = {
  id: "md",
  name: "Shusheel Bhardwaj",
  position: "Managing Director",
  bio: "Susheel Bhardwaj has transformed our company with her visionary leadership and strategic insight. With over 15 years of industry experience, she has successfully guided our organization through significant growth and innovation.",
  imageUrl: "/images/AboutUs/keymembers/1.JPG?height=400&width=300",
  email: "alexandra@company.com",
  linkedin: "https://linkedin.com/in/alexandra",
  fullBio:
    "Alexandra Johnson joined our company in 2015 and has been instrumental in our expansion into international markets. She holds an MBA from Harvard Business School and has previously led successful ventures in technology and finance sectors. Under her leadership, our company has seen a 300% growth in revenue and has been recognized as an industry leader in innovation.",
}

const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "Sumit Bhati",
    position: "Chief operating officer",
    bio: "Michael leads our technology initiatives with expertise in AI and cloud infrastructure.",
    imageUrl: "/images/AboutUs/keymembers/123.JPG?height=300&width=300",
    department: "",
    email: "michael@company.com",
    linkedin: "https://linkedin.com/in/michael",
  },
  {
    id: "tm2",
    name: "Bhaskar Lingam",
    position: "Business Development Executive Head",
    bio: "Sarah oversees our financial strategy and has helped secure multiple rounds of funding.",
    imageUrl: "/images/AboutUs/keymembers/Lingam1.jpg?height=300&width=300",
    department: "BDE",
    email: "sarah@company.com",
    linkedin: "https://linkedin.com/in/sarah",
  },
  {
    id: "tm3",
    name: "Maninder Kumar",
    position: "Chief financial officer Accounts",
    bio: "David ensures smooth day-to-day operations and implements efficient business processes.",
    imageUrl: "/images/AboutUs/keymembers/Manindedr Kumar.JPG?height=300&width=300",
    department: "Accounts",
    email: "david@company.com",
    linkedin: "https://linkedin.com/in/david",
  },
  {
    id: "tm5",
    name: "Sunil Kumar",
    position: "Senior Vice president",
    bio: "James has consistently exceeded sales targets and built strong client relationships.",
    imageUrl: "/images/AboutUs/keymembers/Sunil K.JPG?height=300&width=300",
    department: "",
    email: "james@company.com",
    linkedin: "https://linkedin.com/in/james",
  },
  {
    id: "tm6",
    name: "Rajveer Dangi",
    position: "Vice president",
    bio: "Aisha has transformed our talent acquisition strategy and workplace culture.",
    imageUrl: "/images/AboutUs/keymembers/Rajveer Dangi.JPG?height=300&width=300",
    department: "",
    email: "aisha@company.com",
    linkedin: "https://linkedin.com/in/aisha",
  },
  {
    id: "tm5",
    name: "Akshay Kumar",
    position: "Business Unit Head Highway",
    bio: "James has consistently exceeded sales targets and built strong client relationships.",
    imageUrl: "/images/AboutUs/keymembers/akshay.JPG?height=300&width=300",
    department: "Highway",
    email: "james@company.com",
    linkedin: "https://linkedin.com/in/james",
  },
  {
    id: "tm5",
    name: "Ankush Sharma",
    position: "Business Unit Head Structure",
    bio: "James has consistently exceeded sales targets and built strong client relationships.",
    imageUrl: "/images/AboutUs/keymembers/Ankush.JPG?height=300&width=300",
    department: "Structure",
    email: "james@company.com",
    linkedin: "https://linkedin.com/in/james",
  },
  {
    id: "tm5",
    name: "Shashank Gupta",
    position: "Business Unit Head",
    bio: "James has consistently exceeded sales targets and built strong client relationships.",
    imageUrl: "/images/AboutUs/keymembers/Shshank Gupta.JPG?height=300&width=300",
    department: "",
    email: "james@company.com",
    linkedin: "https://linkedin.com/in/james",
  }
]

const MDProfile = ({ md }: { md: TeamMember }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-1">
      <div className="flex flex-col md:flex-row rounded-xl bg-background overflow-hidden">
        <div className="md:w-2/5 relative h-[500px] overflow-hidden">
          <Image src={md.imageUrl || "/placeholder.svg"} alt={md.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
          <div className="absolute bottom-0 left-0 p-4 md:hidden">
            <h2 className="text-2xl font-bold text-white">{md.name}</h2>
            <p className="text-white/80">{md.position}</p>
          </div>
        </div>

        <div className="md:w-3/5 p-6 md:p-8 flex flex-col my-auto items-center">
          <div>
            <div className="hidden md:block mb-4">
              <h2 className="text-3xl font-bold">{md.name}</h2>
              <p className="text-xl text-muted-foreground">{md.position}</p>
            </div>

            <p className="mt-4 text-base md:text-lg">{md.bio}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {md.email && (
              <Button variant="outline" size="sm" className="gap-2">
                <Mail size={16} />
                <span>Email</span>
              </Button>
            )}
            {md.linkedin && (
              <Button variant="outline" size="sm" className="gap-2">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </Button>
            )}
            <Dialog>
              <DialogTrigger asChild>
                
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>{md.name}</DialogTitle>
                  <DialogDescription>{md.position}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="relative h-[200px] rounded-lg overflow-hidden">
                    <Image src={md.imageUrl || "/placeholder.svg"} alt={md.name} fill className="object-cover" />
                  </div>
                  <p>{md.fullBio || md.bio}</p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full bg-background hover:shadow-lg transition-all duration-300 group">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={member.imageUrl || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {member.department && (
            <Badge className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground">
              {member.department}
            </Badge>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{member.position}</p>
          <p className="text-sm">{member.bio}</p>

          <div className="mt-4 flex gap-2">
            {member.email && (
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Mail size={18} />
              </Button>
            )}
            {member.linkedin && (
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Linkedin size={18} />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function ManagementTeam() {
  return (
    <div className="w-full py-16 bg-background mt-[70px]">
      <div className="container px-4 max-w-[88vw] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Our Management</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the talented individuals who drive our vision and success
          </p>
        </div>

        <section className="mb-16">
          <MDProfile md={managingDirector} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="h-px flex-1 bg-border"></span>
            <span className="px-6">Our Team</span>
            <span className="h-px flex-1 bg-border"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}