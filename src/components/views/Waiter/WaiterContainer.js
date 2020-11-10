import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, fetchStatusUpdate } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  fetchStatusUpdate: (tableId, newStatus) => dispatch(fetchStatusUpdate(tableId, newStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
