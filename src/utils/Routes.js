import { PAGES } from 'Constants'

const routes = [
  {
    display: 'Home',
    id: PAGES.HOME,
  },
  {
    display: '1. Setup and Introduction',
    id: PAGES.LECTURE_1.ID,
    children: [
      {
        display: 'Getting Started',
        id: PAGES.LECTURE_1.GETTING_STARTED,
        children: [
          {
            display: 'GitLab',
          },
          {
            display: 'Source Tree'
          },
          {
            display: 'VS Code'
          },
          {
            display: 'Slack'
          },
          {
            display: 'MongoDB'
          },
          {
            display: 'NPM'
          },
        ]
      },
      {
        display: 'Project Setup',
        id: PAGES.LECTURE_1.PROJECT_SETTUP,
        children: [
          {
            display: 'Seting up the repository'
          },
          {
            display: 'Running the Application'
          }
        ]
      },
      {
        display: 'Agile Methodology',
        id: PAGES.LECTURE_1.AGILE_METHODOLOGY,
        children: [
          {
            display: 'Scrum'
          }
        ]
      },
      {
        display: 'Working with GIT (Source Tree or Terminal)',
        id: PAGES.LECTURE_1.WORKING_WITH_GIT,
        children: [
          {
            display: 'Workflow'
          },
          {
            display: 'Add & Commit'
          },
          {
            display: 'Pushing Changes'
          },
          {
            display: 'Branching'
          },
          {
            display: 'Update and Merge'
          }
        ]
      },
      {
        display: 'Way of Working',
        id: PAGES.LECTURE_1.WAY_OF_WORKING,
        children: [
          {
            display: 'GitLab Setup',
          },
          {
            display: 'Rules',
          },
          {
            id: 'way_of_working_exercise_1',
            display: 'Exercise 1'
          }
        ]
      }
    ]
  },
  {
    display: '2. Javascript and React (Part 1)',
    id: PAGES.LECTURE_2.ID,
    children: [
      {
        id: PAGES.LECTURE_2.JAVASCRIPT,
        display: 'JavaScript'
      },
      {
        id: PAGES.LECTURE_2.REACT,
        display: 'ReactJS',
        children: [
          {
            display: 'Introduction',
          },
          {
            display: 'Tic Tac Toe',
          }
        ]
      }
    ]
  },
  {
    display: '3. Javascript and React (Part 2)',
    id: PAGES.LECTURE_3.ID,
    children: [
      {
        id: PAGES.LECTURE_3.TIC_TAC_TOE_RECAP,
        display: 'Tic Tac Toe Recap'
      },
      {
        id: PAGES.LECTURE_3.REACT_FUNCTIONAL_COMPONENTS,
        display: 'ReactJS Functional Components (state-less)',
        children: [
          {
            display: 'Rendering Components',
          },
          {
            display: 'Composing Components',
          },
          {
            display: 'Component Extraction',
          },
          {
            display: 'Read Only Props',
          },
        ]
      },
      {
        id: PAGES.LECTURE_3.REACT_PART_TWO,
        display: 'ReactJS Lifecycle, Props and State',
        children: [
          {
            display: 'render',
          },
          {
            display: 'componentDidMount'
          },
          {
            display: 'shouldComponentUpdate'
          },
          {
            display: 'componentDidUpdate'
          },
          {
            display: 'componentWillUnmount'
          },
          {
            display: 'others'
          }
        ]
      },
      {
        id: PAGES.LECTURE_3.PROJECT_STRUCTURE,
        display: 'Project Structure'
      },
      {
        id: PAGES.LECTURE_3.ASSIGNMENTS,
        display: 'Assignments',
        children: [
          {
            display: 'Graph Functions'
          },
          {
            display: 'Binary Search Sort'
          }
        ]
      }
    ]
  },
  {
    id: PAGES.LECTURE_4.ID,
    display: '4. Javascript and React (Part 3)',
    children: [
      {
        id: PAGES.LECTURE_4.HANDLING_EVENTS,
        display: 'Handling Events',
        children: [
          {
            display: 'Passing Arguments to Event Handlers'
          }
        ]
      },
      {
        id: PAGES.LECTURE_4.CONDITIONAL_RENDERING,
        display: 'Conditional Rendering',
        children: [
          {
            display: 'Element Variables'
          },
          {
            display: 'Inline Conditional with Operators',
          },
          {
            display: 'Prevent Components from Rendering',
          }
        ]
      },
      {
        id: PAGES.LECTURE_4.FORMS,
        display: 'Forms',
        children: [
          {
            display: 'Controlled Components'
          },
          {
            display: 'Other Tags'
          },
          {
            display: 'Controlled Input Null Value'
          },
          {
            display: 'Uncontrolled Components'
          }
        ]
      },
      {
        id: PAGES.LECTURE_4.COMPOSITION_INHERITANCE,
        display: 'Composition vs Inheritance',
        children: [
          {
            display: 'Containement'
          },
          {
            display: 'Specialization'
          },
          {
            display: 'So What About Inheritance?'
          }
        ]
      },
      {
        id: PAGES.LECTURE_4.EXERCISE,
        display: 'Exercise'
      },
      {
        id: PAGES.LECTURE_4.ASSIGNMENTS,
        display: 'Assignment'
      }
    ]
  },
  {
    id: PAGES.LECTURE_5.ID,
    display: '5 & 6. React HOC-s, Routing and Children API',
    children: [
      {
        id: PAGES.LECTURE_5.ASSIGNMENT_RECAP,
        display: 'Assignments Recap',
        children: [
          {
            display: 'Graph Functions Recap'
          },
          {
            display: 'Binary Search Sort Recap'
          }
        ]
      },
      {
        id: PAGES.LECTURE_5.ROUTING,
        display: 'React Routing',
        children: [
          {
            id: 'routing_intro',
            display: 'Introduction'
          },
          {
            display: 'Route Matching'
          },
          {
            display: 'Route Rendering Props'
          },
          {
            display: 'Navigation'
          },
          {
            display: 'Code Splitting'
          }
        ]
      },
      {
        id: PAGES.LECTURE_5.HIGHER_ORDER_COMPONENTS,
        display: 'Higher Order Components',
        children: [
          { 
            id: 'hoc_intro',
            display: 'Introduction'
          },
          {
            display: 'Composition over Mutations'
          },
          {
            display: 'Pass unrelated props'
          },
          {
            display: 'Maximising Composability'
          },
          {
            id: 'hoc_debugging',
            display: 'Debugging'
          },
          {
            id: 'hoc_exercise',
            display: 'Exercise'
          }
        ]
      },
      {
        id: PAGES.LECTURE_5.REACT_CHILDREN_API,
        display: 'React.Children API',
        children: [
          {
            id: 'children_intro',
            display: 'Introduction'
          },
          {
            id: 'children_api',
            display: 'Children API Reference'
          },
          {
            display: 'Children Manipulations'
          },
          {
            id: 'children_exercise',
            display: 'Exercise'
          }
        ]
      },
      {
        id: PAGES.LECTURE_5.ASSIGNMENTS,
        display: 'Assignments',
        children: [
        ]
      }
    ]
  },
  {
    id: PAGES.LECTURE_7.ID,
    display: '7. Styling React Components',
    children: [
      {
        id: PAGES.LECTURE_7.ASSIGNMENT_RECAP,
        display: 'Assignments Recap',
        children: []
      },
      {
        id: PAGES.LECTURE_7.INTRO,
        display: 'Ways to Style React Components Intro',
        children: [
          {
            id: 'inlineStylingIntro',
            display: 'Inline Styling'
          },
          {
            id: 'vanillaCSSIntro',
            display: 'Vanilla CSS / CSS Style Sheet'
          },
          {
            id: 'CSSpreprocessorsIntro',
            display: 'Using CSS preprocessors'
          },
          {
            id: 'CSSinJSIntro',
            display: 'CSS in JS'
          }
        ]
      },
      {
        id: PAGES.LECTURE_7.INLINE_STYLING,
        display: 'Inline Styling',
        children: [
          {
            id: 'conditionalRendering',
            display: 'Conditional Rendering',
          },
          {
            id: 'noPseudClasses',
            display: 'You cannot use pseudoClasses',
          },
          {
            id: 'noCSSSelectors',
            display: 'You cannot use CSS Selectors',
          },
        ]
      },
      {
        id: PAGES.LECTURE_7.VANILLA_CSS,
        display: 'Vanilla CSS / CSS Style Sheet',
        children: [
          {
            id: 'useOfPseudoClasses',
            display: 'Use of Pseud Classes',
          },
          {
            id: 'useOfSelectors',
            display: 'Use of Selectors',
          },
          {
            id: 'useOfPseudElements',
            display: 'Use of Pseud Classes',
          },
        ]
      },
      {
        id: PAGES.LECTURE_7.CSS_PREPROCESSORS,
        display: 'CSS preprocessors',
        children: [
          {
            id: 'themeingCssPreporcessors',
            display: 'Themeing',
          },
          {
            id: 'nesting',
            display: 'Nesting',
          },
          {
            id: 'mixins',
            display: 'Mixins',
          },
          {
            id: 'operators',
            display: 'Operators',
          },
        ]
      },
      {
        id: PAGES.LECTURE_7.CSS_IN_JS,
        display: 'Css In JS',
        children: [
          {
            id: 'themeing',
            display: 'Themeing',
          },
          {
            id: 'criticalCssExtraction',
            display: 'Critical CSS extraction',
          },
          {
            id: 'lazyEvaluation',
            display: 'Lazy Evaluation',
          },
          {
            id: 'noNamingConventions',
            display: 'No Naming Conventions',
          },
          {
            id: 'styleoNgivenProp',
            display: 'Style on given Prop',
          },
          {
            id: 'exerciseCssInJs',
            display: 'Exercise',
          }
        ]
      },
      {
        id: PAGES.LECTURE_7.ASSIGNMENT,
        display: 'Assigment',
        children: []
      }
    ]
  },
  {
    id: PAGES.LECTURE_8.ID,
    display: '8. Redux',
    children: [
      {
        id: PAGES.LECTURE_8.REDUX,
        display: 'Introduction',
        children: [
          {
            display: 'Example'
          },
          {
            display: 'Motivation'
          }
        ]
      },
      {
        id: PAGES.LECTURE_8.CORE_CONCEPTS,
        display: 'Core Concepts',
        children: [
          {
            display: 'Single source of truth'
          },
          {
            display: 'State is read-only'
          },
          {
            display: 'Changes are made with pure functions'
          }
        ]
      },
      {
        id: PAGES.LECTURE_8.REACT_INTEGRATION,
        display: 'Redux React Integration',
        children: [
          {
            id: 'redux_react_exercise',
            display: 'Exercise'
          }
        ]
      }
    ]
  },
  {
    id: PAGES.LECTURE_9.ID,
    display: '9. Promises and Redux Part 2!',
    children: [
      {
        id: PAGES.LECTURE_9.PROMISES,
        display: 'Asynchronous Javascript and Promises!',
        children: [
          { display: 'Callback functions' },
          { display: 'Promises Introduction!' },
          { display: 'Promises API' }
        ]
      },
      {
        id: PAGES.LECTURE_9.REACT_ASYNCH,
        display: 'React Asynch',
        children: [
          { display: 'Example', id: 'react_asynch_example' }
        ]
      },
      {
        id: PAGES.LECTURE_9.REDUX_ASYNCH,
        display: 'Redux Asynch'
      }
    ]
  },
  {
    id: PAGES.LECTURE_10.ID,
    display: '10. Redux Middleware and API Calls!',
    children: [
      {
        id: PAGES.LECTURE_10.REDUX_MIDDLEWARE,
        display: 'Redux Middlewares',
        children: [
          { display: 'Understanding Middleware'},
          { display: 'Attempt #1: Logging Manually' },
          { display: 'Attempt #2: Wrapping Dispatch' },
          { display: 'Attempt #3: Monkeypatching Dispatch' },
          { display: 'The Final Approach' }
        ]
      },
      {
        id: PAGES.LECTURE_10.API_SERVICES,
        display: 'API Services'
      },
      {
        id: PAGES.LECTURE_10.ASSIGNMENTS,
        display: 'Assignments',
        children: [
          { display: 'Users and their Transactions!' },
          { display: 'Chess Backtracking Algorithm!' },
          { display: 'Ranking' }
        ]
      }
    ]
  },
  {
    id: PAGES.LECTURE_11.ID,
    display: '11. React Advanced Guides!',
    children: [
      {
        id: PAGES.LECTURE_11.REACT_PROPTYPES,
        display: 'React Typechecking and Documentation',
        children: [
          {
            display: 'Prop Types'
          },
          {
            display: 'Default Props'
          },
          {
            display: 'Documentation'
          }
        ]
      },
      {
        id: PAGES.LECTURE_11.REACT_CONTEXT,
        display: 'React Context',
        children: [
          {
            display: 'React.createContext'
          },
          {
            display: 'Context.Provider'
          },
          {
            display: 'Context.Consumer'
          },
          {
            display: 'Class.contextType'
          },
          {
            id: 'react_context_example',
            display: 'Example'
          }
        ]
      },
      {
        id: PAGES.LECTURE_11.REACT_HOOKS,
        display: 'React Hooks',
        children: [
          { display: 'Use State Hook' },
          { display: 'Effect Hook' },
          { display: 'Rules of Hooks' },
          { display: 'Building your own Hooks' },
          { display: 'Other Hooks' }
        ]
      }
    ]
  },
  {
    id: PAGES.LECTURE_12.ID,
    display: '12. Testing and CD/CI!',
    children: [
      {
        id: PAGES.LECTURE_12.TESTING,
        display: 'Testing your Javascript Code!',
        children: [
          { display: 'Getting Started', id: 'getting_started_testing' },
          { display: 'Common Matchers'},
          { display: 'Truthiness'},
          { display: 'Numbers'},
          { display: 'Strings'},
          { display: 'Arrays and Iterables'},
          { display: 'Exceptions'},
          { display: 'Promises'},
          { display: 'API Calls'}
        ]
      },
      {
        id: PAGES.LECTURE_12.TESTING_REDUX,
        display: 'Testing Redux!',
        children: [
          { display: 'Getting Started', id: 'getting_started_redux' },
          { display: 'Testing Store Actions' },
          { display: 'Testing Store Reducers' },
        ]
      },
      {
        id: PAGES.LECTURE_12.TESTING_REACT_COMPONENTS,
        display: 'Testing your React Components!',
        children: [
          { display: 'Getting Started', id: 'getting_started_react_components' },
          { display: 'Shallow Rendering' },
          { display: 'Full DOM Rendering' },
          { display: 'Static Rendering' },
        ]
      },
      {
        id: PAGES.LECTURE_12.CDCI,
        display: 'Continuous Deployment and Integration',
        children: [
          { display: 'Introduction', id: "cd_ci_introduction" },
          { display: 'Continuous Integration' },
          { display: 'Continuous Delivery'},
          { display: 'Continuous Deployment'},
          { display: 'Workflow', id: 'cd_ci_workflow' },
          { display: 'Setup', id: 'cd_ci_setup' }
        ]
      }
    ]
  },
  {
    id: PAGES.LECTURE_13.ID,
    display: '13. Recap and Wrap Up!',
    children: [
      {
        id: PAGES.LECTURE_13.RECAP,
        display: 'Recap!',
      },
      {
        id: PAGES.LECTURE_13.WRAP_UP,
        display: 'Wrap Up!'
      }
    ]
  },
  {
    display: 'Materials',
    id: PAGES.SUPPORT.ID,
    children: [
      {
        display: 'Plan Program',
        id: PAGES.SUPPORT.PLAN_PROGRAM
      },
      {
        display: 'Glossary',
        id: PAGES.SUPPORT.GLOSSARY,
      },
      {
        display: 'Resources',
        id: PAGES.SUPPORT.RESOURCES,
      },
      {
        display: 'Tips and Tricks',
        id: PAGES.SUPPORT.TIPS_AND_TRICKS,
        children: [
          {
            display: 'Debugging'
          },
          {
            display: 'Logging'
          },
          {
            display: 'React Dev Tools'
          }
        ]
      },
    ]
  },
  {
    display: 'Playground',
    id: PAGES.PLAYGROUND,
  }
]

const format = (which) => {
  let children = which.children || []
  return {
    ...which,
    id: !which.id ? which.display.replace(/ /g, '').replace(/[^a-zA-Z]/g, '').toLowerCase() : which.id,
    children: children.map(format)
  }
}

export const findById = (id) => {
  return routes.reduce((flatten, next) => {
    let children = next.children || []
    return [...flatten, next, ...children]
  }, []).find(which => which.id === id)
}

/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
export default routes.map(format)


