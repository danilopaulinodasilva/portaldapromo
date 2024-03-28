import { Hero } from "./Hero";
import { Featured } from "./Featured";
import { Offers } from "./Offers";

console.log("Homepage.jsx");

export function Homepage() {
  return (
    <>
      <Hero />
      <Featured />
      <Offers />
    </>
  );
}
