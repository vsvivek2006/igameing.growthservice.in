import React from 'react';
import {
  TrendingUp,
  Settings,
  FileText,
  Link as LinkIcon,
  Database,
  PenTool,
  Search,
  Code2,
  BarChart3,
  Megaphone,
  Target,
  BarChart2,
  Share2,
  HelpCircle,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp,
  Settings,
  FileText,
  Link: LinkIcon,
  Database,
  PenTool,
  Search,
  Code2,
  BarChart3,
  Megaphone,
  Target,
  BarChart2,
  Share2,
  HelpCircle,
};

export interface ServiceIconProps {
  readonly name: string;
  readonly className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-5 h-5' }) => {
  const IconComponent = ICON_MAP[name] ?? HelpCircle;
  return <IconComponent className={className} />;
};

export default ServiceIcon;
