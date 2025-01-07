'use client';

import { useState } from 'react';

interface Settings {
  notifications: boolean;
  emailUpdates: boolean;
  darkMode: boolean;
  language: 'en' | 'th';
}

type SettingKey = keyof Settings;

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [settings, setSettings] = useState<Settings>({
    notifications: true,
    emailUpdates: false,
    darkMode: false,
    language: 'en'
  });

  const handleSettingChange = (key: SettingKey, value: Settings[SettingKey]) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="container py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Settings</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Settings Navigation */}
          <nav className="w-full md:w-64 space-y-1">
            {['profile', 'notifications', 'security', 'appearance'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>

          {/* Settings Content */}
          <div className="flex-1 space-y-8">
            <div className="bg-muted/5 border border-border/40 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings
              </h2>

              <div className="space-y-6">
                {/* Notification Settings */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={settings.notifications}
                      onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span>Enable push notifications</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={settings.emailUpdates}
                      onChange={(e) => handleSettingChange('emailUpdates', e.target.checked)}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span>Receive email updates</span>
                  </label>
                </div>

                {/* Theme Settings */}
                <div className="space-y-4">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={settings.darkMode}
                      onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span>Dark mode</span>
                  </label>
                </div>

                {/* Language Settings */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Language
                  </label>
                  <select
                    value={settings.language}
                    onChange={(e) => handleSettingChange('language', e.target.value as 'en' | 'th')}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background"
                  >
                    <option value="en">English</option>
                    <option value="th">Thai</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 