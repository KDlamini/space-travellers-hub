import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/actions/missions';

const MissionCard = (props) => {
  const {
    name,
    description,
    missionid,
    reserved,
  } = props;

  const dispatch = useDispatch();

  const joinMissionHandler = () => { dispatch(joinMission(missionid)); };

  const leaveMissionHandler = () => { dispatch(leaveMission(missionid)); };

  return (
    <tr>
      <td className="Table-Content Mission">{name}</td>
      <td className="Table-Content Description Desc-Info">{description}</td>
      <td className="Table-Content Status Btn">
        <span className="Member">NOT A MEMBER</span>
      </td>
      <td className="Table-Content Empty Btn">
        {reserved && (
          <button
            type="submit"
            className="Join Joined"
            onClick={leaveMissionHandler}
          >
            Leave Mission
          </button>
        )}
        {!reserved && (
          <button
            type="submit"
            className="Join"
            onClick={joinMissionHandler}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

MissionCard.defaultProps = {
  name: '',
  description: '',
  missionid: '',
  reserved: false,
};

MissionCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  missionid: PropTypes.string,
  reserved: PropTypes.bool,
};

export default MissionCard;
