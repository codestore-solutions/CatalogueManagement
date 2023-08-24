import * as React from 'react';
import Svg, {Circle, Rect, Path} from 'react-native-svg';

function RadioActive(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={12} cy={12} r={9.5} fill="#fff" stroke="#7E72FF" />
      <Rect
        x={1}
        y={1}
        width={22}
        height={22}
        rx={11}
        stroke="#7E72FF"
        strokeOpacity={0.4}
        strokeWidth={2}
      />
      <Path
        d="M12 17.833a5.833 5.833 0 100-11.666 5.833 5.833 0 000 11.666z"
        fill="#7E72FF"
      />
    </Svg>
  );
}

export default RadioActive;
