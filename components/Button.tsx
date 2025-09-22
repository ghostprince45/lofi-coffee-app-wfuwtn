
import { Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../styles/commonStyles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
  variant?: 'primary' | 'secondary' | 'accent';
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
    boxShadow: '0px 2px 8px rgba(139, 69, 19, 0.2)',
    elevation: 3,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  accent: {
    backgroundColor: colors.accent,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'OpenSans_600SemiBold',
  },
  primaryText: {
    color: colors.background,
  },
  secondaryText: {
    color: colors.background,
  },
  accentText: {
    color: colors.text,
  },
});

export default function Button({ text, onPress, style, textStyle, variant = 'primary' }: ButtonProps) {
  console.log('Button rendered:', text, 'variant:', variant);
  
  const buttonStyle = [
    styles.button,
    styles[variant],
    style,
  ];

  const buttonTextStyle = [
    styles.text,
    styles[`${variant}Text`],
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={() => {
        console.log('Button pressed:', text);
        onPress();
      }}
      activeOpacity={0.8}
    >
      <Text style={buttonTextStyle}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
