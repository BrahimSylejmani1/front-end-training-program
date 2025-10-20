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
      </Fragment>
    )
  }
}

export default withStyles(styles)(Assignments)
