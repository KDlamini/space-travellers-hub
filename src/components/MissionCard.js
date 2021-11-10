import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/actions/missions';

const MissionCard = (props) => {
  const { name, description } = props;
  const dispatch = useDispatch();

  const joinMissionHandler = (e) => {
    const button = e.target;
    button.innerText = 'Leave Mission';
    button.classList.add('Joined');
    dispatch(joinMission(missionid));
  };

  return (
    <tr>
      <td className="Table-Content Mission">{name}</td>
      <td className="Table-Content Description Desc-Info">{description}</td>
      <td className="Table-Content Status Btn"><span className="Member">NOT A MEMBER</span></td>
      <td className="Table-Content Empty Btn"><button type="submit" className="Join">Join Mission</button></td>
    </tr>
  );
};

MissionCard.defaultProps = {
  name: '',
  description: '',
};

MissionCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default MissionCard;
