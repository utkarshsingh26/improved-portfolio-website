import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hey,",
    },
    {
      text: "I'm Utkarsh!",
    },
    {
      text: "The absolute",
    },
    {
      text: "best",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Software Engineer you'll work with!",
      // className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to amazing applications starts with hiring me!
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <a href="https://docs.google.com/document/d/1xl-DVsfCQW8XG35XK3Apd-1-kMOdrzDtMdcimn913so/edit?tab=t.0" target="_blank" rel="noopener noreferrer" >
        <button className="w-80 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Check out my UNBELIEVABLE resume!
        </button>
        </a>
      </div>
    </div>
  );
}
