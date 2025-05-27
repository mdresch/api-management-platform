"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Globe,
  Shield,
  Users,
  BarChart3,
  Brain,
  Star,
  Play,
  Rocket,
  TrendingUp,
  Clock,
  DollarSign,
  Building,
  Activity,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const features = [
  {
    icon: Code2,
    title: "Visual API Design Studio",
    description: "Build APIs with our intuitive drag-and-drop interface. Generate OpenAPI specs automatically.",
    color: "bg-blue-500",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Leverage machine learning for anomaly detection, predictive analytics, and smart recommendations.",
    color: "bg-purple-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption, RBAC, OAuth2, and compliance with GDPR, SOC 2, and ISO 27001.",
    color: "bg-green-500",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor performance, track usage, and get actionable insights with live dashboards.",
    color: "bg-orange-500",
  },
  {
    icon: Users,
    title: "Developer Experience",
    description: "Comprehensive documentation, SDKs, testing tools, and community support.",
    color: "bg-indigo-500",
  },
  {
    icon: Globe,
    title: "API Marketplace",
    description: "Discover, publish, and monetize APIs in our global marketplace ecosystem.",
    color: "bg-pink-500",
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Accelerate Development",
    description: "Reduce API development time by 70% with visual design tools and AI assistance.",
    metric: "70% faster",
  },
  {
    icon: DollarSign,
    title: "Increase Revenue",
    description: "Monetize your APIs and create new revenue streams through our marketplace.",
    metric: "$2.3M avg revenue",
  },
  {
    icon: Shield,
    title: "Ensure Compliance",
    description: "Meet industry standards with built-in governance and security controls.",
    metric: "99.9% compliance",
  },
  {
    icon: Clock,
    title: "Reduce Time to Market",
    description: "Launch APIs faster with automated testing, documentation, and deployment.",
    metric: "60% faster launch",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    company: "TechCorp",
    content:
      "This platform transformed our API strategy. We've reduced development time by 65% and improved our developer experience significantly.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Engineering, DataFlow",
    company: "DataFlow",
    content:
      "The AI insights have been game-changing. We caught performance issues before they impacted customers and optimized our APIs proactively.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "Emily Johnson",
    role: "API Product Manager, CloudTech",
    company: "CloudTech",
    content:
      "The marketplace feature opened up new revenue streams we never thought possible. We're now generating $500K monthly from API subscriptions.",
    rating: 5,
    avatar: "EJ",
  },
]

const pricingPlans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams getting started with API management",
    features: ["Up to 10 APIs", "Basic analytics", "Community support", "Standard security", "API documentation"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$199",
    period: "/month",
    description: "Advanced features for growing organizations",
    features: [
      "Up to 100 APIs",
      "Advanced analytics",
      "Priority support",
      "Enterprise security",
      "AI insights",
      "Custom integrations",
      "Marketplace access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large-scale deployments",
    features: [
      "Unlimited APIs",
      "Custom analytics",
      "24/7 dedicated support",
      "Advanced security",
      "White-label options",
      "On-premise deployment",
      "Custom SLAs",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const stats = [
  { label: "APIs Managed", value: "50,000+", icon: Code2 },
  { label: "Developers", value: "25,000+", icon: Users },
  { label: "Organizations", value: "1,200+", icon: Building },
  { label: "Uptime", value: "99.99%", icon: Activity },
]

export default function MarketingPage() {
  const [email, setEmail] = useState("")

  const handleDemoRequest = () => {
    // In a real app, this would submit to your backend
const [email, setEmail] = useState("")

  const handleDemoRequest = () => {
    // In a real app, this would submit to your backend and handle errors
    try {
      // TODO: Implement proper backend submission
      // For now, we'll just log the email
      console.log("Demo requested for:", email)
      // Redirect to demo page
      window.location.href = "/demo"
    } catch (error) {
      // TODO: Implement proper error handling and logging
      console.error("Error requesting demo:", error)
    }
  }

  return (
    // Redirect to demo page
    window.location.href = "/demo"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Globe className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold">APIFlow</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-sm font-medium hover:text-primary">
                Features
              </Link>
              <Link href="#pricing" className="text-sm font-medium hover:text-primary">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
                Customers
              </Link>
              <Link href="/docs" className="text-sm font-medium hover:text-primary">
                Docs
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/demo">
                  <Play className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
              <Rocket className="mr-1 h-3 w-3" />
              Now with AI-Powered API Design
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              The Complete{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                API Management
              </span>{" "}
              Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Design, build, secure, and scale APIs with our comprehensive Centre of Excellence platform. Accelerate
              development, ensure compliance, and create new revenue streams.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex w-full max-w-md items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleDemoRequest} size="lg">
                  Get Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
                Setup in 5 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage APIs at scale
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From design to deployment, monitoring to monetization - we've got you covered.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.color} text-white mb-4`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Measurable business impact</h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of organizations already seeing results with our platform.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by industry leaders</h2>
            <p className="mt-4 text-lg text-gray-600">
              See what our customers are saying about their experience with APIFlow.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the plan that's right for your organization. All plans include our core features.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your API strategy?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Join thousands of developers and organizations already using APIFlow to build better APIs faster.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/demo">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Live Demo
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Globe className="h-4 w-4" />
                </div>
                <span className="text-xl font-bold">APIFlow</span>
              </div>
              <p className="text-gray-400 mb-4">The complete API management platform for modern organizations.</p>
              <div className="flex space-x-4">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Github className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="hover:text-white">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@apiflow.com
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">© 2024 APIFlow. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/security" className="hover:text-white">
                Security
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
