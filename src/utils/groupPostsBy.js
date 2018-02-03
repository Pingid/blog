import * as R from 'ramda';

export default (posts, maxLength) => {

  const fitsIn = (item, group) =>
    R.reduce((a, b) => a + b.size, 0, group) + item.size <= maxLength

  const addToGroup = (item, groups) => {
    let added = false;
    return R.map(group => {
      if (fitsIn(item, group) && !added) {
        added = true;
        return R.append(item, group);
      }
      return group
    }, groups)
  }

  const fitsSomewhere = (item, groups) =>
    R.reduce((isIn, group) => isIn ? isIn : fitsIn(item, group), false, groups);

  const reducePosts = R.reduce((groups, item) => {
    if (fitsSomewhere(item, groups)) return addToGroup(item, groups);
    return R.append([item], groups);
  }, [[]], posts);

  return reducePosts
}
