import type { LucideIcon } from 'lucide-react';
import {
  Box,
  Globe,
  Megaphone,
  MessageCircle,
  Package,
  Search,
  Smartphone,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';
import type { IconName } from '@/data/content';
import styles from './IconTile.module.css';

const icons: Record<IconName, LucideIcon> = {
  box: Box,
  wrench: Wrench,
  'message-circle': MessageCircle,
  package: Package,
  users: Users,
  megaphone: Megaphone,
  smartphone: Smartphone,
  globe: Globe,
  search: Search,
  workflow: Workflow,
};

interface IconTileProps {
  /** A content.json icon name, or any lucide icon component. */
  icon: IconName | LucideIcon;
  className?: string;
}

export default function IconTile({ icon, className }: IconTileProps) {
  const Icon = typeof icon === 'string' ? icons[icon] : icon;

  return (
    <span className={[styles['icon-tile'], className].filter(Boolean).join(' ')} aria-hidden="true">
      <Icon className={styles['icon-tile__icon']} strokeWidth={1.9} />
    </span>
  );
}
