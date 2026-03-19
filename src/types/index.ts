export interface VisionItem {
  id: string;
  title: string;
  description: string;
  image: string;           
  bullets: string[];       
  acreage?: string;        
}

export interface MilestoneItem {
  id: string;
  tag: string;
  tagClass: 'done' | 'active' | 'planned';
  title: string;
  desc?: string;
  date?: string;
}

export interface PhaseData {
  id: string;
  name: string;
  tag: string;
  desc: string;
  progress: number;
  items: MilestoneItem[];
}

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;            
  url: string;             
  description?: string;
}

export interface StatItem {
  id: string;
  value: string;           
  label: string;           
  icon?: string;           
}
