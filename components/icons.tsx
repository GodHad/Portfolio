import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props} />;
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </BaseIcon>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
      <path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3 0 6-1.5 6-6.8A5.3 5.3 0 0 0 18.7 5 4.9 4.9 0 0 0 18.6 1S17.5.7 15 2.4a13.4 13.4 0 0 0-6 0C6.5.7 5.4 1 5.4 1A4.9 4.9 0 0 0 5.3 5 5.3 5.3 0 0 0 4 8.7c0 5.3 3 6.8 6 6.8a3.4 3.4 0 0 0-.9 2.6V22" />
    </BaseIcon>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <path d="M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </BaseIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </BaseIcon>
  );
}

export function XIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </BaseIcon>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 14v5h-14v-14h5" />
    </BaseIcon>
  );
}
