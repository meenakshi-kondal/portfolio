
export interface HOME_PROFILE {
  greeting: string;
  content: string;
  about: string;
}

export interface SKILL_DATA {
  name: string;
  technology: [{
    name: string;
    image: string;
  }]
}


export interface PROJECT_DATA {
  name: string;
  description: string;
  image: string;
  features: [{ name: string; keypoints: string }],
  showFeatures: boolean
}

export interface EXPERIENCE_DATA {
  name: string;
  position: string;
  duration: string;
  image: string;
}

export interface CONTACT_DATA {
  icon: string;
  name: string;
}
