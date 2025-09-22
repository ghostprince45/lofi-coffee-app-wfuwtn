
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const colors = {
  primary: '#8B4513',      // Coffee brown
  secondary: '#D2691E',    // Chocolate brown
  accent: '#DEB887',       // Burlywood
  background: '#FFF8DC',   // Cornsilk - warm cream
  backgroundAlt: '#F5F5DC', // Beige
  text: '#3E2723',         // Dark brown
  textLight: '#6D4C41',    // Medium brown
  card: '#FFFFFF',         // White cards
  shadow: '#8B4513',       // Coffee brown shadow
  gold: '#FFD700',         // Gold accent
  green: '#228B22',        // Forest green for fresh elements
};

export const buttonStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: '100%',
  },
  secondary: {
    backgroundColor: colors.secondary,
    alignSelf: 'center',
    width: '100%',
  },
  accent: {
    backgroundColor: colors.accent,
    alignSelf: 'center',
    width: '100%',
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 8,
    fontFamily: 'Montserrat_700Bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.textLight,
    marginBottom: 20,
    fontFamily: 'OpenSans_400Regular',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: 'OpenSans_400Regular',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    width: '100%',
    boxShadow: '0px 4px 12px rgba(139, 69, 19, 0.15)',
    elevation: 4,
  },
  menuCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    width: '100%',
    boxShadow: '0px 2px 8px rgba(139, 69, 19, 0.1)',
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: colors.primary,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: colors.backgroundAlt,
    boxShadow: '0px -2px 8px rgba(139, 69, 19, 0.1)',
    elevation: 8,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navButtonActive: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: 12,
  },
});
