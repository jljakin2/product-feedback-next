// third-party
import { useRouter } from "next/router";

export default function CancelBtn() {
  const router = useRouter();

  return (
    <button
      className="btn full cancel"
      type="button"
      onClick={() => router.back()}>
      Cancel
    </button>
  );
}
