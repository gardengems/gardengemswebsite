interface TabNavProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export function TabNav({ tabs, activeTab, onTabChange, className = '' }: TabNavProps) {
  return (
    <nav className={`w-full space-y-1 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`
            w-full text-left px-4 py-2 rounded-md transition-colors
            ${activeTab === tab
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-muted'
            }
          `}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  );
} 