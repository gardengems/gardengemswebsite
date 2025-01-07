export interface ArticleSection {
  title: string;
  content: string;
}

export interface ExternalLink {
  title: string;
  url: string;
  description: string;
}

export interface Article {
  title: string;
  description: string;
  image: string;
  overview: ArticleSection[];
  video: {
    url: string;
    title: string;
    description: string;
  };
  externalLinks: ExternalLink[];
}

export const articles: Record<string, Article> = {
  'growlink-portal': {
    title: 'Growlink Portal & Hardware Information',
    description: 'Learn about our portal features and hardware integration capabilities',
    image: 'https://picsum.photos/800/400?random=1',
    overview: [
      {
        title: 'Portal Features',
        content: 'The Growlink portal provides comprehensive control over your growing environment. Monitor and manage all aspects of your operation from a single interface.'
      },
      {
        title: 'Hardware Integration',
        content: 'Our system seamlessly integrates with various hardware components, providing real-time monitoring and control capabilities.'
      }
    ],
    video: {
      url: 'https://www.youtube.com/embed/example',
      title: 'Growlink Portal Overview',
      description: 'A comprehensive walkthrough of the Growlink portal and its features.'
    },
    externalLinks: [
      {
        title: 'Growlink Documentation',
        url: 'https://docs.growlink.com',
        description: 'Official documentation for the Growlink system.'
      },
      {
        title: 'Hardware Specifications',
        url: 'https://specs.growlink.com',
        description: 'Detailed specifications for Growlink hardware components.'
      }
    ]
  },
  'hvac-control': {
    title: 'HVAC Control Systems',
    description: 'Comprehensive guide to HVAC control systems and climate management',
    image: 'https://picsum.photos/800/400?random=2',
    overview: [
      {
        title: 'System Components',
        content: 'Our HVAC control system consists of advanced sensors and controllers that work together to maintain optimal growing conditions.'
      },
      {
        title: 'Climate Management',
        content: 'Learn how to configure and manage temperature, humidity, and air circulation for optimal growing conditions.'
      }
    ],
    video: {
      url: 'https://www.youtube.com/embed/example',
      title: 'HVAC System Setup',
      description: 'Step-by-step guide to setting up and configuring your HVAC control system.'
    },
    externalLinks: [
      {
        title: 'HVAC Manual',
        url: 'https://hvac.example.com',
        description: 'Complete manual for the HVAC control system.'
      }
    ]
  },
  'lumatek-lighting': {
    title: 'Lumatek Lighting',
    description: 'Information about Lumatek lighting systems and configuration',
    image: 'https://picsum.photos/800/400?random=3',
    overview: [
      {
        title: 'Lighting Solutions',
        content: 'Explore our range of Lumatek lighting solutions designed for optimal plant growth and energy efficiency.'
      },
      {
        title: 'Configuration Guide',
        content: 'Learn how to configure and optimize your Lumatek lighting system for different growth stages.'
      }
    ],
    video: {
      url: 'https://www.youtube.com/embed/example',
      title: 'Lumatek Setup Guide',
      description: 'Installation and configuration guide for Lumatek lighting systems.'
    },
    externalLinks: [
      {
        title: 'Lumatek Website',
        url: 'https://lumatek.com',
        description: 'Official Lumatek product information and support.'
      }
    ]
  },
  'fertigation-skid': {
    title: 'Fertigation Skid',
    description: 'Understanding and operating the fertigation skid system',
    image: 'https://picsum.photos/800/400?random=4',
    overview: [
      {
        title: 'System Overview',
        content: 'The fertigation skid system automates nutrient mixing and delivery, ensuring precise feeding schedules for your plants.'
      },
      {
        title: 'Operation Guide',
        content: 'Learn how to operate and maintain your fertigation skid system for optimal performance.'
      }
    ],
    video: {
      url: 'https://www.youtube.com/embed/example',
      title: 'Fertigation System Guide',
      description: 'Comprehensive guide to operating the fertigation skid system.'
    },
    externalLinks: [
      {
        title: 'Maintenance Manual',
        url: 'https://fertigation.example.com',
        description: 'Detailed maintenance procedures and troubleshooting guides.'
      }
    ]
  },
  'power-distribution': {
    title: 'Power Distribution Box',
    description: 'Guide to power distribution systems and electrical management',
    image: 'https://picsum.photos/800/400?random=5',
    overview: [
      {
        title: 'Power Management',
        content: 'Understanding the power distribution system and its role in your growing operation.'
      },
      {
        title: 'Safety Guidelines',
        content: 'Important safety information and best practices for working with electrical systems.'
      }
    ],
    video: {
      url: 'https://www.youtube.com/embed/example',
      title: 'Power System Overview',
      description: 'Safety guidelines and operational procedures for power distribution.'
    },
    externalLinks: [
      {
        title: 'Electrical Specifications',
        url: 'https://power.example.com',
        description: 'Technical specifications and safety documentation.'
      }
    ]
  },
  'door-control': {
    title: 'Door Control Systems',
    description: 'Setup and management of door control and access systems',
    image: 'https://picsum.photos/800/400?random=6',
    overview: [
      {
        title: 'Access Control',
        content: 'Learn about our door control systems and how they integrate with your security infrastructure.'
      },
      {
        title: 'Configuration',
        content: 'Step-by-step guide to configuring access controls and user permissions.'
      }
    ],
    video: {
      url: 'https://www.youtube.com/embed/example',
      title: 'Door Control Setup',
      description: 'Installation and configuration of door control systems.'
    },
    externalLinks: [
      {
        title: 'Access Control Manual',
        url: 'https://doors.example.com',
        description: 'Complete documentation for door control systems.'
      }
    ]
  },
  'security-cameras': {
    title: 'Security Cameras',
    description: 'Installation and configuration of security camera systems',
    image: 'https://picsum.photos/800/400?random=7',
    overview: [
      {
        title: 'Camera System',
        content: 'Overview of our security camera system and its integration with other security features.'
      },
      {
        title: 'Monitoring Setup',
        content: 'Guide to setting up and configuring camera monitoring and recording.'
      }
    ],
    video: {
      url: 'https://www.youtube.com/embed/example',
      title: 'Camera System Setup',
      description: 'Complete guide to installing and configuring security cameras.'
    },
    externalLinks: [
      {
        title: 'Camera Documentation',
        url: 'https://cameras.example.com',
        description: 'Technical documentation and user guides for security cameras.'
      }
    ]
  }
}; 