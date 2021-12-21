import Link from "next/link";

export default function EditFeedbackBtn({ id }) {
  return (
    <Link href={`/edit/${id}`} passHref>
      <button className="btn blue">Edit Feedback</button>
    </Link>
  );
}
