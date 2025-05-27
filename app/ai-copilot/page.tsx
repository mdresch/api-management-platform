"use client"

import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
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
  Wand2,
  FileText,
  Code2,
  MessageSquare,
  Send,
  Copy,
  Download,
  Sparkles,
  Zap,
  BookOpen,
  GitBranch,
  CheckCircle,
  Clock,
} from "lucide-react"
import { useState } from "react"

const aiSuggestions = [
  {
    id: "1",
    type: "endpoint",
    title: "Add pagination to GET /users",
    description: "Consider adding limit and offset parameters for better performance with large datasets",
    confidence: 92,
    impact: "High",
    effort: "Low",
    code: `parameters:
  - name: limit
    in: query
    schema:
      type: integer
      default: 10
      maximum: 100
  - name: offset
    in: query
    schema:
      type: integer
      default: 0`,
  },
  {
    id: "2",
    type: "security",
    title: "Implement rate limiting",
    description: "Add rate limiting headers to prevent API abuse and improve security",
    confidence: 88,
    impact: "Medium",
    effort: "Medium",
    code: `headers:
  X-RateLimit-Limit:
    description: Request limit per hour
    schema:
      type: integer
  X-RateLimit-Remaining:
    description: Remaining requests
    schema:
      type: integer`,
  },
  {
    id: "3",
    type: "documentation",
    title: "Add request examples",
    description: "Include practical examples to improve developer experience",
    confidence: 95,
    impact: "Medium",
    effort: "Low",
    code: `examples:
  CreateUser:
    summary: Create a new user
    value:
      name: "John Doe"
      email: "john@example.com"
      role: "user"`,
  },
]

const generatedDocs = [
  {
    id: "1",
    title: "User Management API Documentation",
    description: "Comprehensive documentation for user authentication and profile management",
    status: "Generated",
    lastUpdated: "2024-01-15 14:30",
    sections: ["Overview", "Authentication", "Endpoints", "Examples", "Error Codes"],
    quality: 94,
  },
  {
    id: "2",
    title: "Payment Processing API Guide",
    description: "Developer guide for payment integration and transaction handling",
    status: "In Progress",
    lastUpdated: "2024-01-15 14:25",
    sections: ["Getting Started", "Security", "Webhooks", "Testing"],
    quality: 87,
  },
]

const changelogEntries = [
  {
    version: "v2.1.0",
    date: "2024-01-15",
    type: "feature",
    title: "Added user profile endpoints",
    description: "New endpoints for managing user profiles and preferences",
    impact: "Non-breaking",
    aiGenerated: true,
  },
  {
    version: "v2.0.1",
    date: "2024-01-10",
    type: "fix",
    title: "Fixed authentication token validation",
    description: "Resolved issue with JWT token expiration handling",
    impact: "Bug fix",
    aiGenerated: true,
  },
  {
    version: "v2.0.0",
    date: "2024-01-05",
    type: "breaking",
    title: "Updated response format",
    description: "Standardized error response format across all endpoints",
    impact: "Breaking change",
    aiGenerated: false,
  },
]

