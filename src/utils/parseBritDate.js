export default (date) => {
  const DMY = date.split('/');
  return Date.parse([ DMY[1], DMY[0], DMY[2] ].join('/'));
}
