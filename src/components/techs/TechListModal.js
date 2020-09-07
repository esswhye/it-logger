import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { getTechs } from "../../actions/techActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
  }, []);
  /*
  const getTechs = async () => {
    const res = await fetch("/techs");
    const data = await res.json();
  };*/

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-context">
        <h4>Technician List</h4>
        <ul className="collection">
          {techs !== null &&
            !loading &&
            techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
