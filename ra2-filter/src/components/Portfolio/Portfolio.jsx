import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All',
      projects: props.initialProjects
    };
  }

  onSelectFilter = (filter) => {
    this.setState({
      selectedFilter: filter,
      projects: filter === 'All'
        ? this.props.initialProjects
        : this.props.initialProjects.filter(project => project.category === filter)
    });
  };

  render() {
    console.log(this.state.projects); // Это покажет вам текущее состояние отфильтрованных проектов
    return (
      <div className="portfolio">
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selectedFilter}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={this.state.projects} />
      </div>
    );
  }

  static propTypes = {
    initialProjects: PropTypes.arrayOf(PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })).isRequired,
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
}

export default Portfolio;
