import { assertEquals } from "https://deno.land/std@0.90.0/testing/asserts.ts";
import singleton from "./mod.ts";

Deno.test("check single instance creation", () => {
  const rand = singleton(Math.random);
  const value = rand.getInstance();
  assertEquals(value, rand.getInstance());
});
