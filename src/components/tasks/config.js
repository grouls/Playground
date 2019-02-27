const codeItems = {
  task_0: `
  import React       from 'react';
  import { shallow } from 'enzyme';
  import Component   from './Component';

  const getProps = props => ({
    data         : {"user" : "bob", email: "bob@bob.com"},
    loadingStatus: 'loaded',
    activeFilter : 'Some filter',
    someFunction : jest.fn(),
    someBoolean  : false,
    ...props
  });

  describe('<Component />', () => {
    describe('Initial render', () => {
      it('Should render component', () => {
        const component = shallow(
          <Component {...getProps()}/>
        );
        expect(component).toMatchSnapshot();
      });
    });
  
    describe('When data has not yet loaded', () => {
      it('then it should not render', () => {
        const component = shallow(
          <Component {...getProps({ loadingStatus : 'loading' })} />
        );
        expect(component.find('.contentWrapper')).toHaveLength(0);
      });
    });
  });`,
  task_1: `
  import * as actions            from './actions';
  import * as exampleActionTypes from '../../actionTypes';

  describe('Example Actions', () => {
    it('it should create an action to TOGGLE_INBOX_DETAILS', () => {
      const id = 1;
      const value = true;
      const expectedAction = {
        type : exampleActionTypes.TOGGLE_INBOX_DETAILS,
        id,
        value
      };
      expect(actions.toggleInboxDetails(id, true)).toEqual(expectedAction);
    });
  });         
  `,
  task_2: `
  import deepFreeze       from 'deep-freeze';
  import * as actionTypes from '../../actions/actionTypes';
  import reducer          from './someReducer';
  
  describe('someReducer', () => {
    describe('When loading some details response', () => {
      it('then it should store the response object in the store', () => {
        const stateBefore = {};
        const action = {
          type        : actionTypes.LOAD_SOME_DETAILS,
          someDetails : { someUserId : '123', username: 'bob }
        };
        deepFreeze(stateBefore);
        deepFreeze(action);
        const stateAfter = reducer(stateBefore, action);
        expect(stateAfter).toHaveProperty(
          'someUserId',
          action.someDetails.someUserId
        );
      });
    });
  });
  `,
  task_5 : `
  ..
  ....

  const Memes = () => (
    <div className="wrapper">
      <div className="contentBox">
        <Header text="Memes" />
        <div className="memesContainer">
          // add some memes here generated from a memes config map for example. Have a look at the tasks component.
          {memeRows}
        </div>
      </div>
    </div>
  );

  ....
  ..
  `
};

const getCode = id => codeItems[id];

export const TaskConfig = [
  {
    id: "task_0",
    task: "Write unit tests for all the components.",
    hint: "Check out the resources section for help! Note for fetch testing consider fetchMock! Check out the following example:",
    code: getCode("task_0")
  },
  {
    id: "task_1",
    task: "Write unit tests for all the actions.",
    hint: "Consider the following as an example test for an action:",
    code: getCode("task_1")
  },
  {
    id: "task_2",
    task: "Write unit tests for the reducers.",
    hint:
      "Consider using deep freeze in your tests to ensure data is not mutated, remember reducers are pure components and must adhere to functional programming practices. Check out the example below:",
    code: getCode("task_2")
  },
  {
    id: "task_3",
    task: "Inside nav/Header.js create a nav item component to break up the JSX into a reusable component.",
    hint: "Consider creating a header config and mapping over it to return nav items components."
  },
  {
    id: "task_4",
    task: "Create a new nav item for a 'meme' page.",
    hint: "You can add this to your newly created header config. You will also need to add in your meme page route in src/App.js"
  },
  {
    id: "task_5",
    task: "Add the following code block, where commented add your own set of memes.",
    hint: "Try add a new style sheet for a meme page and give your 'memesContainer' some css grid styles. Once you've added the grid styles, you can visualize the grid by inspecting the container.",
    code: getCode("task_5")
  },
  {
    id: "task_6",
    task: "Add custom inputs with error styling to the existing redux form fields.",
    hint: "Redux fields have a component prop for this, look at the resource section for redux docs support."
  },
  {
    id: "task_7",
    task: "Add validation to the redux form fields.",
    hint: "Check out the redux docs link in the resources section for field level validation & custom field components."
  },
];
