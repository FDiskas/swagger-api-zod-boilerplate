# Swagger API Zod Boilerplate

A modern TypeScript boilerplate for building React applications with type-safe
API integration using Swagger-generated clients, Zod validation, and TanStack
Query for data fetching.

## Features

- **🔒 Type Safety**: Full TypeScript support with strict type checking
- **📡 API Integration**: Auto-generated API clients from Swagger/OpenAPI
  specifications
- **✅ Runtime Validation**: Zod schemas for runtime type validation and error
  handling
- **🔄 Data Fetching**: TanStack Query (React Query) for efficient data
  fetching, caching, and synchronization
- **⚡ Fast Development**: Vite for lightning-fast development and building
- **🎨 Modern Tooling**: ESLint, Prettier, and modern React patterns

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TanStack Query v5** - Data fetching and state management
- **Zod v3** - Schema validation
- **swagger-typescript-api** - API client generation
- **Notistack** - Toast notifications

## Quick Start

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd swagger-api-zod-boilerplate
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Generate API types** (optional - automatically runs on `npm install`)

   ```bash
   npm run prepare
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── clients/         # API client instances
├── converters/      # Zod schema converters for API responses
├── gen/             # Auto-generated API types and schemas
├── helpers/         # Utility functions
├── hooks/           # Custom React hooks for API calls
├── providers/       # React context providers
└── types/           # TypeScript type definitions
```

## How It Works

1. **API Generation**: The `npm run prepare` script generates TypeScript types
   and API clients from a Swagger/OpenAPI specification
2. **Type-Safe Validation**: Zod schemas validate API responses at runtime while
   preserving TypeScript types
3. **Error Handling**: Custom error handling with detailed logging and graceful
   fallbacks
4. **Caching**: TanStack Query provides intelligent caching and background
   updates

## Customizing for Your API

1. **Update the API endpoint** in `package.json` prepare script:

   ```json
   "prepare": "swagger-typescript-api generate -p YOUR_SWAGGER_URL -o ./src/gen/your-api --clean-output --modular --extract-enums"
   ```

2. **Update the base URL** in `src/clients/yourApiClient.ts`

3. **Create converters** in `src/converters/` for your data models

4. **Build custom hooks** in `src/hooks/` for your API endpoints

## Example Usage

```typescript
// Custom hook for fetching data
export const useActivities = () => {
  return useQuery({
    queryKey: getQueryCacheKey(FakeApiClient.v1ActivitiesList),
    queryFn: FakeApiClient.v1ActivitiesList,
    select: (response) => activitiesConverter(defaultDataConverter(response)),
    enabled: false,
  })
}

// Component usage
function App() {
  const { data, refetch } = useActivities()

  return (
    <button onClick={() => refetch()}>
      Load Activities
    </button>
  )
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details
