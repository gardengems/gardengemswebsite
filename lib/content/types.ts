export interface BaseContent {
  title: string;
  description: string;
}

export interface HomeContent extends BaseContent {
  hero: {
    title: string;
    description: string;
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  footer: {
    links: Array<{
      title: string;
      href: string;
    }>;
    copyright: string;
  };
  socialLinks: {
    linkedin: string;
    instagram: string;
    email: string;
  };
}

export interface AboutContent extends BaseContent {
  sections: Array<{
    title: string;
    content: string;
  }>;
}

export interface ContactContent extends BaseContent {
  form: {
    title: string;
    fields: {
      name: string;
      email: string;
      message: string;
    };
    submitButton: string;
  };
}

export interface DropNGrowContent extends BaseContent {
  sections: Array<{
    title: string;
    content: string;
  }>;
} 