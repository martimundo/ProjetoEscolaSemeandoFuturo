import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string; // Can be a route ('/contact') or a hash ('/#methodology')
  isExternal?: boolean;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface InfraImage {
  src: string;
  alt: string;
  title: string;
}

export interface Partner {
    name: string;
    description: string;
    imageUrl: string;
}