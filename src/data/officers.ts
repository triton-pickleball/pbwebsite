export interface Officer {
  name: string;
  role: string;
  image: string;
  email?: string;
  bio?: string;
}

export const officers: Officer[] = [
  {
    name: "Benton Tran",
    role: "President / Principle Member",
    image: "profile_placeholder.jpg",
    email: "realtritonpickleball@gmail.com",
    // bio: "Leading the club with passion and dedication"
  },
  {
    name: "Bryan Hong",
    role: "Principle Member",
    image: "profile_placeholder.jpg",
    email: "realtritonpickleball@gmail.com",
    // bio: "Managing club ...."
  },
  {
    name: "Alyssa Duran",
    role: "Principle Member",
    image: "profile_placeholder.jpg",
    email: "realtritonpickleball@gmail.com",
    // bio: "Managing club ...."
  }
];

// Helper function to get responsive grid classes based on number of officers
export function getOfficerGridClasses(officerCount: number): string {
  if (officerCount <= 2) {
    return "grid grid-cols-1 sm:grid-cols-2 gap-8";
  } else if (officerCount <= 3) {
    return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8";
  } else if (officerCount <= 4) {
    return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8";
  } else if (officerCount <= 5) {
    return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8";
  } else if (officerCount <= 6) {
    return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8";
  } else {
    // For 7+ officers, use a flexible grid that adapts
    return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8";
  }
}
