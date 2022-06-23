import {tsh} from '../../hooks/themedStyleHook';

export const useStyle = tsh(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  headerBackground: {
    borderBottomLeftRadius: 30,
    backgroundColor: 'pink',
    height: 200,
  },
  headerText: {
    marginHorizontal: 16,
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 20,
  },
  item: {
    flexDirection: 'row',
    shadowColor: theme.colors.onSurface,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    backgroundColor: theme.colors.background,
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 10,
  },
  itemGroupName: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  itemTextName: {
    fontWeight: 'bold',
  },
  textHeader: {
    fontWeight: 'bold',
  },
}));
