import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    personalInfo: {
      name: "John Doe",
      title: "Fullstack Web Developer",
      links: [
        { name: "john@doe.com", icon: "email" },
        { name: "123-456-7890", icon: "phone" },
        { name: "example.com", icon: "website" },
        {
          name: "linkedin.com/in/john-doe",
          icon: "linkedin",
        },
        { name: "github.com/john-doe", icon: "github" },
        { name: "123 Main St, City, State 12345", icon: "address" },
      ],
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      photo: "https://picsum.photos/200",
    },
    educations: [
      {
        id: 10,
        school: "İstanbul Üniversitesi",
        field: "Computer Science",
        start: "2005",
        end: "2010",
      },
    ],
    experiences: [
      {
        id: 11,
        company: "Patika.dev",
        position: "Software Developer",
        start: "August 2023",
        end: "March 2024",
        description:
          "Full Stack Developer Bootcamp Instructor lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    skills: ["Java", "SpringBoot", "JavaScript", "React", "HTML", "CSS"],
    projects: [
      {
        id: 1,
        name: "Library Management System",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        liveLink: "www.example.com",
        githubLink: "www.github.com/example",
        photo: "https://via.placeholder.com/150",
      },
    ],
    languages: ["English"],
    // interests: ["Reading", "Music"],
    references: [
      {
        id: 1,
        name: "Jane Doe",
        position: "Technical Coordinator",
        company: "Patika Dev",
        phone: "123-456-7890",
        email: "technical@patika.dev",
      },
    ],
  },
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.personalInfo[action.payload.key] = action.payload.value;
    },
    updatePersonalLinks: (state, action) => {
      state.personalInfo.links[action.payload.key].name = action.payload.value;
    },
    addEducation: (state, action) => {
      state.educations.push(action.payload);
    },
    deleteEducation: (state, action) => {
      state.educations = state.educations.filter(
        (education) => education.id !== action.payload
      );
    },
    updateEducation: (state, action) => {
      const { id, key, value } = action.payload;
      const parseId = parseInt(id);
      const education = state.educations.find(
        (education) => education.id === parseId
      );
      education[key] = value;
    },
    addExperience: (state, action) => {
      state.experiences.push(action.payload);
    },
    deleteExperience: (state, action) => {
      state.experiences = state.experiences.filter(
        (experience) => experience.id !== action.payload
      );
    },
    updateExperience: (state, action) => {
      const { id, key, value } = action.payload;
      const parseId = parseInt(id);
      const experience = state.experiences.find(
        (experience) => experience.id === parseId
      );
      console.log(parseId);
      experience[key] = value;
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    deleteSkill: (state, action) => {
      state.skills = state.skills.filter((skill) => skill !== action.payload);
    },
    updateSkill: (state, action) => {
      const { id, value } = action.payload;
      state.skills[id] = value;
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload
      );
    },
    updateProject: (state, action) => {
      const { id, key, value } = action.payload;
      const parseId = parseInt(id);
      const project = state.projects.find((project) => project.id === parseId);
      project[key] = value;
    },
    addLanguage: (state, action) => {
      state.languages.push(action.payload);
    },
    deleteLanguage: (state, action) => {
      state.languages = state.languages.filter(
        (language) => language !== action.payload
      );
    },
    updateLanguage: (state, action) => {
      const { id, value } = action.payload;
      state.languages[id] = value;
    },

    addReference: (state, action) => {
      state.references.push(action.payload);
    },
    deleteReference: (state, action) => {
      state.references = state.references.filter(
        (reference) => reference.id !== action.payload
      );
    },
    updateReference: (state, action) => {
      const { id, key, value } = action.payload;
      const parseId = parseInt(id);
      const reference = state.references.find(
        (reference) => reference.id === parseId
      );
      reference[key] = value;
    },
  },
});

export default resumeSlice.reducer;
