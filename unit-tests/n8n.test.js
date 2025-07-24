const axios = require('axios');

describe('n8n Service Tests', () => {
  const baseUrl = 'https://autonomous-routing.uc.r.appspot.com'; // Match N8N_EDITOR_BASE_URL

  it('should return status 200 from editor endpoint', async () => {
    const res = await axios.get(baseUrl);
    expect(res.status).toBe(200);
  });

  it('should expose /healthz endpoint', async () => {
    const res = await axios.get(`${baseUrl}/healthz`);
    expect([200, 204]).toContain(res.status);
  });
});
