export class Resume {
  name: string;
  firstName: string;
  job: string;
  location: string;
  email: string;
  phoneNumber: string;
  skills: string[];
  languages: string[];
  workExperience: string[];
  education: string[];

  constructor(name: string, firstName: string, job: string, location: string, email: string,
              skills: string[], languages: string[], workExperience: string[], education: string[], phoneNumber = '') {
    this.name = name;
    this.firstName = firstName;
    this.job = job;
    this.location = location;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.skills = skills;
    this.languages = languages;
    this.workExperience = workExperience;
    this.education = education;
  }
}
