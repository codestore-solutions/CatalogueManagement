import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeOutline(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10 1.106l9 7.714V18a1 1 0 01-1 1h-5v-3.667a3 3 0 00-6 0V19H2a1 1 0 01-1-1V8.82l9-7.714z"
        fill="#fff"
        stroke="#777"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default HomeOutline;
