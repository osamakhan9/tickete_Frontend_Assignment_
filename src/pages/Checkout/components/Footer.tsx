import { Icons } from "@/components/icons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-1 pb-4">
      <div className="max-w-7xl mx-auto mt-16 px-4 py-5 ">
        <a href="https://www.tickete.co/" target="_blank">
          <Icons
            name="tickete-logo"
            color="text-white"
            size="w-[150px] h-[48px]"
          />
        </a>
      </div>
      <hr className="border-[0.5px] border-[#3C3F44]" />
      <div className="max-w-7xl px-4 py-4 mx-auto">
        <ul className="text-[#ADB1B8] font-sm flex flex-wrap gap-2 sm:gap-4">
          <li className=" text-[#7D828A] hidden md:block">Made with ❤️</li>
          <span className="hidden md:block"> &#x2022;</span>
          <li>
            <a href="https://www.tickete.co/privacy/" target="_blank">
              Privacy policy
            </a>
          </li>
          <span> &#x2022;</span>
          <li>
            <a href="https://www.tickete.co/terms/" target="_blank">
              Terms usage
            </a>
          </li>
          <span> &#x2022;</span>
          <li>
            <a href="https://www.tickete.co/cancellation/" target="_blank">
              Cancellation policy
            </a>
          </li>
          <span> &#x2022;</span>
          <li>
            <a href="https://www.tickete.co/sitemap/cities/" target="_blank">
              Sitemap
            </a>
          </li>
        </ul>
        <p className="text-[#7D828A] md:hidden mt-4">Made with ❤️</p>
      </div>
    </footer>
  );
};
