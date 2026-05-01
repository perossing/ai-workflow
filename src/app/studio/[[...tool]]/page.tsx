import { metadata, viewport } from "next-sanity/studio";
import StudioWrapper from "./StudioWrapper";

export { metadata, viewport };
export const dynamic = "force-dynamic";

export default function StudioPage() {
  return <StudioWrapper />;
}
