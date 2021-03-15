type Singleton<I> = { getInstance: () => I };

export default function singleton<I>(factory: () => I): Singleton<I> {
  let instance: I | null = null;
  return {
    getInstance: () => instance == null ? (instance = factory()) : instance,
  };
}
