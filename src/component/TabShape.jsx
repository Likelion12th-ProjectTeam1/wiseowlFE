import React, { useMemo } from "react";

const wWidth = 390;
const height = 70;
const halfCircleDiameter = 40; //반원 지름
const cornerRadius = 25; // 모서리 곡률

function TabShape() {
  const d = useMemo(() => {
    const rectLeftWidth = (wWidth - halfCircleDiameter) / 2 + 10;
    const rectRightWidth = rectLeftWidth + halfCircleDiameter;

    return `
      M ${cornerRadius} 0 
      H ${rectLeftWidth - cornerRadius} 
      A ${halfCircleDiameter / 2} ${
      halfCircleDiameter / 2
    } 0 0 0 ${rectRightWidth} 0 
      H ${wWidth - cornerRadius} 
      Q ${wWidth} 0 ${wWidth} ${cornerRadius} 
      V ${height} 
      H 0 
      V ${cornerRadius} 
      Q 0 0 ${cornerRadius} 0 
      Z
    `;
  }, []);

  return (
    <svg width={wWidth} height={height}>
      <path fill="#000" d={d} />
    </svg>
  );
}

export default TabShape;
