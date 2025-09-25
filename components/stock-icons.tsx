import React from 'react';
import Image from 'next/image';

// Stock icon components using actual PNG logos where available
const AppleIcon = ({ className }: { className?: string }) => (
  <Image
    src="/stocks/apple-logo.png"
    alt="Apple"
    width={32}
    height={32}
    className={className}
  />
);

const AmazonIcon = ({ className }: { className?: string }) => (
  <Image
    src="/stocks/amazon.png"
    alt="Amazon"
    width={32}
    height={32}
    className={className}
  />
);

const TeslaIcon = ({ className }: { className?: string }) => (
  <Image
    src="/stocks/tesla.png"
    alt="Tesla"
    width={32}
    height={32}
    className={className}
  />
);

const GoogleIcon = ({ className }: { className?: string }) => (
  <Image
    src="/stocks/google.png"
    alt="Google"
    width={32}
    height={32}
    className={className}
  />
);

const MicrosoftIcon = ({ className }: { className?: string }) => (
  <Image
    src="/stocks/microsoft.png"
    alt="Microsoft"
    width={32}
    height={32}
    className={className}
  />
);

const NvidiaIcon = ({ className }: { className?: string }) => (
  <Image
    src="/stocks/nvidia.png"
    alt="NVIDIA"
    width={32}
    height={32}
    className={className}
  />
);

const NetflixIcon = ({ className }: { className?: string }) => (
  <Image
    src="/stocks/netflix.png"
    alt="Netflix"
    width={32}
    height={32}
    className={className}
  />
);

const AMDIcon = ({ className }: { className?: string }) => (
  <Image
    src="/stocks/amd.png"
    alt="AMD"
    width={32}
    height={32}
    className={className}
  />
);

const MetaIcon = ({ className }: { className?: string }) => (
  <Image
    src="/stocks/meta.png"
    alt="Meta"
    width={32}
    height={32}
    className={className}
  />
);

const SalesforceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#00A1E0"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">CRM</text>
  </svg>
);

const SPYIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#1f77b4"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">SPY</text>
  </svg>
);

const QQQIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#00B04F"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">QQQ</text>
  </svg>
);

// Main icon mapping object
export const stockIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  AAPL: AppleIcon,
  AMZN: AmazonIcon,
  TSLA: TeslaIcon,
  GOOGL: GoogleIcon,
  MSFT: MicrosoftIcon,
  NVDA: NvidiaIcon,
  META: MetaIcon,
  NFLX: NetflixIcon,
  AMD: AMDIcon,
  CRM: SalesforceIcon,
  SPY: SPYIcon,
  QQQ: QQQIcon,
};

// Fallback icon for stocks without custom icons
export const DefaultStockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#6B7280"/>
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">$</text>
  </svg>
);

// Helper function to get stock icon
export const getStockIcon = (symbol: string) => {
  return stockIcons[symbol] || DefaultStockIcon;
};