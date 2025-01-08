"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface Milestone {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
}

export default function MilestoneTracker() {
  const [milestones, setMilestones] = useState<Milestone[]>([
    { id: 1, title: "MVP Development", description: "Develop the minimum viable product", completed: false, dueDate: new Date("2023-08-01") },
    { id: 2, title: "User Testing", description: "Conduct user testing and gather feedback", completed: false, dueDate: new Date("2023-09-01") },
  ]);
  const [newMilestone, setNewMilestone] = useState({ title: "", description: "", dueDate: "" });

  const handleAddMilestone = () => {
    if (newMilestone.title && newMilestone.description && newMilestone.dueDate) {
      const milestone: Milestone = {
        id: milestones.length + 1,
        title: newMilestone.title,
        description: newMilestone.description,
        completed: false,
        dueDate: new Date(newMilestone.dueDate),
      };
      setMilestones([...milestones, milestone]);
      setNewMilestone({ title: "", description: "", dueDate: "" });
    }
  };

  const toggleMilestone = (id: number) => {
    setMilestones(milestones.map(m => m.id === id ? { ...m, completed: !m.completed } : m));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Project Milestones</h1>
      <div className="grid gap-6 mb-6">
        {milestones.map((milestone) => (
          <Card key={milestone.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Checkbox
                  id={`milestone-${milestone.id}`}
                  checked={milestone.completed}
                  onCheckedChange={() => toggleMilestone(milestone.id)}
                  className="mr-2"
                />
                <Label htmlFor={`milestone-${milestone.id}`} className={milestone.completed ? "line-through" : ""}>
                  {milestone.title}
                </Label>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{milestone.description}</p>
              <p className="text-sm text-gray-500 mt-2">Due: {milestone.dueDate.toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Add New Milestone</h2>
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={newMilestone.title}
            onChange={(e) => setNewMilestone({ ...newMilestone, title: e.target.value })}
            placeholder="Milestone title"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={newMilestone.description}
            onChange={(e) => setNewMilestone({ ...newMilestone, description: e.target.value })}
            placeholder="Milestone description"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dueDate">Due Date</Label>
          <Input
            id="dueDate"
            type="date"
            value={newMilestone.dueDate}
            onChange={(e) => setNewMilestone({ ...newMilestone, dueDate: e.target.value })}
          />
        </div>
        <Button onClick={handleAddMilestone}>Add Milestone</Button>
      </div>
    </div>
  )
}

