const BASE_API_URL = "https://64a153480079ce56e2daf910.mockapi.io";

export const ENDPOINT = {
  Tags: `${BASE_API_URL}/tags`,
  Tag: (tagId: string) => `${BASE_API_URL}/tags/${tagId}`,
  Triggers: `${BASE_API_URL}/triggers`,
  Trigger: (triggerId: string) => `${BASE_API_URL}/triggers/${triggerId}`,
};
