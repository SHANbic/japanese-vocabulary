import { NextResponse } from "next/server";

const _namespace = "japanese-vocabulary";
const _counter = "count-preco-livre";

export async function GET() {
  try {
    await fetch(`https://api.counterapi.dev/v1/${_namespace}/${_counter}/up`);
    return NextResponse.json(JSON.stringify({ message: "ok" }), {
      status: 200,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    return NextResponse.json(JSON.stringify({ message: "nok" }), {
      status: 500,
    });
  }
}
