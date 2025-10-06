import StarField from "../components/StarField";

export default function Home({ stars }) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <StarField stars={stars} />
    </div>
  );
}
