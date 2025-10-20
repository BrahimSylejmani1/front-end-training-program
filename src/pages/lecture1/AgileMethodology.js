/**
 * Created by LeutrimNeziri on 09/04/2019.
 */
import withStyles from "@material-ui/core/styles/withStyles";
import agileMethodology from 'assets/images/lecture1/agile_methodology.jpg';
import scrumImage from 'assets/images/lecture1/scrum.png';
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, { Fragment } from "react";

const styles = ({ typography }) => ({
  root: {},
})


class AgileMethodology extends React.Component {
  render() {
    const { classes, section } = this.props

    let scrum = section.children[0]

    return (
      <Fragment>
        <Typography variant={'heading'}>
          Agile Methodology
          <Divider />
        </Typography>
        <Typography variant={'p'}>
          AGILE methodology is a practice that promotes continuous iteration of development and testing throughout the software development life cycle of the project. Both development and testing activities are concurrent unlike the Waterfall model.
        </Typography>
        <Typography variant={'p'}>
          The agile software development emphasizes on four core values:
          <ol>
            <li>Individual and team interactions over processes and tools</li>
            <li>Working software over comprehensive documentation</li>
            <li>Customer collaboration over contract negotiation</li>
            <li>Responding to change over following a plan</li>
          </ol>
        </Typography>
        <Typography variant={'p'}>
          <img src={agileMethodology} />
        </Typography>
        <Typography variant={'p'}>
          Here are some key points on how an agile model works:
          <ol>
            <li>Agile method proposes incremental and iterative approach to software design</li>
            <li>The agile process is broken into individual models that designers work on</li>
            <li>The customer has early and frequent opportunities to look at the product and make decisions and changes to the project</li>
            <li>Agile model is considered unstructured compared to the waterfall model</li>
            <li>Small projects can be implemented very quickly. For large projects, it is difficult to estimate the development time.</li>
            <li>Error can be fixed in the middle of the project.</li>
            <li>Development process is iterative, and the project is executed in short (2-4) weeks iterations. Planning is very less.</li>
            <li>Documentation attends less priority than software development</li>
            <li>Every iteration has its own testing phase. It allows implementing regression testing every time new functions or logic are released.</li>
            <li>In agile testing when an iteration end, shippable features of the product is delivered to the customer. New features are usable right after shipment. It is useful when you have good contact with customers.</li>
            <li>Testers and developers work together</li>
            <li>At the end of every sprint, user acceptance is performed</li>
            <li>It requires close communication with developers and together analyze requirements and planning</li>
          </ol>
        </Typography>
        <Typography id={scrum.id} variant={'title'}>
          {scrum.display}
        </Typography>

        <Typography>
          SCRUM is an agile development method which concentrates specifically on how to manage tasks within a team-based development environment. Basically, Scrum is derived from activity that occurs during a rugby match. Scrum believes in empowering the development team and advocates working in small teams (say- 7 to 9 members). It consists of three roles, and their responsibilities are explained as follows:
        </Typography>
        <Typography variant={'p'}>
          Here are some key points on how an agile model works:
          <ol>
            <li>Scrum Master - Master is responsible for setting up the team, sprint meeting and removes obstacles to progress. Preferably, a highly skilled technical guy!</li>
            <li>Product owner - The Product Owner creates product backlog, prioritizes the backlog and is responsible for the delivery of the functionality at each iteration. Product owner aligns with both the development team but also business owners to make sure that the development is going according to plan and client requirements</li>
            <li>Scrum Team - Team manages its own work and organizes the work to complete the sprint or cycle</li>
          </ol>
        </Typography>

        <Typography>
          The project development process is organised into sprints. Sprints last 1-2 weeks depending on the nature of the project. Before a sprint starts, a sprint planning meeting is held in order to pick out the tasks that will be done at the next sprint.
        </Typography>

        <Typography>
          Every Sprint will have the following events:
          <ol>
            <li>Sprint planning. The purpose is to identify, estimate and assign all the tasks that the team is ready to commit to doing, considering the sprint time. These are the questions answered during a sprint planning:
              <ul>
                <li>What are the most pressing issues and how much effort will it take the Scrum Team to do. Ways to answer: Open Discussions, Poker planning, Brainstorms</li>
                <li>What can we do in 2 weeks?</li>
                <li>Who should do what?</li>
                <li>What are the dependencies between these tasks? </li>
                <li>Do we need to perform any research?</li>
              </ul>
            </li>
            <li>Daily Stand-Up. It is a short meeting, max 5 min per participant, where everyone answers the following questions:
              <ul>
                <li>What did I do yesterday?</li>
                <li>What am I going to do today?</li>
                <li>Do I have any impediments?</li>
              </ul>
            </li>
            <li>Sprint Review. Its purpose is to have an alignment with the stakeholders. See how the sprint went, and ideally, see what the next changes are going to be published. The following questions will be targeted:
              <ul>
                <li>How did the sprint go?</li>
                <li>Did we manage as a team to complete all the tasks?</li>
                <li>How do the new features look like (Demo)?</li>
              </ul>
            </li>
            <li>Sprint Retrospective. The development team at this meeting, comes together to discuss how the sprint went internally. The following questions will be answered:
              <ul>
                <li>What went well?</li>
                <li>What went wrong?</li>
                <li>How can we improve?</li>
              </ul>
            </li>
          </ol>
        </Typography>

        <Typography variant={'p'}>
          <img src={scrumImage}/>
        </Typography>
        <Typography>
          The general idea behind SCRUM, is that at the end of every Sprint a new product deliverable is created. That means the features under development were developed, tested and merged to the repository and are ready to be published at the end of the sprint. In general, the ideal use case for a developer is to:
          <ol>
            <li>Always release fast and often. This way, there won’t be too many code changes to be managed (it is harder to publish something, that you’ve been working on for 2 years vs 2 weeks).</li>
            <li>The code released would get immediate feedback, which will be included in the backlog (to be improved at the sprints in the future)</li>
          </ol>
        </Typography>
        <Typography>
          For the SCRUM method to work is it crucial to maintain the backlog such that it is organised, and the tasks contain a clear description and a definition of done.
        </Typography>
        <Typography>
          Other structures of the definitions include:
          <ol>
            <li>Epics, or milestones, or major feature releases</li>
            <li>User stories: High level definitions of a requirement, containing just enough information so that the developers can produce a reasonable estimate of the effort to implement it.</li>
            <li>Tasks: A break down of tasks that are necessary to accomplish a user story.</li>
            <li>Bugs: Bugs reported by the client or captured by the Quality Assurance (QA) team.</li>
            <li>Research Tickets: As measures to tackle the unknown</li>
          </ol>
        </Typography>
        <Typography>
          There are different approaches on how to estimate tickets. You can use the hour estimation and/or other means of estimations. PRIME-s preferred way of estimating is using fibonacci point system. It looks like this:
          <ul>
            <li>1 Point -> a few hours (1-3 hours)</li>
            <li>2 Points -> 3-5 hours</li>
            <li>3 Points -> Whole working day</li>
            <li>5 Points -> 2-3 days</li>
            <li>8 Points -> Whole week</li>
            <li>13 Points - Whole Sprint</li>
          </ul>
        </Typography>
        <Typography>
          Other ways of handling estimations include complexity vs hours. That can be explained like this
        </Typography>
        <Typography>
          Hour Estimation:
          <ul>
            <li>Agon: “I can run to school from PRIME for 8 hours”</li>
            <li>Leutrim: “I can run to school from PRIME for 6 hours”</li>
          </ul>
        </Typography>
        <Typography>
          Complexity estimation:
        </Typography>
        <Typography>
          Agon and Leutrim both agree on the fact that “School is 5km away!”. So rather then estimating individually on the task and how much it would take you personally to accomplish it, you would rather focus on the complexity of the task (fact based).
        </Typography>
      </Fragment>
    )
  }
}

export default withStyles(styles)(AgileMethodology)
