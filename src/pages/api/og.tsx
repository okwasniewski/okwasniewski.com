import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: NextRequest) {
  try {
    const fontDataBold = await fetch(
      new URL('../../../assets/Satoshi-Bold.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    const { searchParams } = new URL(request.url);

    const title = searchParams.has('title') ? searchParams.get('title') : '';
    const subtitle = searchParams.has('subtitle')
      ? searchParams.get('subtitle')
      : '';
    const date = searchParams.has('date') ? searchParams.get('date') : '';
    const author = searchParams.has('author') ? searchParams.get('author') : '';
    const gradientFrom = searchParams.has('gradientFrom')
      ? searchParams.get('gradientFrom')
      : '#1a2980';
    const gradientTo = searchParams.has('gradientTo')
      ? searchParams.get('gradientTo')
      : '#26d0ce';

    return new ImageResponse(
      (
        <div
          // eslint-disable-next-line react/no-unknown-property
          tw="flex flex-col justify-center items-center w-full h-full"
          style={{
            backgroundColor: gradientFrom,
            background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          <div
            // eslint-disable-next-line react/no-unknown-property
            tw="flex flex-col text-white p-12"
          >
            <h1 style={{ fontSize: 80 }}>{title}</h1>
            <h3 style={{ fontSize: 35 }}>{subtitle}</h3>
            <p>{date}</p>
            <p>{author}</p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Satoshi',
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
