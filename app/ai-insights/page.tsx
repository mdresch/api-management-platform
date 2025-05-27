"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Brain,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  MessageSquare,
  Send,
  Zap,
  Target,
  Clock,
  Users,
  Activity,
  BarChart3,
  CheckCircle,
  XCircle,
} from "lucide-react"
import { useState } from "react"

const anomalies = [
  {
    id: "1",
    type: "traffic_spike",
    severity: "high",
    api: "Payment Processing API",
    description: "Unusual traffic spike detected - 300% above normal",
    timestamp: "2024-01-15 14:30:00",
    confidence: 95,
    impact: "High latency observed",
    recommendation: "Scale up infrastructure or implement rate limiting",
  },
  {
    id: "2",
    type: "error_rate",
    severity: "medium",
    api: "User Management API",
    description: "Error rate increased to 2.3% (normal: 0.1%)",
    timestamp: "2024-01-15 13:45:00",
    confidence: 87,
    impact: "User authentication failures",
    recommendation: "Check database connections and review recent deployments",
  },
  {
    id: "3",
    type: "response_time",
    severity: "low",
    api: "Analytics API",
    description: "Response time degradation in data aggregation endpoints",
    timestamp: "2024-01-15 12:15:00",
    confidence: 72,
    impact: "Slower dashboard loading",
    recommendation: "Optimize database queries or add caching layer",
  },
]

const predictions = [
  {
    api: "User Management API",
    metric: "Traffic",
    prediction: "Expected 40% increase next week",
    confidence: 89,
    action: "Consider auto-scaling",
    timeline: "3-5 days",
  },
  {
    api: "Payment Processing API",
    metric: "Deprecation",
    prediction: "v1.8.x should be deprecated in Q2",
    confidence: 76,
    action: "Plan migration strategy",
    timeline: "60-90 days",
  },
  {
    api: "Notification Service API",
    metric: "Performance",
    prediction: "May hit rate limits during peak hours",
    confidence: 82,
    action: "Implement queue system",
    timeline: "2-3 weeks",
  },
]

const insights = [
  {
    category: "Performance",
    title: "Optimize Database Queries",
    description: "Analytics API queries can be optimized by adding indexes on frequently accessed columns",
    impact: "30% faster response times",
    effort: "Low",
    apis: ["Analytics API", "Reporting API"],
  },
  {
    category: "Security",
    title: "Implement Rate Limiting",
    description: "Several APIs lack proper rate limiting which could lead to abuse",
    impact: "Improved security posture",
    effort: "Medium",
    apis: ["User Management API", "Payment Processing API"],
  },
  {
    category: "Documentation",
    title: "Add Request Examples",
    description: "APIs with comprehensive examples have 60% higher adoption rates",
    impact: "Better developer experience",
    effort: "Low",
    apis: ["All APIs"],
  },
]