export default function AICopilotPage() {
  const [naturalLanguageInput, setNaturalLanguageInput] = useState("")
  const [generatedSpec, setGeneratedSpec] = useState("")
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI API Design Copilot. I can help you generate OpenAPI specs, write documentation, create changelogs, and optimize your API design. What would you like to work on today?",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const generateOpenAPISpec = () => {
    if (!naturalLanguageInput.trim()) return

    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedSpec(`openapi: 3.0.0
info:
  title: ${naturalLanguageInput.includes("user") ? "User Management API" : "Generated API"}
  version: 1.0.0
  description: ${naturalLanguageInput}

paths:
  /users:
    get:
      summary: Get all users
      description: Retrieve a list of all users with pagination support
      parameters:
        - name: limit
          in: query
          schema:
            type: integer
            default: 10
            maximum: 100
        - name: offset
          in: query
          schema:
            type: integer
            default: 0
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  users:
                    type: array
                    items:
                      $ref: '#/components/schemas/User'
                  pagination:
                    $ref: '#/components/schemas/Pagination'
    post:
      summary: Create a new user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserRequest'
      responses:
        '201':
          description: User created successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'

components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
        email:
          type: string
          format: email
        created_at:
          type: string
          format: date-time
    CreateUserRequest:
      type: object
      required:
        - name
        - email
      properties:
        name:
          type: string
        email:
          type: string
          format: email
    Pagination:
      type: object
      properties:
        page:
          type: integer
        limit:
          type: integer
        total:
          type: integer`)
      setIsGenerating(false)
    }, 2000)
  }

  const sendChatMessage = () => {
    if (!newMessage.trim()) return

    setChatMessages([
      ...chatMessages,
      { role: "user", content: newMessage },
      {
        role: "assistant",
        content: `I understand you want to ${newMessage.toLowerCase()}. Based on API best practices, I recommend implementing proper error handling, adding request validation, and including comprehensive documentation. Would you like me to generate specific code examples for this?`,
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
              <BreadcrumbPage>AI Copilot</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI API Design Copilot</h1>
            <p className="text-muted-foreground">
              Intelligent assistance for API design, documentation, and optimization
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              <Brain className="mr-1 h-3 w-3" />
              AI Powered
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="spec-generator" className="space-y-4">
          <TabsList>
            <TabsTrigger value="spec-generator">Spec Generator</TabsTrigger>
            <TabsTrigger value="documentation">Smart Documentation</TabsTrigger>
            <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
            <TabsTrigger value="changelog">Changelog Generator</TabsTrigger>
            <TabsTrigger value="chat">AI Assistant</TabsTrigger>
          </TabsList>

          <TabsContent value="spec-generator" className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
              {/* Input Panel */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wand2 className="h-5 w-5" />
                    <span>Natural Language to OpenAPI</span>
                  </CardTitle>
                  <CardDescription>
                    Describe your API in plain English and get a complete OpenAPI specification
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Describe your API</Label>
                    <Textarea
                      placeholder="I want to create a user management API with endpoints to create, read, update, and delete users. Users should have name, email, and creation date. Include authentication and pagination..."
                      value={naturalLanguageInput}
                      onChange={(e) => setNaturalLanguageInput(e.target.value)}
                      rows={6}
                    />
                  </div>
                  <Button onClick={generateOpenAPISpec} disabled={isGenerating} className="w-full">
                    {isGenerating ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate OpenAPI Spec
                      </>
                    )}
                  </Button>
                  <div className="text-xs text-muted-foreground">
                    💡 Tip: Be specific about data models, authentication, and any special requirements
                  </div>
                </CardContent>
              </Card>

              {/* Output Panel */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Code2 className="h-5 w-5" />
                    <span>Generated OpenAPI Specification</span>
                  </CardTitle>
                  <CardDescription>AI-generated OpenAPI spec based on your description</CardDescription>
                </CardHeader>
                <CardContent>
                  {generatedSpec ? (
                    <div className="space-y-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Copy className="mr-2 h-3 w-3" />
                          Copy
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="mr-2 h-3 w-3" />
                          Download
                        </Button>
                        <Button size="sm">Import to Design Studio</Button>
                      </div>
                      <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                        <pre className="text-xs font-mono">{generatedSpec}</pre>
                      </ScrollArea>
                    </div>
                  ) : (
                    <div className="h-[400px] flex items-center justify-center text-muted-foreground border rounded-md">
                      Generated OpenAPI specification will appear here
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="documentation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>AI-Generated Documentation</span>
                </CardTitle>
                <CardDescription>Automatically generate comprehensive API documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {generatedDocs.map((doc) => (
                    <div key={doc.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">{doc.title}</h3>
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={doc.status === "Generated" ? "default" : "secondary"}>{doc.status}</Badge>
                          <div className="text-sm text-muted-foreground">Quality: {doc.quality}%</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {doc.sections.map((section) => (
                          <Badge key={section} variant="outline" className="text-xs">
                            {section}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Last updated: {doc.lastUpdated}</span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <BookOpen className="mr-2 h-3 w-3" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            Regenerate
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suggestions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>AI-Powered Suggestions</span>
                </CardTitle>
                <CardDescription>Intelligent recommendations to improve your API design</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiSuggestions.map((suggestion) => (
                    <div key={suggestion.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium">{suggestion.title}</h3>
                            <Badge variant="outline">{suggestion.type}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{suggestion.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">Confidence: {suggestion.confidence}%</div>
                          <div className="flex space-x-2 mt-1">
                            <Badge
                              variant={suggestion.impact === "High" ? "destructive" : "default"}
                              className="text-xs"
                            >
                              {suggestion.impact} Impact
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {suggestion.effort} Effort
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <ScrollArea className="h-24 w-full rounded-md border p-3">
                        <pre className="text-xs font-mono">{suggestion.code}</pre>
                      </ScrollArea>
                      <div className="flex space-x-2">
                        <Button size="sm">
                          <CheckCircle className="mr-2 h-3 w-3" />
                          Apply
                        </Button>
                        <Button size="sm" variant="outline">
                          <Copy className="mr-2 h-3 w-3" />
                          Copy Code
                        </Button>
                        <Button size="sm" variant="outline">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="changelog" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GitBranch className="h-5 w-5" />
                  <span>Smart Changelog Generation</span>
                </CardTitle>
                <CardDescription>Automatically generate changelogs from API changes and commits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {changelogEntries.map((entry, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline">{entry.version}</Badge>
                          <span className="text-sm text-muted-foreground">{entry.date}</span>
                          {entry.aiGenerated && (
                            <Badge variant="secondary" className="text-xs">
                              <Brain className="mr-1 h-2 w-2" />
                              AI Generated
                            </Badge>
                          )}
                        </div>
                        <Badge
                          variant={
                            entry.type === "feature" ? "default" : entry.type === "fix" ? "secondary" : "destructive"
                          }
                        >
                          {entry.type}
                        </Badge>
                      </div>
                      <div>
                        <h3 className="font-medium">{entry.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{entry.description}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {entry.impact}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>AI Assistant Chat</span>
                </CardTitle>
                <CardDescription>Get instant help with API design questions and best practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ScrollArea className="h-[400px] w-full border rounded-lg p-4">
                    <div className="space-y-4">
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
                  </ScrollArea>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Ask about API design, best practices, or get help with your implementation..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendChatMessage()}
                    />
                    <Button onClick={sendChatMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarInset>
  )
}
