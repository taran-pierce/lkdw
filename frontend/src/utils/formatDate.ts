export default function formatDate(date: string) {
  const dateObject = new Date(date);

  const prettyDate = `${dateObject.getMonth()}/${dateObject.getDay()}/${dateObject.getFullYear()}`;

  return prettyDate;
}