import React from 'react';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  handleFetch = () => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  handleTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      console.log(this.state.fetching);
      this.setState({ fetching: false });
    }
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo) => (
      <p key={todo.id} onClick={() => this.handleTodoClick(todo.id)}>
        {todo.title}
      </p>
    ));
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <button onClick={this.handleFetch}>Fetch</button>
        <p>{this.state.fetching ? 'LOADING...' : null}</p>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, {
  fetchTodos,
  deleteTodo,
})(_App);
