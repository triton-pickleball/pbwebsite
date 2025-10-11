export interface JoinPageData {
  tryoutForm: {
    url: string;
    text: string;
    description?: string;
  };
  interestForm?: {
    url: string;
    text: string;
    description?: string;
  };
  discordLink: {
    url: string;
    text: string;
  };
  scheduleLink: {
    url: string;
    text: string;
  };
}

export const joinPageData: JoinPageData = {
  tryoutForm: {
    url: "https://forms.gle/J1zoBDMQ6V5Cptjg7", // Replace with actual form URL
    text: "Tryout Form",
    description: "Complete forms required to tryout. Tryouts are held to find new members."
  },
  interestForm: {
    url: "https://forms.google.com/your-interest-form", // Replace with actual form URL
    text: "Interest Form", 
    description: "Fill out our interest form to let us know you're interested in joining."
  },
  discordLink: {
    url: "https://discord.gg/5Jsz8rKStg",
    text: "Join Discord"
  },
  scheduleLink: {
    url: "/events", // This will be converted to full URL in the component
    text: "View Schedule"
  }
};

// Helper function to get full URL for internal links
export function getFullUrl(path: string, baseUrl: string): string {
  if (path.startsWith('http')) {
    return path; // External URL
  }
  return `${baseUrl}${path}`;
}
