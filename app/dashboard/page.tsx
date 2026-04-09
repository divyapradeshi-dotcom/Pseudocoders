// app/dashboard/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Phone, MessageSquare } from "lucide-react";

const learningModules = [
    {
        title: "WhatsApp & Video Call Basics",
        description: "Learn to spot fake calls",
        completed: true,
        icon: Phone
    },
    {
        title: "Spot the SMS Scam",
        description: "Identify suspicious messages",
        completed: true,
        icon: MessageSquare
    },
    {
        title: "Email Security",
        description: "Recognize phishing emails",
        completed: false,
        icon: MessageSquare
    },
    {
        title: "Social Media Safety",
        description: "Protect your privacy online",
        completed: false,
        icon: MessageSquare
    },
    {
        title: "Report & Response",
        description: "What to do when targeted",
        completed: false,
        icon: MessageSquare
    }
];

export default function DashboardPage() {
    const completedCount = learningModules.filter(m => m.completed).length;
    const totalModules = learningModules.length;
    const progressPercentage = (completedCount / totalModules) * 100;

    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">
                    Namaste, Ramesh
                </h1>
                <p className="text-muted-foreground">
                    Welcome back to your safety journey
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Guardian Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Level 2</div>
                        <p className="text-xs text-muted-foreground">Guardian Trainee</p>
                        <Progress value={progressPercentage} className="mt-2" />
                        <p className="text-xs text-muted-foreground mt-2">
                            {progressPercentage}% Complete
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Modules Completed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{completedCount} of {totalModules}</div>
                        <p className="text-xs text-muted-foreground">Progress to Guardian</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Safety Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Good</div>
                        <p className="text-xs text-muted-foreground">Keep learning to improve</p>
                    </CardContent>
                </Card>
            </div>

            {/* Learning Path Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Your Learning Path</CardTitle>
                    <CardDescription>
                        Complete these modules to become a Guardian
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {learningModules.map((module, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                            {module.completed ? (
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                            ) : (
                                <Circle className="h-5 w-5 text-muted-foreground mt-0.5" />
                            )}
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold">{module.title}</h3>
                                    {module.completed && (
                                        <Badge variant="secondary" className="text-xs">
                                            Completed
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground">{module.description}</p>
                            </div>
                            {!module.completed && (
                                <Button size="sm" variant="outline">
                                    Start
                                </Button>
                            )}
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Continue Learning Button */}
            <div className="flex justify-center">
                <Button size="lg" className="w-full max-w-md">
                    Continue Learning
                </Button>
            </div>
        </div>
    );
}