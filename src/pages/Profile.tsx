import React, { useState } from "react";
import { Camera, Edit, Star, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const GigWorkerProfile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    bio: "Stand-up comedian with 5+ years of experience.",
    gigsCompleted: 50,
    rating: 4.8,
    socialLinks: {
      website: "https://johndoecomedy.com",
      instagram: "https://instagram.com/johndoecomedy",
    },
    portfolio: [
      { title: "Comedy Special", link: "https://youtube.com/example" },
    ],
  });

  const handleEdit = () => setEditing(!editing);
  const handleChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-background shadow-md rounded-lg text-foreground">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-primary"
          />
          <button className="absolute bottom-0 right-0 bg-secondary p-1 rounded-full hover:bg-secondary-hover transition">
            <Camera className="h-5 w-5 text-foreground" />
          </button>
        </div>
        <div>
          {editing ? (
            <Input name="name" value={profile.name} onChange={handleChange} />
          ) : (
            <h1 className="text-2xl font-bold">{profile.name}</h1>
          )}
          {editing ? (
            <Textarea name="bio" value={profile.bio} onChange={handleChange} />
          ) : (
            <p className="text-muted-foreground">{profile.bio}</p>
          )}
        </div>
        <Button variant="outline" className="ml-auto" onClick={handleEdit}>
          <Edit className="h-4 w-4" /> {editing ? "Save" : "Edit"}
        </Button>
      </div>

      {/* Stats */}
      <div className="mt-6 flex justify-between bg-card p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-primary" />
          <span>{profile.gigsCompleted} Gigs Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          <span>{profile.rating} Rating</span>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Portfolio</h2>
        <ul className="mt-2 space-y-2">
          {profile.portfolio.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border rounded-md bg-card"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                {item.title}
              </a>
              <Button variant="outline" size="sm">
                View
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Links */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Social Links</h2>
        <ul className="mt-2 space-y-2">
          {Object.entries(profile.socialLinks).map(([platform, url], index) => (
            <li key={index} className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                {url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GigWorkerProfile;