export default function AIInsightsPage() {
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your API assistant. I can help you with API documentation, troubleshooting, and best practices. What would you like to know?",
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (!newMessage.trim()) return

    setChatMessages([
      ...chatMessages,
      { role: "user", content: newMessage },
      {
        role: "assistant",
        content:
          "I understand you're asking about " +
          newMessage +
          ". Let me help you with that. Based on your API usage patterns, I recommend checking the documentation for the User Management API which has similar functionality.",
      },
    ])
    setNewMessage("")
  }

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>AI Insights</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI-Powered Insights</h1>
            <p className="text-muted-foreground">
              Intelligent analytics, anomaly detection, and predictive recommendations
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              <Brain className="mr-1 h-3 w-3" />
              AI Enabled
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="anomalies" className="space-y-4">
          <TabsList>
            <TabsTrigger value="anomalies">Anomaly Detection</TabsTrigger>
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
            <TabsTrigger value="insights">Smart Insights</TabsTrigger>
            <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
          </TabsList>

          <TabsContent value="anomalies" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Anomalies</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">2 high, 1 medium severity</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Detection Accuracy</CardTitle>
                  <Target className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94.2%</div>
                  <p className="text-xs text-muted-foreground">+2.1% from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
                  <Clock className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1.2s</div>
                  <p className="text-xs text-muted-foreground">Real-time detection</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">APIs Monitored</CardTitle>
                  <Activity className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                  <p className="text-xs text-muted-foreground">All production APIs</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detected Anomalies</CardTitle>
                <CardDescription>Real-time anomaly detection with AI-powered analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {anomalies.map((anomaly) => (
                    <div key={anomaly.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge
                            variant={
                              anomaly.severity === "high"
                                ? "destructive"
                                : anomaly.severity === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {anomaly.severity.toUpperCase()}
                          </Badge>
                          <span className="font-medium">{anomaly.api}</span>
                          <Badge variant="outline">{anomaly.type.replace("_", " ")}</Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">Confidence: {anomaly.confidence}%</span>
                          <Progress value={anomaly.confidence} className="w-16" />
                        </div>
                      </div>
                      <p className="text-sm">{anomaly.description}</p>
                      <div className="grid gap-2 md:grid-cols-2">
                        <div>
                          <span className="text-sm font-medium">Impact: </span>
                          <span className="text-sm text-muted-foreground">{anomaly.impact}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Detected: </span>
                          <span className="text-sm text-muted-foreground">{anomaly.timestamp}</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-md">
                        <div className="flex items-start space-x-2">
                          <Lightbulb className="h-4 w-4 text-blue-600 mt-0.5" />
                          <div>
                            <span className="text-sm font-medium text-blue-900">Recommendation: </span>
                            <span className="text-sm text-blue-800">{anomaly.recommendation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="predictions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Predictive Analytics</CardTitle>
                <CardDescription>AI-powered predictions for API lifecycle management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {predictions.map((prediction, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium">{prediction.api}</span>
                          <Badge variant="outline">{prediction.metric}</Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">Confidence: {prediction.confidence}%</span>
                          <Progress value={prediction.confidence} className="w-16" />
                        </div>
                      </div>
                      <p className="text-sm">{prediction.prediction}</p>
                      <div className="grid gap-2 md:grid-cols-2">
                        <div>
                          <span className="text-sm font-medium">Recommended Action: </span>
                          <span className="text-sm text-muted-foreground">{prediction.action}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Timeline: </span>
                          <span className="text-sm text-muted-foreground">{prediction.timeline}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <CheckCircle className="mr-2 h-3 w-3" />
                          Accept
                        </Button>
                        <Button size="sm" variant="outline">
                          <XCircle className="mr-2 h-3 w-3" />
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Smart Insights</CardTitle>
                <CardDescription>AI-generated recommendations for API optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {insights.map((insight, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline">{insight.category}</Badge>
                          <span className="font-medium">{insight.title}</span>
                        </div>
                        <Badge
                          variant={
                            insight.effort === "Low"
                              ? "secondary"
                              : insight.effort === "Medium"
                                ? "default"
                                : "destructive"
                          }
                        >
                          {insight.effort} Effort
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                      <div className="grid gap-2 md:grid-cols-2">
                        <div>
                          <span className="text-sm font-medium">Expected Impact: </span>
                          <span className="text-sm text-green-600">{insight.impact}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Affected APIs: </span>
                          <span className="text-sm text-muted-foreground">{insight.apis.join(", ")}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm">
                          <Zap className="mr-2 h-3 w-3" />
                          Implement
                        </Button>
                        <Button size="sm" variant="outline">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assistant" className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-3">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>AI Assistant</CardTitle>
                  <CardDescription>Chat with AI for API guidance and troubleshooting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-[400px] border rounded-lg p-4 overflow-y-auto space-y-4">
                      {chatMessages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Ask about APIs, documentation, or best practices..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      />
                      <Button onClick={sendMessage}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common AI-assisted tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Generate API Documentation
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Analyze Performance Issues
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      Suggest API Improvements
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Predict Usage Patterns
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
