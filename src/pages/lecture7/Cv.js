import React, { Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import moment from "moment";
import { Divider, Typography } from "@material-ui/core";
import { Italic } from "presentations/Label";

const styles = ({ typography, size }) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#f9fafb',
        padding: 24,
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        fontFamily: typography.fontFamily,
        color: '#333',
    },
    header: {
        width: '100%',
        borderBottom: '2px solid #1976d2',
        marginBottom: 16,
        paddingBottom: 8,
    },
    contact: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
    },
    section: {
        width: '100%',
        marginTop: 16,
    },
    sectionTitle: {
        color: '#1976d2',
        marginBottom: 8,
        fontWeight: 600,
    },
    list: {
        marginLeft: 16,
        lineHeight: 1.6,
    },
    skillItem: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '200px',
    },
});

class Cv extends React.Component {
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
                to: moment("01-09-2025", "DD-MM-YYYY").format("MMMM YYYY"),
            },
            {
                type: "Master",
                field: "Computer and Software Engineering",
                institution: "FIEK – Faculty of Electronic and Computer Engineering",
                from: moment("15-09-2025", "DD-MM-YYYY").format("MMMM YYYY"),
                to: "Present",
            },
        ],
        experience: [
            {
                role: "Back-end Engineer Intern",
                company: "PurchAIse AI",
                from: moment("08-09-2025", "DD-MM-YYYY").format("MMMM YYYY"),
                to: "Present",
                description:
                    "Worked on GraphQL, React, and AI assistant integrations.",
            },
            {
                role: "Back-End Trainee",
                company: "Prime Retail & Trade Solutions",
                from: "June 2025",
                to: "August 2025",
                description:
                    "Implemented Play Framework APIs, MongoDB queries, and Redis caching.",
            },
        ],
        skills: [
            { name: "Java", level: 8 },
            { name: "Spring Boot", level: 7 },
            { name: "ReactJS", level: 9 },
            { name: "MongoDB", level: 7 },
        ],
        languages: [
            { name: "English", level: "Fluent" },
            { name: "Albanian", level: "Native" },
        ],
    };

    render() {
        const { classes, section } = this.props;
        const cv = this.cvData;

        return (
            <Fragment>
                <Typography variant="heading">
                    {section.display}
                    <Divider />
                </Typography>

                <div className={classes.root}>
                    <div className={classes.header}>
                        <Typography variant="title">{cv.name}</Typography>
                        <Typography variant="p">{cv.title}</Typography>
                        <div className={classes.contact}>
                            <Typography variant="p">📧 {cv.email}</Typography>
                            <Typography variant="p">📞 {cv.phone}</Typography>
                        </div>
                    </div>

                    <div className={classes.section}>
                        <Typography className={classes.sectionTitle} variant="subtitle">
                            Education
                        </Typography>
                        {cv.education.map((edu, i) => (
                            <Typography key={i} variant="p">
                                <Italic>{edu.type}</Italic> — {edu.field} at {edu.institution} (
                                {edu.from} – {edu.to})
                            </Typography>
                        ))}
                    </div>

                    <div className={classes.section}>
                        <Typography className={classes.sectionTitle} variant="subtitle">
                            Experience
                        </Typography>
                        {cv.experience.map((exp, i) => (
                            <div key={i}>
                                <Typography variant="p">
                                    <b>{exp.role}</b> at {exp.company} ({exp.from} – {exp.to})
                                </Typography>
                                <Typography variant="p">{exp.description}</Typography>
                            </div>
                        ))}
                    </div>

                    <div className={classes.section}>
                        <Typography className={classes.sectionTitle} variant="subtitle">
                            Skills
                        </Typography>
                        <ul className={classes.list}>
                            {cv.skills.map((s, i) => (
                                <li key={i} className={classes.skillItem}>
                                    <span>{s.name}</span>
                                    <span>{s.level}/10</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={classes.section}>
                        <Typography className={classes.sectionTitle} variant="subtitle">
                            Languages
                        </Typography>
                        <ul className={classes.list}>
                            {cv.languages.map((l, i) => (
                                <li key={i}>
                                    {l.name} – {l.level}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Cv);
