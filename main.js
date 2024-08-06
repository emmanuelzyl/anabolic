import React, { useState } from 'react';
import { Plus, Clock, User, Dumbbell, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const WorkoutTemplate = ({ title, exercises }) => (
  <Card className="mb-4">
    <CardHeader className="flex justify-between items-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <Button variant="ghost" size="icon"><Plus className="h-4 w-4" /></Button>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-600">{exercises}</p>
    </CardContent>
  </Card>
);

const WorkoutTracker = () => {
  const [templates, setTemplates] = useState([
    { id: 1, title: 'Back', exercises: 'Pull Up, Lat Pulldown (Cable), Lat Pulldown (Machine), Iso-Lateral Row (Machine) & 2 more...' },
    { id: 2, title: 'Chest', exercises: 'Bench Press (Barbell), Incline Bench Press (Dumbbell), Chest Fly and Incline Chest Press (Machine)' },
    { id: 3, title: 'Shoulders', exercises: 'Shoulder Press (Plate Loaded), Lateral Raise (Dumbbell) and Face Pull (Cable)' },
  ]);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Start Workout</h1>
      
      <h2 className="text-xl font-semibold mb-2">Quick Start</h2>
      <Button className="w-full mb-6">Start an Empty Workout</Button>
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Templates</h2>
        <div>
          <Button variant="ghost" size="sm"><Plus className="h-4 w-4 mr-1" /> Template</Button>
          <Button variant="ghost" size="icon"><Clock className="h-4 w-4" /></Button>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-2">My Templates (3)</h3>
      {templates.map(template => (
        <WorkoutTemplate key={template.id} title={template.title} exercises={template.exercises} />
      ))}
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
        <Button variant="ghost" size="icon"><User className="h-6 w-6" /></Button>
        <Button variant="ghost" size="icon"><Clock className="h-6 w-6" /></Button>
        <Button variant="ghost" size="icon"><Plus className="h-6 w-6" /></Button>
        <Button variant="ghost" size="icon"><Dumbbell className="h-6 w-6" /></Button>
        <Button variant="ghost" size="icon"><Crown className="h-6 w-6" /></Button>
      </div>
    </div>
  );
};

export default WorkoutTracker;
