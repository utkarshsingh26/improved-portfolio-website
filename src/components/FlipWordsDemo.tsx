import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["leader", "innovative", "agile", "persistent", "awesome"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Describve myself in five words? 
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
