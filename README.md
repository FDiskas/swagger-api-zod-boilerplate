# @tanstack/react-query test case

### Trying to reproduce strange bug in my code

```
npm i
npm run dev
```

### Reproduce steps

1. Install dependencies `npm i`

#### What happens

First request is ok, we get response, we validate it using zod
Also we reformat response a bit

When we click one more time while cache is still available, response is grabbed from a cache and is still passed to a zod function and it fails

#### Notes

1. Zod for response validation
1. swagger-typescript-api - for generating typings from swagger
1. Public test api was used https://fakerestapi.azurewebsites.net/index.html