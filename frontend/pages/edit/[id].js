import { useRouter } from "next/router";

export default function IssueEditPage() {
  const router = useRouter();
  const { id } = router.query;

  return <p>specific issue edit page: {id}</p>;
}
