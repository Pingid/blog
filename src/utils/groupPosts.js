import * as R from 'ramda';
import moment from 'moment';

export default (posts) => {
	const sortByDate = (a, b) => moment(b.props.date, 'DD-MM-YYYY').diff(moment(a.props.date, 'DD-MM-YYYY'));
	const makeRows = (a, b) => {
		a.map(row => {
			
		})
		if (!R.last(a)) return a.append([b]);
		if (R.sum()) {}
	}
	const getGroup = post =>
		post.props.thumbnail ? 'thumbs' : 'posts'

	const group = R.compose(
		R.groupWith(getGroup)
	)
	console.log(posts)
	console.log(group(posts))
	return group(posts);
}