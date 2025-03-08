import React, { useState } from "react";
import {
  Timer,
  CheckCircle,
  FileText,
  Calendar,
  Clock,
  Trash,
  Plus,
  Check,
} from "lucide-react";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ProductivityTools() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [tracking, setTracking] = useState(false);
  const [time, setTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [eventInput, setEventInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleTracking = () => {
    if (tracking) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    } else {
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setTimerInterval(interval);
    }
    setTracking(!tracking);
  };

  const resetTracking = () => {
    clearInterval(timerInterval);
    setTime(0);
    setTracking(false);
    setTimerInterval(null);
  };

  const addEvent = () => {
    if (eventInput.trim() !== "") {
      const formattedDate = format(calendarDate, "PPP");
      setEvents({
        ...events,
        [formattedDate]: [
          ...(events[formattedDate] || []),
          { text: eventInput, date: formattedDate },
        ],
      });
      setEventInput("");
    }
  };

  return (
    <div className="p-6 text-foreground bg-background">
      <h1 className="text-2xl font-semibold text-primary mb-6">
        Productivity Tools
      </h1>
      <div className="grid gap-6">
        {/* Task Management */}
        <div className="bg-card p-4 rounded-xl shadow-md">
          <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
          <h2 className="text-lg font-medium">Task Management</h2>
          <p className="text-sm text-muted-foreground">
            Organize tasks, set deadlines, and track progress.
          </p>
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              className="border p-2 rounded w-full bg-background text-foreground"
              placeholder="Add a new task..."
            />
            <button
              onClick={addTask}
              className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 cursor-pointer flex items-center justify-center gap-2 w-auto"
            >
              <Plus className="h-4 w-4" /> Add
            </button>
          </div>
          <ul className="mt-3 space-y-2">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-2 border rounded-md"
              >
                <span
                  className={`flex-1 ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => toggleTaskCompletion(index)}
                  className="mr-2 text-green-500 hover:text-green-700"
                >
                  <Check className="h-4 w-4" />
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Time Tracking */}
        <div className="bg-card p-4 rounded-xl shadow-md">
          <Timer className="h-8 w-8 text-blue-500 mb-2" />
          <h2 className="text-lg font-medium">Time Tracking</h2>
          <p className="text-sm text-muted-foreground">
            Track working hours and productivity.
          </p>
          <p className="text-lg font-semibold mt-2">Time: {time}s</p>

          {/* Button Container */}
          <div className="mt-3 flex justify-end gap-2">
            <button
              onClick={toggleTracking}
              className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 cursor-pointer w-auto"
            >
              {tracking ? "Stop Tracking" : "Start Tracking"}
            </button>
            <button
              onClick={resetTracking}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer w-auto"
            >
              Reset Timer
            </button>
          </div>
        </div>

        {/* Calendar & Scheduling */}
        <div className="bg-card p-4 rounded-xl shadow-md">
          <Calendar className="h-8 w-8 text-orange-500 mb-2" />
          <h2 className="text-lg font-medium">Calendar & Scheduling</h2>
          <p className="text-sm text-muted-foreground">
            Manage your schedule and gig bookings.
          </p>
          <CalendarComponent
            onChange={setCalendarDate}
            value={calendarDate}
            className="mt-3 w-full border rounded-md bg-background text-foreground"
          />
          {/* Input and Button in one row */}
          <div className="flex mt-3 gap-2">
            <input
              type="text"
              value={eventInput}
              onChange={(e) => setEventInput(e.target.value)}
              className="border p-2 rounded flex-grow bg-background text-foreground"
              placeholder="Add an event..."
            />
            <button
              onClick={addEvent}
              className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 cursor-pointer flex items-center justify-center gap-2 w-auto"
            >
              <Plus className="h-4 w-4" /> Add
            </button>
          </div>
          <ul className="mt-3 text-sm">
            {Object.keys(events).map((date) => (
              <li key={date} className="p-2 border rounded-md mt-1">
                <strong>{date}</strong>
                <ul>
                  {events[date].map((event, index) => (
                    <li key={index} className="mt-1">
                      {event.text}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
