export class Cv {
  name: string;
  firstName: string;
  job: string;
  location: string;
  email: string;
  phoneNumber: number;
  skills: string;
  languages: string;
  workExperience: string;
  education;
  constructor(name: string, firstName: string, job: string, location: string, email: string, phoneNumber: number,
              skills: string, languages: string, workExperience: string, education) {
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
