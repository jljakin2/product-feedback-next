export default function Comments({ comments }) {
  return <div>{comments[0]?.content}</div>;
}
