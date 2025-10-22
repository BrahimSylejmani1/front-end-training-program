/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";
import moment from 'moment'

import { 
  randomValuesOfLength,
  randomPositiveValues,
  randomWordsOfLength,
  randomGroupsOfLength
} from 'utils/DataGenerator'
import { Italic } from "presentations/Label";
import Code from "presentations/Code";

const styles = ({ typography, size }) => ({
  content: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start'
  },
  search: {
    width: '100%',
  }
})

const cv = `{
  name: "Agon Lohaj",
  education: [
    {
      type: "Bachelor",
      from: moment("27-07-2013", "DD-MM-YYYY").format("MMMM Do YYYY")
      // more stuff
    }
  ],
  skills: [
    {
      type: "Music",
      name: "Drumming",
      level: 6 // 1-10
      // more stuff
    }
  ]
  // more stuff here
}`

class Assignments extends React.Component {

     cvData = {
        name: "Brahim Sylejmani",
        title: "Software Engineer",
         email: "brahim@purchaise.ai",
        phone: "+383 44 123 456",
        education: [
            {
                type: "Bachelor",
                field: "Computer Science and Engineering",
                institution: "UBT University",
                from: moment("01-10-2021", "DD-MM-YYYY").format("MMMM YYYY"),
                to:  moment("01-9-2025", "DD-MM-YYYY").format("MMMM YYYY"),
            },
            {
                type: "Master",
                field: "Computer and Software Engineering",
                institution: "FIEK - Faculty of Electronic and Computer Engineering",
                from: moment("15-09-2025", "DD-MM-YYYY").format("MMMM YYYY"),
                to: "Present"
            }
        ],
        experience: [
            {
                role: "Back-end Engineer Intern",
                company: "PurchAIse AI",
                from: moment("08-09-2025", "DD-MM-YYYY").format("MMMM YYYY"),
                to: "Present",
                description: "Worked on GraphQL, React, and AI assistant integrations."
            },
            {
                role: "Back-End Trainee",
                company: "Prime Retail & Trade Solutions",
                from: "June 2025",
                to: "August 2025",
                description: "Implemented Play Framework APIs, MongoDB queries, and Redis caching."
            }
        ],
        skills: [
            { name: "Java", level: 8 },
            { name: "Spring Boot", level: 7 },
            { name: "ReactJS", level: 9 },
            { name: "MongoDB", level: 7 },
        ],
        languages: [
            { name: "English", level: "Fluent" },
            { name: "Albanian", level: "Native" }
        ]
    }

  render() {
    const { classes, section } = this.props
    return (
      <Fragment>
        <Typography variant={'heading'}>
          {section.display}
          <Typography variant='p'>
            Home Assignment
          </Typography>
          <Divider />
        </Typography>
        <Typography variant='p'>
          Title: "Implement my CV:"<br/>
          Description: "Show the Education, Work Experience, Basic Information and other relevant information for my curriculum vitae"<br/>
          Model the information on an array, that would look kinda like this:
          <Code>
            {cv}
          </Code>
        </Typography>
        <Typography variant='p'>
          The implementation of this assignment will be done in this page. Check it out at /src/pages/lecture4/Assignments.js:
        </Typography>

        {/* Your implementation starts here */}
          <div className={classes.content}>
              <Typography variant="title">{this.cvData.name}</Typography>
              <Typography variant="p">{this.cvData.title}</Typography>
              <Typography variant="p">📧 {this.cvData.email}</Typography>
              <Typography variant="p">📞 {this.cvData.phone}</Typography>

              <Divider />

              <Typography variant="subtitle">Education</Typography>
              {this.cvData.education.map((edu, i) => (
                  <div key={i}>
                      <Italic>{edu.type}</Italic> — {edu.field} at {edu.institution} ({edu.from} - {edu.to})
                  </div>
              ))}

              <Divider />

              <Typography variant="subtitle">Experience</Typography>
              {this.cvData.experience.map((exp, i) => (
                  <div key={i}>
                      <b>{exp.role}</b> at {exp.company} ({exp.from} - {exp.to})
                      <div>{exp.description}</div>
                  </div>
              ))}

              <Divider />

              <Typography variant="subtitle">Skills</Typography>
              <ul>
                  {this.cvData.skills.map((skill, i) => (
                      <li key={i}>
                          <span>{skill.name}</span>
                          <span>({skill.level}/10)</span>
                      </li>
                  ))}
              </ul>


              <Divider />

              <Typography variant="subtitle">Languages</Typography>
              <ul>
                  {this.cvData.languages.map((lang, i) => (
                      <li key={i}>
                          <span>{lang.name}</span>
                          <span>{lang.level}</span>
                      </li>
                  ))}
              </ul>
          </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Assignments)
