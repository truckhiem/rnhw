import {tsh} from '../../hooks/themedStyleHook';

export const useStyle = tsh(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    padding: 20,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  textValue: {
    fontSize: 15,
  },
  itemCountry: {
    alignItems: 'flex-end',
    marginBottom: 3,
  },
  textCountry: {
    fontSize: 15,
    color: 'blue',
    textDecorationLine: 'underline',
  },
}));
