const MissionCard = (props) => {
  const { name, description } = props;

  return (
    <tr>
      <td className="Table-Content Mission">{name}</td>
      <td className="Table-Content Description Desc-Info">{description}</td>
      <td className="Table-Content Status Btn"><span className="Member">NOT A MEMBER</span></td>
      <td className="Table-Content Empty Btn"><button type="submit" className="Join">Join Mission</button></td>
    </tr>
  );
};

export default MissionCard;
