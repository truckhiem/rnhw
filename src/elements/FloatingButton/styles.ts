import {tsh} from '../../hooks/themedStyleHook';

export const useStyle = tsh(theme => ({
  floatingButton: {
    borderWidth: 1,
    borderColor: theme.colors.disabled,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: theme.colors.background,
    borderRadius: 100,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
}));
