export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      // ISSUE REPRO HERE:
      return Response.json({
        name: `Env var value: ${
          process.env.EXAMPLE_ENV_VAR_KEY
        }, all env: ${JSON.stringify(process.env)}`,
      });
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
