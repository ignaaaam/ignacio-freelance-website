export type APIRoute = {
  ({ request }: { request: Request }): Promise<Response>;
}; 