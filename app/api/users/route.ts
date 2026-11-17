export async function GET() {
  return Response.json([
    { id: 1, name: "Muneeb" },
    { id: 2, name: "Ali" },
  ]);
}