import React         from 'react';
import ContentBoxOne from './contentBoxes/ContentBoxOne';
import ContentBoxTwo from './contentBoxes/ContentBoxTwo';
import '../../assets/styles/henlo.scss';
import '../../assets/styles/prism.css';


const Henlo = ({ showTheBirbs, showHenloCode, displayBirbs, showCode }) => {

  const displayHelper  = () => displayBirbs(!showTheBirbs);
  const showCodeHelper = () => showHenloCode(!showCode);
  
  return (
    <div className="henloWrapper">
      <ContentBoxOne />
      <ContentBoxTwo 
        displayHelper={displayHelper} 
        showCodeHelper={showCodeHelper} 
        showCode={showCode}
        showTheBirbs={showTheBirbs}
        />
    </div>
  );
};

export default Henlo;
