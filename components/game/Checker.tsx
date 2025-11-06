import Svg, { Circle, Text } from 'react-native-svg';

export const Red = () => (
    <Svg width={50} height={50} viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
    </Svg>
);
export const Black = () => (
    <Svg width={50} height={50} viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="black" />
    </Svg>
);
export const KingRed = () => (
    <Svg width={50} height={50} viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
        <Text
            x="50"
            y="55"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="36"
            fontWeight="bold"
            fill="black"
        >
            K
        </Text>
    </Svg>
);
export const KingBlack = () => (
    <Svg width={50} height={50} viewBox="0 0 100 100">
        <Circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="black" />
        <Text
            x="50"
            y="55"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="36"
            fontWeight="bold"
            fill="white"
        >
            K
        </Text>
    </Svg>
);