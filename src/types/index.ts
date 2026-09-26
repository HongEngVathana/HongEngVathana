export interface Technology {
  name: string;
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'Architecture' | 'Testing' | 'Tools' | 'UI/UX';
  slug: string; // for simpleicons.org
  color?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Enterprise' | 'Web' | 'Mobile' | 'Backend' | 'Desktop' | 'UI/UX';
  technologies: string[];
  architecture: string;
  description: string;
  highlights: string[];
  image: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  figmaUrl?: string;
  architectureDetails?: string;
}

export interface CurriculumTopic {
  title: string;
  items: string[];
}

export interface EducationYear {
  year: string;
  title: string;
  status: string;
  gpa?: string;
  details: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  locationType?: string; // e.g. "Remote"
  type: 'Education & Training' | 'Professional Experience';
  description: string;
  responsibilities: string[];
  technologies: string[];
}
