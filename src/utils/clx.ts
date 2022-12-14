export default function clx(record: Record<string, boolean>) {
  const classes = [];
  for (let chunk in record) {
    record[chunk] && classes.push(chunk);
  }
  return classes.join(' ');
}
