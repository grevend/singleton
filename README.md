# singleton

![alt text](https://img.shields.io/github/license/grevend/singleton?color=blue "License")
![alt text](https://img.shields.io/github/v/release/grevend/singleton?color=red "Release")
![alt text](https://img.shields.io/github/workflow/status/grevend/singleton/Test%20Deno%20module?label=Tests "Tests")

## Example

```typescript
const rand = singleton(Math.random);
const first = rand.getInstance();
const second = rand.getInstance(); // first === second
```

#### Changing the inner instance
```typescript
  const str = singleton(() => "a");
  const first = rand.getInstance(); // "a"
  str.setInstance("b");
  const second = rand.getInstance(); // "b", first !== second
```
