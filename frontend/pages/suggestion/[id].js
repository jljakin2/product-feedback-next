import { useRouter } from "next/router";

export default function SuggestionPage() {
  const router = useRouter();
  const { id } = router.query;

  return <p>specific issue: {id}</p>;
}
