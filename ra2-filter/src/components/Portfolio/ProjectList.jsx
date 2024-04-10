import PropTypes from 'prop-types';

const ProjectList = ({ projects }) => {
  return (
    <div className="projectlist">
      {projects.map((project) => (
        <img className="projectlist-img" key={project.img} src={project.img} alt={project.category} />
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProjectList;
