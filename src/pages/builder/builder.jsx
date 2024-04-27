import { useSelector, useDispatch } from "react-redux";
import "./builder.css";

function Builder() {
  const data = useSelector((state) => state.resume);
  const dispatch = useDispatch();
  const handlePersonalUpdate = (e) => {
    const { name, value } = e.target;
    const payload = { key: name, value: value };
    console.log(payload);
    switch (name) {
      case "name":
      case "title":
      case "about":
      case "photo":
        dispatch({ type: "resume/updatePersonalInfo", payload: payload });
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
        dispatch({ type: "resume/updatePersonalLinks", payload: payload });
        break;
      default:
        break;
    }
  };
  const handleAddEducation = () => {
    dispatch({
      type: "resume/addEducation",
      payload: {
        id: parseInt(Math.random() * 1000),
        school: "",
        degree: "",
        start: "",
        end: "",
        description: "",
      },
    });
  };
  const handleDeleteEducation = (id) => {
    dispatch({ type: "resume/deleteEducation", payload: id });
  };
  const handleUpdateEducation = (e) => {
    const { name, value } = e.target;
    const payload = { id: e.target.id, key: name, value: value };
    dispatch({ type: "resume/updateEducation", payload: payload });
  };
  const handleAddExperience = () => {
    dispatch({
      type: "resume/addExperience",
      payload: {
        id: parseInt(Math.random() * 1000),
        title: "",
        company: "",
        start: "",
        end: "",
        description: "",
      },
    });
  };
  const handleDeleteExperience = (id) => {
    dispatch({ type: "resume/deleteExperience", payload: id });
  };
  const handleUpdateExperience = (e) => {
    const { name, value } = e.target;
    const payload = { id: e.target.id, key: name, value: value };
    dispatch({ type: "resume/updateExperience", payload: payload });
  };
  const handleAddSkill = () => {
    dispatch({ type: "resume/addSkill", payload: "" });
  };
  const handleUpdateSkill = (e) => {
    const { id, value } = e.target;
    dispatch({ type: "resume/updateSkill", payload: { id, value } });
  };
  const handleDeleteSkill = (skill) => {
    dispatch({ type: "resume/deleteSkill", payload: skill });
  };
  const handleAddProject = () => {
    dispatch({
      type: "resume/addProject",
      payload: {
        id: parseInt(Math.random() * 1000),
        name: "",
        description: "",
      },
    });
  };
  const handleDeleteProject = (id) => {
    dispatch({ type: "resume/deleteProject", payload: id });
  };
  const handleUpdateProject = (e) => {
    const { id, name, value } = e.target;
    dispatch({
      type: "resume/updateProject",
      payload: { id, key: name, value },
    });
  };
  const handleDeleteLanguage = (lang) => {
    dispatch({ type: "resume/deleteLanguage", payload: lang });
  };
  const handleAddLanguage = () => {
    dispatch({ type: "resume/addLanguage", payload: "" });
  };
  const handleUpdateLanguage = (e) => {
    const { id, value } = e.target;
    dispatch({ type: "resume/updateLanguage", payload: { id, value } });
  };
  const handleDeleteReference = (id) => {
    dispatch({ type: "resume/deleteReference", payload: id });
  };
  const handleAddReference = () => {
    dispatch({
      type: "resume/addReference",
      payload: {
        id: parseInt(Math.random() * 1000),
        name: "",
        position: "",
        email: "",
        phone: "",
        company: "",
      },
    });
  };
  const handleUpdateReference = (e) => {
    const { id, name, value } = e.target;
    dispatch({
      type: "resume/updateReference",
      payload: { id, key: name, value },
    });
  };

  return (
    <div className="builder">
      <h1>Builder</h1>
      <div className="personal-info-div">
        <h2>Personal Info</h2>
        <div className="personal-inputs">
          <input
            placeholder="John Doe"
            type="text"
            onChange={handlePersonalUpdate}
            name="name"
            value={data.personalInfo.name}
          />
          <input
            type="text"
            placeholder="Software Developer"
            onChange={handlePersonalUpdate}
            name="title"
            value={data.personalInfo.title}
          />
          <input
            type="text"
            placeholder="E-Mail"
            onChange={handlePersonalUpdate}
            name="0"
            value={data.personalInfo.links[0].name}
          />
          <input
            type="text"
            placeholder="Phone Number"
            onChange={handlePersonalUpdate}
            name="1"
            value={data.personalInfo.links[1].name}
          />
          <input
            type="text"
            placeholder="Personal Website"
            onChange={handlePersonalUpdate}
            name="2"
            value={data.personalInfo.links[2].name}
          />
          <input
            type="text"
            placeholder="Linkedin Profile"
            onChange={handlePersonalUpdate}
            name="3"
            value={data.personalInfo.links[3].name}
          />
          <input
            type="text"
            placeholder="Github Profile"
            onChange={handlePersonalUpdate}
            name="4"
            value={data.personalInfo.links[4].name}
          />
          <input
            type="text"
            placeholder="Address"
            onChange={handlePersonalUpdate}
            name="5"
            value={data.personalInfo.links[5].name}
          />
          <input
            type="upload"
            placeholder="Upload Photo"
            onChange={handlePersonalUpdate}
            name="photo"
            value={data.personalInfo.photo}
          />
          <textarea
            type="text"
            className="about-input"
            placeholder="About"
            onChange={handlePersonalUpdate}
            name="about"
            value={data.personalInfo.about}
          />
        </div>
      </div>
      <div className="personal-info-div">
        <h2>Educations</h2>
        <button onClick={handleAddEducation} className="addbtn">
          Add Education
        </button>
        {data.educations.map((education) => (
          <div key={education.id} className="education">
            <input
              type="text"
              placeholder="School Name"
              onChange={handleUpdateEducation}
              name="school"
              id={education.id}
              value={education.school}
            />
            <input
              type="text"
              placeholder="Field"
              onChange={handleUpdateEducation}
              name="field"
              id={education.id}
              value={education.field}
            />
            <div className="eduDate">
              <input
                type="text"
                placeholder="Start Date"
                onChange={handleUpdateEducation}
                name="start"
                id={education.id}
                value={education.start}
              />
              <input
                type="text"
                placeholder="End Date"
                onChange={handleUpdateEducation}
                name="end"
                id={education.id}
                value={education.end}
              />
            </div>
            <button
              className="deletebtn"
              onClick={() => handleDeleteEducation(education.id)}
            >
              Delete Education
            </button>
          </div>
        ))}
      </div>
      <div className="personal-info-div">
        <h2>Experiences</h2>
        <button onClick={handleAddExperience} className="addbtn">
          Add Experience
        </button>
        {data.experiences.map((experience) => (
          <div key={experience.id} className="experience">
            <input
              type="text"
              placeholder="Position"
              onChange={handleUpdateExperience}
              name="position"
              id={experience.id}
              value={experience.position}
            />
            <input
              type="text"
              placeholder="Company"
              onChange={handleUpdateExperience}
              name="company"
              id={experience.id}
              value={experience.company}
            />
            <input
              type="text"
              placeholder="Start Date"
              onChange={handleUpdateExperience}
              name="start"
              id={experience.id}
              value={experience.start}
            />
            <input
              type="text"
              placeholder="End Date"
              onChange={handleUpdateExperience}
              name="end"
              id={experience.id}
              value={experience.end}
            />
            <textarea
              type="text"
              placeholder="Description"
              onChange={handleUpdateExperience}
              name="description"
              id={experience.id}
              value={experience.description}
              className="about-input"
            />
            <button
              className="deletebtn"
              onClick={() => handleDeleteExperience(experience.id)}
            >
              Delete Experience
            </button>
          </div>
        ))}
      </div>
      <div className="personal-info-div">
        <h2>Skills</h2>
        <button onClick={handleAddSkill} className="addbtn">
          Add Skill
        </button>
        <div className="skills">
          {data.skills.map((skill, index) => (
            <div key={index} className="skill">
              <input
                type="text"
                placeholder="Skill"
                onChange={handleUpdateSkill}
                name="skill"
                id={index}
                value={skill}
              />
              <span> {"->"} </span>
              <button
                className="skilldeletebtn"
                onClick={() => handleDeleteSkill(skill)}
              >
                Delete Skill
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="personal-info-div">
        <h2>Projects</h2>
        <button onClick={handleAddProject} className="addbtn">
          Add Project
        </button>
        {data.projects.map((project) => (
          <div key={project.id} className="project">
            <input
              type="text"
              placeholder="Project Name"
              onChange={handleUpdateProject}
              name="name"
              id={project.id}
              value={project.name}
            />
            <textarea
              type="text"
              placeholder="Description"
              onChange={handleUpdateProject}
              name="description"
              id={project.id}
              value={project.description}
              className="about-input"
            />
            <input
              type="text"
              placeholder="Link"
              onChange={handleUpdateProject}
              name="liveLink"
              id={project.id}
              value={project.liveLink}
            />
            <input
              type="text"
              placeholder="Github Link"
              onChange={handleUpdateProject}
              name="githubLink"
              id={project.id}
              value={project.githubLink}
            />
            <button
              className="deletebtn"
              onClick={() => handleDeleteProject(project.id)}
            >
              Delete Project
            </button>
          </div>
        ))}
      </div>
      <div className="personal-info-div">
        <h2>Languages</h2>
        <button onClick={handleAddLanguage} className="addbtn">
          Add Language
        </button>
        <div className="languages">
          {data.languages.map((lang, index) => (
            <div key={index} className="language">
              <input
                type="text"
                placeholder="Language"
                onChange={handleUpdateLanguage}
                name="language"
                id={index}
                value={lang}
              />
              <span> {"->"} </span>
              <button
                className="skilldeletebtn"
                onClick={() => handleDeleteLanguage(lang)}
              >
                Delete Language
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="personal-info-div">
        <h2>Interests</h2>
      </div> */}
      <div className="personal-info-div">
        <h2>References</h2>
        <button onClick={handleAddReference} className="addbtn">
          Add Reference
        </button>
        {data.references.map((reference) => (
          <div key={reference.id} className="reference">
            <input
              type="text"
              placeholder="Name"
              onChange={handleUpdateReference}
              name="name"
              id={reference.id}
              value={reference.name}
            />
            <input
              type="text"
              placeholder="Position"
              onChange={handleUpdateReference}
              name="position"
              id={reference.id}
              value={reference.position}
            />
            <input
              type="text"
              placeholder="E-Mail"
              onChange={handleUpdateReference}
              name="email"
              id={reference.id}
              value={reference.email}
            />
            <input
              type="text"
              placeholder="Phone Number"
              onChange={handleUpdateReference}
              name="phone"
              id={reference.id}
              value={reference.phone}
            />
            <input
              type="text"
              placeholder="Company"
              onChange={handleUpdateReference}
              name="company"
              id={reference.id}
              value={reference.company}
            />
            <button
              className="deletebtn"
              onClick={() => handleDeleteReference(reference.id)}
            >
              Delete Reference
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Builder;
