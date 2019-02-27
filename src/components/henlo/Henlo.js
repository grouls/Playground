import React, { useCallback }         from 'react';
import ContentBoxOne from './contentBoxes/contentBoxOne';
import ContentBoxTwo from './contentBoxes/contentBoxTwo';
import '../../assets/styles/henlo.scss';
import '../../assets/styles/prism.css';


const Henlo = ({ showTheBirbs, showHenloCode, displayBirbs, showCode }) => {

  //useCallBack will only recreate the fn if the provided props change
  const displayHelper  = useCallback(() => displayBirbs(!showTheBirbs), [showTheBirbs]);
  const showCodeHelper = useCallback(() => showHenloCode(!showCode), [showCode]);

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
