export const contactContent = {
  hero: {
    title: "Contact Us",
    subtitle: "Get in Touch with Our Team",
    description: "Have questions about our products or need assistance? We're here to help. Get in touch with our team using the form below or through our contact information."
  },

  image: {
    src: "/images/container/container-doors-open.png",
    alt: "Garden Gems Container Display"
  },

  contactInfo: {
    title: "Contact Information",
    items: [
      {
        title: "Email",
        value: "info@gardengemsinternational.com",
        icon: "mail"
      },
      {
        title: "Instagram",
        value: "@gardengemsinternational",
        url: "https://instagram.com/gardengemsinternational",
        icon: "instagram"
      },
      {
        title: "LinkedIn",
        value: "Garden Gems International",
        url: "https://linkedin.com/company/garden-gems-international",
        icon: "linkedin"
      }
    ]
  },

  form: {
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        required: true
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      },
      {
        name: "company",
        label: "Company",
        type: "text",
        required: true
      },
      {
        name: "subject",
        label: "Subject",
        type: "text",
        required: true
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        required: true,
        rows: 6
      }
    ],
    submitButton: {
      text: "Send Message",
      loadingText: "Sending..."
    },
    messages: {
      success: "Thank you for your message. We will get back to you soon!",
      error: "There was an error submitting your message. Please try again later."
    },
    googleForm: {
      id: "1FAIpQLSdNXbM-lX7aL2N69HzfdKQOttnvM8i1_Wv_0AOPIf58ZR3WWQ",
      fields: {
        firstName: "entry.1239206215",
        lastName: "entry.1658023229",
        email: ["emailAddress", "entry.1346407412"],
        company: "entry.579681654",
        subject: "entry.46365967",
        message: "entry.1765825334"
      }
    }
  }
}; 