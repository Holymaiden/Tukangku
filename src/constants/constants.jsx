import { Dimensions ,StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Ionicons } from '@expo/vector-icons';
export const SIZES = {
    base: 8,
    font: 16,
    radius: 4,
    padding: 24,
    cardHeight: 120,
    h1: 34,
    h2: 24,
    h3: 20,
    title: 18,
    subtitle: 14,
    caption: 12,
    small: 10,
    width,
    height,
    cardBorderRadius: 7
};

export const SHADOW = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
    // elevation: 0,
};

export const FONTS = {
    h1: { fontSize: SIZES.h1, letterSpacing: 0.15 },
    h2: { fontSize: SIZES.h2, letterSpacing: 0 },
    h3: { fontSize: SIZES.h3, letterSpacing: 0.15 },
    title: { fontSize: SIZES.title, letterSpacing: 0.15 },
    subtitle: { fontSize: SIZES.subtitle },
    caption: { fontSize: SIZES.caption, letterSpacing: 0.4 },
    small: { fontSize: SIZES.small, letterSpacing: 1.5 }
};

export const WEIGHTS = {
    regular: 'normal',
    bold: 'bold',
    semibold: '500',
    medium: '400',
    light: '300'
};

export const FONTFAMILY = {
    Khayal: 'Khayal',
    cairo: 'cairo',
    cairoBold : 'cairoBold',
    cairoIntail : 'cairoIntail'
};

export const hitSlop = { top: 20, left: 20, bottom: 20, right: 20 };
const ArabicStyle  = StyleSheet.create({ 
    textAlign: 'left',
    fontFamily:  FONTFAMILY.cairo,
});

const EnglishStyle = StyleSheet.create({
    alignSelf:'right'
});
export const Colors = {
    primary: "#ff8749",
    background: "#f6f8fc",
    ash: "#9EA2AA",
    secondary: "#FE3C10",
    brown: "#D6C1BB",
    black: "#121114",
    textSecondary: "#4C515E",
    textPrimary: "#747f96",
    titleColor: "#233352",
    white : '#ffff'
}

export  function GetLangStyleForText(lang)  {
    return lang === 'ar' ? ArabicStyle : EnglishStyle;
}
export  function BackIcon(lang)  {
    return lang === 'ar' ?  <Ionicons name="chevron-forward" size={24} color={Colors.black} />:  <Ionicons name="chevron-back" size={24} color={Colors.titleColor} />;
}

export default { SIZES, FONTS, WEIGHTS, FONTFAMILY, SHADOW ,GetLangStyleForText , BackIcon , Colors };
