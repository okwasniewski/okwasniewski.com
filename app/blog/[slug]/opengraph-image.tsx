import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getPostBySlug } from "@/lib/getAllPosts";

export const alt = "Blog Post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let title = "";
  let date = "";

  try {
    const { meta } = await getPostBySlug("blog", slug);
    title = meta.title || "";
    date = meta.date || "";
  } catch {
    title = "Blog Post";
  }

  const fontData = await readFile(join(process.cwd(), "assets/Sora-Bold.ttf"));

  return new ImageResponse(
    <div
      tw="flex flex-col justify-center items-center w-full h-full"
      style={{
        backgroundColor: "#4158D0",
        background: `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`,
      }}
    >
      <div tw="flex flex-col text-white p-24 mb-12 w-full">
        <div tw="flex h-full items-center">
          <h1 style={{ fontSize: 75 }}>{title}</h1>
        </div>
        <div tw="flex w-full justify-between items-center">
          <p>{date}</p>
          <p>oskarkwasniewski.dev</p>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Sora",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
