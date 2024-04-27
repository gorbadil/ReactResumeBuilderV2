/* eslint-disable react/prop-types */
import {
  Page,
  Image,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Font,
} from "@react-pdf/renderer";
import Address from "../../assets/icons/address.png";
import Website from "../../assets/icons/website.png";
import Mail from "../../assets/icons/mail.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Github from "../../assets/icons/github.png";
import Phone from "../../assets/icons/phone.png";
import Roboto from "../../assets/roboto/Roboto-Regular.ttf";

Font.register({
  family: "Roboto",
  fonts: [{ src: Roboto }],
});

function ResumePDF(props) {
  const icons = {
    email: Mail,
    website: Website,
    linkedin: Linkedin,
    github: Github,
    address: Address,
    phone: Phone,
  };
  const data = props.props;
  const socialLinksArray = [
    props.props.personalInfo.links[3].name !== "" &&
      props.props.personalInfo.links[3],
    props.props.personalInfo.links[4].name !== "" &&
      props.props.personalInfo.links[4],
  ].filter(Boolean);
  const infoLinksArray = [
    props.props.personalInfo.links[2].name !== "" &&
      props.props.personalInfo.links[2],
    props.props.personalInfo.links[0].name !== "" &&
      props.props.personalInfo.links[0],
    props.props.personalInfo.links[1].name !== "" &&
      props.props.personalInfo.links[1],
    props.props.personalInfo.links[5].name !== "" &&
      props.props.personalInfo.links[5],
  ].filter(Boolean);
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#fff",
      fontFamily: "Roboto",
    },
    break: {
      marginTop: 20,
    },
    section: {
      margin: 10,
      padding: 10,
      border: "1px solid #000",
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 75,
    },
    header: {
      width: "100%",
      flexDirection: "row",
      padding: 20,
      justifyContent: "space-between",
    },
    headerName: {
      marginRight: 10,
      padding: 10,
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    headerNameText: {
      fontSize: 36,
    },
    headerNameTitle: {
      fontSize: 24,
    },
    middleLine: {
      width: "2px",
      height: "200%",
      backgroundColor: "tomato",
    },
    seperatorLine: {
      width: "100%",
      height: "2px",
      backgroundColor: "tomato",
      margin: "10px 0",
    },
    resumeBottom: {
      width: "100%",
      flexDirection: "row",
      padding: 20,
      gap: 10,
    },
    resumeLeft: {
      width: "30%",
    },
    links: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 15,
    },
    link: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 5,
    },
    linkSocial: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "start",
      gap: 5,
      marginTop: 10,
    },
    linkName: {
      display: "flex",
      fontSize: 12,
      textIndent: "10px",
      width: "130px",
      textDecoration: "none",
      color: "#242424",
    },
    linkSocialName: {
      display: "flex",
      fontSize: 12,
      textIndent: "10px",
      textAlign: "right",
      textDecoration: "none",
      color: "#242424",
      width: "250px",
    },
    icon: {
      width: 15,
      height: 15,
    },
    leftMain: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    leftHead: {
      fontSize: 20,
    },
    educationView: {
      fontSize: 12,
      display: "flex",
      flexDirection: "column",
    },
    eduSchool: {
      fontSize: 16,
      fontWeight: "600",
    },
    eduField: {
      fontSize: 14,
    },
    eduDate: {
      fontSize: 12,
    },
    skill: {
      padding: "5px",
      fontSize: 14,
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
    },
    leftSkillsMain: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
    },
    leftRefMain: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    leftRef: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    refName: {
      fontSize: 16,
      fontWeight: "600",
    },
    refTitle: {
      fontSize: 14,
    },
    refCompany: {
      fontSize: 14,
    },
    refPhone: {
      fontSize: 12,
    },
    refEmail: {
      fontSize: 12,
      borderBottom: "1px solid #000",
      paddingBottom: "5px",
    },
    refEmailLast: {
      fontSize: 12,
    },
    resumeRight: {
      width: "70%",
    },
    experienceView: {
      fontSize: 12,
      display: "flex",
      flexDirection: "column",
    },
    experienceComp: {
      fontSize: 16,
      fontWeight: "600",
    },
    experienceField: {
      fontSize: 14,
    },
    experienceDate: {
      fontSize: 12,
      textAlign: "right",
    },
    experienceDesc: {
      fontSize: 12,
      marginTop: 5,
      textIndent: "10px",
      borderBottom: "1px solid #000",
      paddingBottom: "5px",
    },
    experienceDescLast: {
      fontSize: 12,
      marginTop: 5,
      textIndent: "10px",
    },
    about: {
      fontSize: 16,
      lineHeight: 1.5,
    },
  });
  const imageSrc = data.personalInfo.photo;
  // console.log(imageSrc);
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image style={styles.image} src={imageSrc} />
          {/* <Image
            style={styles.image}
            src="https://picsum.photos/200"
            alt="merhaba"
          /> */}
          <View style={styles.headerName}>
            <Text style={styles.headerNameText}>{data.personalInfo.name}</Text>
            <Text style={styles.headerNameTitle}>
              {data.personalInfo.title}
            </Text>
            {socialLinksArray.map((li, index) => (
              <View style={styles.linkSocial} key={`links${index}`}>
                <Link style={styles.linkSocialName} src={li.name}>
                  {li.name}
                </Link>
                <Image src={icons[li.icon]} style={styles.icon} alt="" />
              </View>
            ))}
          </View>
        </View>
        <View style={styles.resumeBottom} wrap>
          <View style={styles.resumeLeft} wrap>
            <View style={styles.links}>
              {infoLinksArray.map((li, index) => (
                <View break style={styles.link} key={`links${index}`}>
                  <Image src={icons[li.icon]} style={styles.icon} alt="" />
                  <Link style={styles.linkName} src={li.name}>
                    {li.name}
                  </Link>
                </View>
              ))}
            </View>
            <View style={styles.seperatorLine}></View>
            <View style={styles.leftMain}>
              <Text style={styles.leftHead}>Education</Text>
              {data.educations.map((edu, index) => (
                <View break key={`edu${index}`} style={styles.educationView}>
                  <Text style={styles.eduSchool}>{edu.school}</Text>
                  <Text style={styles.eduField}>{edu.field}</Text>
                  <Text style={styles.eduDate}>
                    {edu.start} - {edu.end}
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.seperatorLine}></View>
            <View style={styles.leftMain}>
              <Text className="left-head">Skills</Text>
              <View style={styles.leftSkillsMain}>
                {data.skills.map((skill, index) => (
                  <Text key={`skill${index}`} style={styles.skill}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
            <View break style={styles.seperatorLine}></View>
            <View break style={styles.leftMain}>
              <Text className="left-head">Languages</Text>
              <View style={styles.leftSkillsMain}>
                {data.languages.map((lang, index) => (
                  <Text key={`lang${index}`} style={styles.skill}>
                    {lang}
                  </Text>
                ))}
              </View>
            </View>

            <View break style={styles.seperatorLine}></View>
            <View break style={styles.leftMain}>
              <Text className="left-head">References</Text>
              <View style={styles.leftRefMain}>
                {data.references.map((ref, index) => (
                  <View key={`ref${index}`} style={styles.leftRef}>
                    <Text style={styles.refName}>{ref.name}</Text>
                    <Text style={styles.refTitle}>{ref.title}</Text>
                    <Text style={styles.refCompany}>{ref.company}</Text>
                    <Text style={styles.refPhone}>{ref.phone}</Text>
                    <Text
                      style={
                        index === data.references.length - 1
                          ? styles.refEmailLast
                          : styles.refEmail
                      }
                    >
                      {ref.email}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.middleLine}></View>
          <View style={styles.resumeRight}>
            <Text style={styles.about}> {data.personalInfo.about} </Text>
            <View style={styles.seperatorLine}></View>
            <View style={styles.leftMain}>
              <Text className="left-head">Experiences</Text>
              {data.experiences.map((exp, index) => (
                <View key={`exp${index}`} style={styles.experienceView}>
                  <Text style={styles.experienceComp}>{exp.company}</Text>
                  <Text style={styles.experienceField}>{exp.position}</Text>
                  <Text style={styles.experienceDate}>
                    {exp.start} - {exp.end}
                  </Text>
                  <Text
                    style={
                      index === data.experiences.length - 1
                        ? styles.experienceDescLast
                        : styles.experienceDesc
                    }
                  >
                    {exp.description}
                  </Text>
                </View>
              ))}
            </View>
            <View break style={styles.seperatorLine}></View>
            <View break style={styles.leftMain}>
              <Text className="left-head">Projects</Text>
              {data.projects.map((proj, index) => (
                <View key={`proj${index}`} style={styles.experienceView}>
                  <Text style={styles.experienceComp}>{proj.name}</Text>
                  <Text style={styles.experienceField}>{proj.description}</Text>
                  <Text style={styles.experienceDate}>
                    {proj.liveLink} - {proj.githubLink}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default ResumePDF;
