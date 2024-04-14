import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    zIndex: 999,
    bottom: 10,
    right: 16,
    left: 16,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toastTitle: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
  },
});
