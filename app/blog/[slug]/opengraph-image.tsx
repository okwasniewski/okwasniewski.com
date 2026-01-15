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

  const fontData = await readFile(join(process.cwd(), "assets/Geist-Bold.ttf"));

  return new ImageResponse(
    <div
      tw="flex flex-col justify-between w-full h-full p-16"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div tw="flex flex-col">
        <h1
          tw="text-white leading-tight"
          style={{ fontSize: 64, maxWidth: "90%" }}
        >
          {title}
        </h1>
      </div>
      <div tw="flex w-full justify-between items-end">
        <p tw="text-neutral-400" style={{ fontSize: 24 }}>
          {date}
        </p>
        <p tw="text-neutral-400" style={{ fontSize: 24 }}>
          oskarkwasniewski.dev
        </p>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
