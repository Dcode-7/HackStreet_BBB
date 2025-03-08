import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardContent, TabContent } from "@/components/ui/card-content";
import {
  Users,
  Handshake,
  UserPlus,
  MessageSquare,
  Search,
  BookOpen,
  GraduationCap,
  Award,
  Calendar,
  Filter,
  Mail,
  Phone,
  MessageCircle,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const mentors = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior UX Designer",
    expertise: ["UX/UI Design", "User Research", "Figma"],
    rating: 4.9,
    reviews: 42,
    image: "https://i.pravatar.cc/150?img=32",
    available: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Full Stack Developer",
    expertise: ["React", "Node.js", "AWS"],
    rating: 4.8,
    reviews: 36,
    image: "https://i.pravatar.cc/150?img=12",
    available: true,
  },
  {
    id: 3,
    name: "Emma Williams",
    title: "Marketing Consultant",
    expertise: ["Digital Marketing", "SEO", "Content Strategy"],
    rating: 4.7,
    reviews: 28,
    image: "https://i.pravatar.cc/150?img=5",
    available: false,
  },
];

const events = [
  {
    id: 1,
    title: "Freelancer Meetup",
    date: "May 15, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "Virtual",
    attendees: 78,
    description:
      "Connect with fellow freelancers and share experiences in this virtual networking event.",
  },
  {
    id: 2,
    title: "Gig Economy Summit",
    date: "June 2-3, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Convention Center, New York",
    attendees: 250,
    description:
      "A two-day conference focused on the future of independent work and the gig economy.",
  },
  {
    id: 3,
    title: "Women in Tech Webinar",
    date: "May 22, 2023",
    time: "12:00 PM - 1:30 PM",
    location: "Virtual",
    attendees: 120,
    description:
      "Special webinar featuring successful women in tech sharing their career journeys.",
  },
];

