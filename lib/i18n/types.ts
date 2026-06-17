export type Lang = "es" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    quote: string;
    contact: string;
  };
  hero: {
    badge: string;
    name: string;
    title: string;
    titleAccent: string;
    location: string;
    ctaPortfolio: string;
    ctaAbout: string;
  };
  about: {
    title: string;
    role: string;
    bio: string;
    location: string;
    education: string;
    educationDetail: string;
    license: string;
    traits: string;
    hobbies: string;
    experience: string;
    skills: string;
    educationSection: string;
    skillsList: { title: string; skills: string }[];
    experienceList: {
      role: string;
      date: string;
      achievements: string[];
    }[];
  };
  portfolio: {
    title: string;
    description: string;
    projects: {
      title: string;
      desc: string;
      tags: string[];
    }[];
  };
  services: {
    title: string;
    description: string;
    subTitle: string;
    subDescription: string;
    technologies: { name: string }[];
    categories: {
      title: string;
      description: string;
      services: { title: string; desc: string }[];
    }[];
  };
  contact: {
    title: string;
    description: string;
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
    send: string;
  };
  footer: {
    tagline: string;
  };
  notFound: {
    title: string;
    message: string;
    button: string;
  };
}
