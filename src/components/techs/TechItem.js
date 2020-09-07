import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTech }) => {
  const onClick = () => {
    deleteTech(tech.id);
    M.toast({
      html: `Delete ${tech.firstName} ${tech.lastName} successfully!`,
    });
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content" onClick={onClick}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
