import { Icons } from "@/components/icons";
import { useGetTmer } from "@/hooks/useGetTimer";

export const Header: React.FC = () => {
  const timer = 30 * 60 * 1000;
  const { minutes, seconds } = useGetTmer(timer);
  return (
    <header className="">
      <section className="max-w-7xl h-[72px] flex items-center justify-between mx-auto px-6">
        <div className="grow basis-full">
          <div className="hidden md:block relative -top-1">
            <a href="https://www.tickete.co/" target="_blank">
              <Icons name="tickete-logo" size="w-[130px] h-[31px]" />
            </a>
          </div>
          <div className="sm:block md:hidden">
            <Icons name="arrow-left" size="w-6 h-6" />
          </div>
        </div>
        <div className="flex gap-1.5 grow basis-full items-center justify-center">
          <Icons name="lock" size="w-5 h-5" color="text-[#7E808A]" />
          <span className="text-[#60646C] font-semibold">Checkout</span>
        </div>
        <div className="flex gap-1.5 grow basis-full items-center justify-end">
          <Icons name="question-mark" size="w-5 h-5" />
          <span className="hidden md:block">Help</span>
        </div>
      </section>
      <section className="bg-black  text-center py-3">
        <p className="font-semibold text-white text-sm">
          Holding your tickets for {minutes}:{seconds}
        </p>
      </section>
    </header>
  );
};
