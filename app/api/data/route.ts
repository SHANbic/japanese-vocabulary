import { NextResponse } from "next/server";

const _namespace = "japanese-vocabulary";
const _viewsCounter = "count-views";
const _studiesCounter = "count-studies";

export async function GET() {
  try {
    const studiesRaw = await fetch(
      `https://api.counterapi.dev/v1/${_namespace}/${_studiesCounter}`
    );
    const studies = await studiesRaw.json();

    const viewsRaw = await fetch(
      `https://api.counterapi.dev/v1/${_namespace}/${_viewsCounter}`
    );
    const views = await viewsRaw.json();

    return NextResponse.json(
      { message: "ok", studiesCount: studies.count, viewsCount: views.count },
      {
        status: 200,
      }
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    return NextResponse.json(JSON.stringify({ message: "nok" }), {
      status: 500,
    });
  }
}
