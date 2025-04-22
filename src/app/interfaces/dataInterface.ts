
export interface HOME_PROFILE {
    greeting: string;
    content: string;
    about:string;
  }

  export interface SKILL_DATA {
    name:string;
    technology:[SKILL_TECH]
  }
  interface SKILL_TECH {
    name:string;
    image:string;
  }

