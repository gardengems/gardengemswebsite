// Common Types
export type ValueIcon = 'check' | 'settings' | 'lightning';

export type Link = {
  text: string;
  link: string;
};

export type Hero = {
  title: string;
  subtitle: string;
  description: string;
  cta: Link;
};

export type Partner = {
  name: string;
  description: string;
  logo: string;
  url: string;
};

export type ValueItem = {
  title: string;
  description: string;
  icon: ValueIcon;
};

// Page-specific Types
export type AboutContent = {
  hero: {
    title: string;
    description: string;
  };
  mission: {
    title: string;
    description: string;
  };
  values: {
    title: string;
    list: Array<{
      title: string;
      description: string;
      icon: ValueIcon;
    }>;
  };
  team: {
    title: string;
    description: string;
    images: Array<{
      src: string;
      alt: string;
    }>;
  };
  cta?: {
    title: string;
    description: string;
    buttons: Array<{
      text: string;
      link: string;
      primary?: boolean;
    }>;
  };
};

export type HomeContent = {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: Link;
  };
  allInOne: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
  };
  whyChoose: {
    features: Array<{
      title: string;
      description: string;
      icon: ValueIcon;
    }>;
  };
  partners: {
    title: string;
    description: string;
    list: Partner[];
    footer: string;
    cta: Link;
  };
  socialLinks: {
    linkedin: string;
    instagram: string;
    email: string;
  };
};

export type DropNGrowContent = {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  features: Array<{
    title: string;
    description: string;
    specs: string[];
  }>;
  advantages: {
    title: string;
    list: Array<{
      category: string;
      dropNGrow: string;
      traditional: string;
    }>;
  };
  technicalSpecs: {
    title: string;
    list: Array<{
      category: string;
      items: Array<{
        label: string;
        value: string;
      }>;
    }>;
  };
  controlSystem: {
    title: string;
    description: string;
    features: string[];
  };
  cta: {
    title: string;
    description: string;
    button: {
      text: string;
      link: string;
    };
  };
};

export type ContactContent = {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  contactInfo: {
    title: string;
    channels: Array<{
      type: 'email' | 'linkedin' | 'instagram';
      label: string;
      value: string;
      url: string;
    }>;
  };
  form: {
    fields: Array<{
      name: string;
      label: string;
      type: string;
      required: boolean;
      rows?: number;
    }>;
    submitButton: {
      text: string;
      loadingText: string;
    };
    messages: {
      success: string;
      error: string;
    };
  };
  socialLinks: {
    linkedin: string;
    instagram: string;
    email: string;
  };
}; 