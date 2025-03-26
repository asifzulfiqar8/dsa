export async function GET() {
  return Response.json({ message: "Hello from Nextjs Api Route" });
}

export async function POST(req) {
  const data = await req.json();
  return Response.json({ message: "Data recieved", data });
}
