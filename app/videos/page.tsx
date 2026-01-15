import type { Metadata } from "next";
import VideosContent from "./videos-content";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Conference talks, tutorials, and podcasts about React Native development.",
};

export default function VideosPage() {
  return <VideosContent />;
}
