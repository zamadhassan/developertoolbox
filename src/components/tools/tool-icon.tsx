import type { LucideIcon } from 'lucide-react';
import {
  Binary,
  Braces,
  CalendarClock,
  Camera,
  ChartNoAxesColumn,
  CheckCheck,
  Clock,
  Code2,
  Diff,
  FileArchive,
  FileCode2,
  FileJson,
  FileKey2,
  FileSignature,
  Fingerprint,
  Gauge,
  GitBranch,
  Globe2,
  Hash,
  Image,
  KeyRound,
  Keyboard,
  Link2,
  ListFilter,
  LockKeyhole,
  Mail,
  MapPinned,
  Network,
  Paintbrush,
  Percent,
  QrCode,
  Regex,
  ScanText,
  ShieldCheck,
  Smartphone,
  SplitSquareHorizontal,
  SquareCode,
  Table2,
  TerminalSquare,
  Text,
  Timer,
  Type,
  UserRoundCog,
  Wifi,
} from 'lucide-react';
import type { ToolCategorySlug } from '@/features/tools/types';

const categoryIcons: Record<ToolCategorySlug, LucideIcon> = {
  crypto: ShieldCheck,
  converter: SplitSquareHorizontal,
  web: Globe2,
  'images-and-videos': Image,
  development: TerminalSquare,
  network: Network,
  math: Percent,
  measurement: Gauge,
  text: Text,
  data: Table2,
};

function iconForSlug(slug: string, category: ToolCategorySlug): LucideIcon {
  if (slug.includes('json')) return FileJson;
  if (slug.includes('yaml') || slug.includes('toml') || slug.includes('xml')) return FileCode2;
  if (
    slug.includes('base64') ||
    slug.includes('binary') ||
    slug.includes('unicode') ||
    slug.includes('base-converter')
  )
    return Binary;
  if (slug.includes('hash') || slug.includes('hmac') || slug.includes('bcrypt')) return Hash;
  if (slug.includes('uuid') || slug.includes('ulid') || slug.includes('token')) return Fingerprint;
  if (
    slug.includes('encryption') ||
    slug.includes('rsa') ||
    slug.includes('bip39') ||
    slug.includes('otp')
  )
    return KeyRound;
  if (slug.includes('password')) return LockKeyhole;
  if (slug.includes('pdf-signature')) return FileSignature;
  if (slug.includes('date') || slug.includes('time')) return CalendarClock;
  if (slug.includes('color')) return Paintbrush;
  if (
    slug.includes('case') ||
    slug.includes('slug') ||
    slug.includes('nato') ||
    slug.includes('roman')
  )
    return Type;
  if (slug.includes('markdown') || slug.includes('html') || slug.includes('entities')) return Code2;
  if (slug.includes('url') || slug.includes('safelink')) return Link2;
  if (slug.includes('device') || slug.includes('user-agent')) return Smartphone;
  if (slug.includes('auth') || slug.includes('jwt')) return FileKey2;
  if (slug.includes('keycode')) return Keyboard;
  if (slug.includes('status')) return CheckCheck;
  if (slug.includes('diff')) return Diff;
  if (slug.includes('qr')) return QrCode;
  if (slug.includes('wifi')) return Wifi;
  if (slug.includes('svg')) return Image;
  if (slug.includes('camera')) return Camera;
  if (slug.includes('git')) return GitBranch;
  if (slug.includes('port') || slug.includes('cron') || slug.includes('docker'))
    return TerminalSquare;
  if (slug.includes('sql')) return SquareCode;
  if (slug.includes('chmod')) return LockKeyhole;
  if (slug.includes('email')) return Mail;
  if (slug.includes('regex')) return Regex;
  if (slug.includes('ipv4') || slug.includes('ipv6') || slug.includes('mac-address'))
    return Network;
  if (slug.includes('math') || slug.includes('percentage')) return Percent;
  if (slug.includes('eta') || slug.includes('chronometer')) return Timer;
  if (slug.includes('temperature')) return Gauge;
  if (slug.includes('benchmark')) return ChartNoAxesColumn;
  if (slug.includes('lorem') || slug.includes('statistics') || slug.includes('numeronym'))
    return ScanText;
  if (slug.includes('emoji')) return Type;
  if (slug.includes('obfuscator')) return FileArchive;
  if (slug.includes('ascii')) return Braces;
  if (slug.includes('phone')) return UserRoundCog;
  if (slug.includes('iban')) return MapPinned;
  if (slug.includes('list')) return ListFilter;
  if (slug.includes('mime')) return FileArchive;
  return categoryIcons[category];
}

type IconBoxProps = {
  slug?: string;
  category: ToolCategorySlug;
  className?: string;
};

export function ToolIcon({ slug, category, className }: IconBoxProps) {
  const Icon = slug ? iconForSlug(slug, category) : categoryIcons[category];
  return (
    <span
      className={`inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border-strong)] bg-[var(--primary-soft)] text-primary ${className ?? ''}`}
      aria-hidden="true"
    >
      <Icon size={21} strokeWidth={1.8} />
    </span>
  );
}

export function CategoryIcon({
  category,
  className,
}: {
  category: ToolCategorySlug;
  className?: string;
}) {
  return <ToolIcon category={category} className={className} />;
}
