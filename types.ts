export interface ContactInfo {
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  location?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  thesis: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

export interface Paper {
  authors: string;
  title: string;
  publication: string;
  year: string;
  status?: string;
  type: 'Journal' | 'Conference';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Award {
  year: string;
  title: string;
  issuer: string;
  location: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  certificateUrl: string;
}

export interface CVData {
  name: string;
  role: string;
  contact: ContactInfo;
  education: Education[];
  experience: Experience[];
  papers: Paper[];
  skills: SkillCategory[];
  awards: Award[];
  certifications: Certification[];
}