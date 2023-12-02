import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: NextRequest) {
  try {
    const fontDataBold = await fetch(
      new URL('../../../assets/Sora-Bold.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    const { searchParams } = new URL(request.url);

    const title = searchParams.has('title') ? searchParams.get('title') : '';
    const date = searchParams.has('date') ? searchParams.get('date') : '';

    return new ImageResponse(
      (
        <div
          tw="flex flex-col justify-center items-center w-full h-full"
          style={{
            backgroundColor: '#4158D0',
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
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Sora',
            data: fontDataBold,
            style: 'normal',
          },
        ],
      },
    );
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
