import React from 'react';

export default function ServiceCard(props) {
  return (
    <>
      <div className="cursor poppins_regular_400" id="serviceCard">
        {/* -------------------------SVG---------------------  */}

        <img src={props.logo} alt="" />

        {/* -------------------------SVG---------------------  */}

        <h4 className="poppins_light_300"> Rent A Room</h4>
      </div>
    </>
  );
}
