import { Api } from "@/gen/fake/Api";

export const FakeApiClient = new Api({
  baseUrl: 'https://fakerestapi.azurewebsites.net'
});