const courses = [
  {
    id: 1,
    title: "Advanced Web Development",
    provider: "Tech Academy",
    duration: "8 weeks",
    level: "Intermediate",
    rating: 4.8,
    enrolled: 1245,
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Freelance Business Fundamentals",
    provider: "Business School Online",
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.6,
    enrolled: 890,
    price: "$99",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass",
    provider: "Marketing Pros",
    duration: "10 weeks",
    level: "Advanced",
    rating: 4.9,
    enrolled: 2150,
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const forumTopics = [
  {
    id: 1,
    title: "How to handle difficult clients?",
    author: "Jessica K.",
    replies: 42,
    views: 1248,
    lastActivity: "2 hours ago",
    tags: ["Client Management", "Communication"],
  },
  {
    id: 2,
    title: "Tax deductions every freelancer should know",
    author: "Mike T.",
    replies: 56,
    views: 2310,
    lastActivity: "1 day ago",
    tags: ["Taxes", "Finance"],
  },
  {
    id: 3,
    title: "Best tools for time tracking and invoicing",
    author: "Alex W.",
    replies: 38,
    views: 1805,
    lastActivity: "3 days ago",
    tags: ["Tools", "Productivity"],
  },
  {
    id: 4,
    title: "How to find clients during economic downturns",
    author: "Sophia M.",
    replies: 67,
    views: 3140,
    lastActivity: "5 days ago",
    tags: ["Client Acquisition", "Marketing"],
  },
];

const grants = [
  {
    id: 1,
    title: "Women Entrepreneurs Grant Program",
    organization: "National Business Foundation",
    amount: "$5,000 - $25,000",
    deadline: "June 30, 2023",
    eligibility: "Women-owned businesses operating for at least 1 year",
    description:
      "Provides financial support to women entrepreneurs looking to scale their business.",
  },
  {
    id: 2,
    title: "Creative Industry Innovation Fund",
    organization: "Arts Council",
    amount: "Up to $10,000",
    deadline: "July 15, 2023",
    eligibility: "Freelancers in creative industries with innovative projects",
    description:
      "Supports innovative projects in design, media, and other creative fields.",
  },
  {
    id: 3,
    title: "Tech Startup Diversity Grant",
    organization: "Tech Forward Initiative",
    amount: "$15,000 - $50,000",
    deadline: "August 1, 2023",
    eligibility: "Women and minority-owned tech startups",
    description:
      "Aims to increase diversity in the tech industry by supporting underrepresented founders.",
  },
];

const Networking = () => {
  const [activeTab, setActiveTab] = useState("mentorship");
  const [selectedMentor, setSelectedMentor] = useState<number | null>(null);
  const { toast } = useToast();

  const handleConnectMentor = (mentorId: number) => {
    setSelectedMentor(mentorId);
    toast({
      title: "Connection Request Sent",
      description: "The mentor will respond to your request shortly.",
      duration: 5000,
    });
  };

  const handleEventRegistration = (eventId: number) => {
    toast({
      title: "Registration Successful",
      description:
        "You have been registered for the event. Details will be sent to your email.",
      duration: 5000,
    });
  };

  const handleCourseEnrollment = (courseId: number) => {
    toast({
      title: "Enrollment Pending",
      description:
        "Your course enrollment is being processed. You'll receive confirmation soon.",
      duration: 5000,
    });
  };

  const handleForumPost = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Post Submitted",
      description: "Your question has been posted to the community forum.",
      duration: 5000,
    });
  };

  const handleGrantApplication = (grantId: number) => {
    toast({
      title: "Application Started",
      description:
        "You've started an application. Complete all required information before the deadline.",
      duration: 5000,
    });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-3xl font-bold">Networking & Mentorship</h1>
        <p className="text-muted-foreground">
          Connect with mentors, attend events, develop skills, and engage with
          the community.
        </p>
      </motion.div>

      <Tabs
        defaultValue={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-4">
          <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="skills">Skill Development</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="grants">Grants & Funding</TabsTrigger>
        </TabsList>

        <TabsContent value="mentorship" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search mentors by name, expertise, or industry..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button size="sm">
                <UserPlus className="mr-2 h-4 w-4" />
                Become a Mentor
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor) => (
              <Card
                key={mentor.id}
                className="overflow-hidden hover:border-primary/50 transition-all"
              >
                <CardHeader className="p-0">
                  <div className="relative h-32 bg-gradient-to-r from-primary/20 to-primary/10">
                    {mentor.available && (
                      <Badge className="absolute top-2 right-2 bg-green-500">
                        Available
                      </Badge>
                    )}
                  </div>
                  <div className="px-6 pt-0 pb-4 -mt-12 flex flex-col items-center">
                    <div className="h-24 w-24 rounded-full border-4 border-background overflow-hidden">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardTitle className="mt-2 text-center">
                      {mentor.name}
                    </CardTitle>
                    <CardDescription className="text-center">
                      {mentor.title}
                    </CardDescription>
                    <div className="flex items-center mt-1">
                      <span className="text-amber-500 mr-1">★</span>
                      <span className="text-sm font-medium">
                        {mentor.rating}
                      </span>
                      <span className="text-muted-foreground text-xs ml-1">
                        ({mentor.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <div className="px-6 py-3 border-t">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {mentor.expertise.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-primary/5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() =>
                        setSelectedMentor(
                          mentor.id === selectedMentor ? null : mentor.id
                        )
                      }
                    >
                      View Profile
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => handleConnectMentor(mentor.id)}
                    >
                      Connect
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline">Browse All Mentors</Button>
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search events by title, date, or location..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Calendar View
              </Button>
              <Button size="sm">
                <Bell className="mr-2 h-4 w-4" />
                Add Event Alert
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden border hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Event Date & Location Section */}
                  <div className="md:w-1/4 p-6 bg-primary/10 flex flex-col justify-center items-center text-center">
                    <div className="text-2xl font-bold">
                      {event.date.split(",")[0]}
                    </div>
                    <div className="text-muted-foreground">{event.time}</div>
                    <Badge className="mt-2">{event.location}</Badge>
                  </div>

                  {/* Event Details Section */}
                  <div className="md:w-3/4 p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {event.description}
                        </p>
                      </div>
                      <div className="flex items-start mt-2 md:mt-0">
                        <Badge
                          variant="outline"
                          className="bg-primary/5 text-sm"
                        >
                          {event.attendees} Attending
                        </Badge>
                      </div>
                    </div>

                    {/* Buttons shifted to the right */}
                    <div className="flex justify-end gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        Add to Calendar
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary text-white"
                        onClick={() => handleEventRegistration(event.id)}
                      >
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <CardContent
              title="Host Your Own Event"
              className="bg-primary/5 border"
            >
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="md:w-2/3">
                  <h3 className="text-lg font-bold">
                    Host Your Own Networking Event
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    Create and host virtual or in-person networking events for
                    the community.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-end">
                  <Button>Create Event</Button>
                </div>
              </div>
            </CardContent>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search courses, certificates, or skills..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button size="sm">
                <BookOpen className="mr-2 h-4 w-4" />
                My Learning
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge>{course.level}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    {course.provider} • {course.duration}
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="text-amber-500 mr-1">★</span>
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-muted-foreground text-xs ml-1">
                      ({course.enrolled} enrolled)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold">{course.price}</div>
                    <Button
                      onClick={() => handleCourseEnrollment(course.id)}
                      size="sm"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <CardContent title="Skill Path" className="border bg-primary/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">
                    Skill Path: Freelance Web Developer
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    A curated learning path to become a successful freelance web
                    developer
                  </p>
                </div>
              </div>
              <Progress value={35} className="mb-2" />
              <div className="text-sm text-right text-muted-foreground">
                4 of 12 courses completed
              </div>
              <Button variant="outline" className="w-full mt-4">
                Continue Learning
              </Button>
            </CardContent>

            <CardContent title="Certifications" className="border bg-primary/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Certifications Directory</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse industry-recognized certifications to boost your
                    credentials
                  </p>
                </div>
              </div>
              <Button className="w-full mt-4">Browse Certifications</Button>
            </CardContent>
          </div>
        </TabsContent>

        <TabsContent value="community" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <CardContent title="Community Forum" className="border h-full">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold">Community Forum</h3>
                  <Button size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    New Post
                  </Button>
                </div>

                <div className="space-y-4">
                  {forumTopics.map((topic) => (
                    <div
                      key={topic.id}
                      className="flex flex-col border rounded-md p-4 hover:border-primary/50 transition-all cursor-pointer"
                    >
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">{topic.title}</h4>
                        <div className="text-sm text-muted-foreground">
                          {topic.lastActivity}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <span>Posted by {topic.author}</span>
                        <span className="mx-2">•</span>
                        <span>{topic.replies} replies</span>
                        <span className="mx-2">•</span>
                        <span>{topic.views} views</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {topic.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-primary/5 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-6">
                  <Button variant="outline">View All Topics</Button>
                </div>
              </CardContent>
            </div>

            <div>
              <CardContent title="Ask the Community" className="border mb-6">
                <h3 className="text-lg font-bold mb-4">Ask the Community</h3>
                <form onSubmit={handleForumPost} className="space-y-4">
                  <div>
                    <Label htmlFor="question-title">Question Title</Label>
                    <Input
                      id="question-title"
                      placeholder="What's your question about?"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="question-body">Details</Label>
                    <textarea
                      id="question-body"
                      className="w-full min-h-[120px] rounded-md border border-input p-3 mt-1"
                      placeholder="Provide more details about your question..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="question-tags">Tags</Label>
                    <Input
                      id="question-tags"
                      placeholder="e.g., finance, clients, tools"
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Post Question
                  </Button>
                </form>
              </CardContent>

              <CardContent
                title="Women-Focused Groups"
                className="border bg-primary/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Women-Focused Communities</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect with women-only groups for specialized support
                    </p>
                  </div>
                </div>
                <Button className="w-full mt-2">Browse Communities</Button>
              </CardContent>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="grants" className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search grants, funding opportunities..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm">Eligibility Check</Button>
            </div>
          </div>

          <div className="space-y-4">
            {grants.map((grant) => (
              <Card
                key={grant.id}
                className="overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{grant.title}</h3>
                      <div className="text-muted-foreground">
                        By {grant.organization}
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <Badge variant="secondary" className="font-medium">
                        {grant.amount}
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="mb-2">{grant.description}</p>
                    <div className="bg-primary/5 rounded-md p-3 mt-2">
                      <div className="text-sm">
                        <span className="font-medium">Eligibility:</span>{" "}
                        {grant.eligibility}
                      </div>
                      <div className="text-sm mt-1">
                        <span className="font-medium">Deadline:</span>{" "}
                        {grant.deadline}
                      </div>
                    </div>
                  </div>

                  {/* Buttons aligned to the right */}
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline">View Details</Button>
                    <Button
                      className="bg-primary text-white"
                      onClick={() => handleGrantApplication(grant.id)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <CardContent title="Grant Assistance" className="border bg-primary/5">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="md:w-2/3">
                <h3 className="text-lg font-bold">
                  Grant Application Assistance
                </h3>
                <p className="text-muted-foreground mt-1">
                  Get help with your grant applications from experienced
                  mentors.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-end">
                <Button>Request Assistance</Button>
              </div>
            </div>
          </CardContent>

          <div className="grid gap-6 md:grid-cols-2">
            <CardContent title="Application Tips" className="border">
              <h3 className="text-lg font-bold mb-4">Grant Application Tips</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  Start your application early - at least 2 weeks before the
                  deadline
                </li>
                <li>Carefully read eligibility requirements before applying</li>
                <li>Prepare your business documentation in advance</li>
                <li>Be specific about how you'll use the funds</li>
                <li>Include measurable goals and outcomes in your proposal</li>
              </ul>
            </CardContent>

            <CardContent title="Upcoming Webinars" className="border">
              <h3 className="text-lg font-bold mb-4">Upcoming Webinars</h3>
              <div className="space-y-3">
                <div className="rounded-md border p-3">
                  <div className="font-medium">Grant Writing Workshop</div>
                  <div className="text-sm text-muted-foreground">
                    May 12, 2023 • 2:00 PM EST
                  </div>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium">
                    Funding for Creative Entrepreneurs
                  </div>
                  <div className="text-sm text-muted-foreground">
                    May 18, 2023 • 1:00 PM EST
                  </div>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium">
                    Small Business Loans vs. Grants
                  </div>
                  <div className="text-sm text-muted-foreground">
                    May 25, 2023 • 11:00 AM EST
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Networking;
