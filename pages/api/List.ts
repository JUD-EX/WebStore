import type { NextApiRequest, NextApiResponse } from "next";

const Category: string[] = ["Education", "Productivity", "Entertainment"];

type Apps = {
  name: string;
  Icon: string;
  Description: string;
  category: string;
};

const AppList: Apps[] = [
  // Education
  {
    name: "Course AI",
    Icon: "/icon.png",
    Description: "AI-powered tutor for interactive learning.",
    category: Category[0],
  },
  {
    name: "Code Master",
    Icon: "/icon.png",
    Description: "Learn coding with hands-on exercises and projects.",
    category: Category[0],
  },
  {
    name: "LangBridge",
    Icon: "/icon.png",
    Description: "Language learning made easy with speech recognition.",
    category: Category[0],
  },

  // Productivity
  {
    name: "TaskFlow",
    Icon: "/icon.png",
    Description: "Organize tasks and boost productivity with AI reminders.",
    category: Category[1],
  },
  {
    name: "NoteSync",
    Icon: "/icon.png",
    Description: "Smart cloud-based notes with real-time collaboration.",
    category: Category[1],
  },
  {
    name: "BudgetWise",
    Icon: "/icon.png",
    Description: "Personal finance tracker with AI expense insights.",
    category: Category[1],
  },

  // Entertainment
  {
    name: "StreamBox",
    Icon: "/icon.png",
    Description: "Watch movies, TV shows, and live streams anywhere.",
    category: Category[2],
  },
  {
    name: "GameHub",
    Icon: "/icon.png",
    Description: "Play trending games and connect with friends online.",
    category: Category[2],
  },
  {
    name: "MusicWave",
    Icon: "/icon.png",
    Description: "Discover and stream your favorite songs with AI playlists.",
    category: Category[2],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Apps[]>
) {
  res.status(200).json(AppList);
}
