import { SectionGap } from "@/components/SectionGap";
import { Icons } from "@/components/icons";
// @ts-ignore
import { useCountries } from "use-react-countries";
import {
  Select,
  Option,
  Input,
  Carousel,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from "react";
import carouselImg1 from "@/assets/images/carousel-img-1.png";
import carouselImg2 from "@/assets/images/carousel-img-2.jpg";
import carouselImg3 from "@/assets/images/carousel-img-3.jpg";
import carouselImg4 from "@/assets/images/carousel-img-4.jpg";
import ratingStart from "@/assets/rating-start.svg";

export const Main: React.FC = () => {
  return (
    <main className="max-w-7xl px-5 mx-auto">
      <section className="flex flex-col lg:flex-row gap-6 grow border-b border-[#DDDDE3] pb-8">
        <div className="">
          <FormSection />
          <PaymentSection />
        </div>
        <CardSection />
      </section>
      <SectionGap gap="60px" />
      <FaqSection />
    </main>
  );
};

const FormSection = () => {
  const { countries } = useCountries();

  const sortedCountries = countries.sort((a: any, b: any) =>
    a.name.localeCompare(b.name)
  );
  return (
    <section className="form-section grow">
      <h2 className="font-roboto hidden lg:block text-5xl font-medium">
        Confirm & pay
      </h2>
      <div className="w-full lg:h-[50px]"></div>
      <div className="p-4 border rounded-2xl bg-[#FCFCFD]">
        <p className="flex justify-between">
          <span className="font-semibold text-sm">Free cancellation</span>
          <span>
            <Icons name="info-fill" color="text-[#7E808A]" />
          </span>
        </p>
        <p className="text-sm text-[#60646C]">
          Tickets can be cancelled by 10th February, 2022.
        </p>
      </div>
      <hr className="md:hidden mt-6" />
      <SectionGap gap="50px" />
      <div className="border-b border-[#DDDDE3] pb-8">
        <h3 className="text-2xl mb-4">Enter your details</h3>
        <p className="text-[#60646C] font-normal">
          We'll be sending your tickets to the details below. Booking for a
          friend? Add their details.
        </p>
        <SectionGap gap="40px" />
        <form action="" className="flex flex-col gap-6">
          <Input label="Full name" size="lg" crossOrigin="" required />
          <div className="flex flex-col md:flex-row gap-6">
            <Select
              placeholder=""
              size="lg"
              label="Select Country"
              value="India"
              onChange={() => {}}
              selected={(element) => {
                return (
                  element &&
                  React.cloneElement(element, {
                    disabled: true,
                    className:
                      "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
                  })
                );
              }}
            >
              {sortedCountries.map(
                ({
                  name,
                  flags,
                  countryCallingCode,
                }: {
                  name: string;
                  flags: any;
                  countryCallingCode: string;
                }) => (
                  <Option
                    key={name}
                    value={name}
                    className="flex items-center gap-2"
                  >
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {`${countryCallingCode} ${name}`}
                  </Option>
                )
              )}
            </Select>
            <Input label="Phone number" size="lg" crossOrigin="" required />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <Input label="Email" size="lg" crossOrigin="" required />
            <Input label="Confirm email" size="lg" crossOrigin="" required />
          </div>
        </form>
      </div>
      <SectionGap gap="50px" />
      <div className="border-b border-[#DDDDE3] pb-8">
        <h3 className="text-2xl mb-4">Additional Information</h3>
        <p className="text-[#60646C] font-normal">
          We need a few more details to complete your reservation.
        </p>
        <SectionGap gap="40px" />
        <form action="" className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <Input label="Input label" size="lg" crossOrigin="" required />
            <Select placeholder="" size="lg" label="Select" onChange={() => {}}>
              <Option>Option1</Option>
              <Option>Option2</Option>
              <Option>Option3</Option>
            </Select>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <Input label="Multiselect" size="lg" crossOrigin="" required />
          </div>
        </form>
      </div>
      <SectionGap gap="50px" />
    </section>
  );
};

const CardSection = () => {
  return (
    <section className="card-section order-first lg:order-2">
      <h2 className="font-roboto block lg:hidden text-3xl font-medium mb-6">
        Confirm & pay
      </h2>
      <section className="border rounded-3xl h-max">
        <div className="lg:w-96 p-4 border-b">
          <Carousel
            placeholder=""
            className="rounded-xl w-full h-[180px] sm:h-[250px] lg:h-[200px] shadow-xl"
            autoplay
            loop
            autoplayDelay={4000}
            transition={{ duration: 0.5 }}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i
                        ? "w-6 h-1.5 bg-white"
                        : "w-1.5 h-1.5 rounded-full bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img
              src={carouselImg2}
              alt="Amsterdam open boat canal cruise"
              className="h-full w-full object-cover"
            />
            <img
              src={carouselImg3}
              alt="Amsterdam open boat canal cruise"
              className="h-full w-full object-cover"
            />
            <img
              src={carouselImg1}
              alt="Amsterdam open boat canal cruise"
              className="h-full w-full object-cover"
            />
            <img
              src={carouselImg4}
              alt="Amsterdam open boat canal cruise"
              className="h-full w-full object-cover"
            />
          </Carousel>
          <div className="card-header mt-5">
            <div className="flex gap-1">
              <img src={ratingStart} className="w-4 h-4" alt="" />
              <p className="text-sm">
                <span className="font-semibold">4.9 </span>
                <span className="text-[#60646C] font-thin">
                  (4.5k) &#x2022; Boat Tours
                </span>
              </p>
            </div>
            <h3 className="text-normal font-semibold mt-0.5">
              Amsterdam open boat canal cruise - Live Guiye - from Anne Frank
              Housef
            </h3>
          </div>
          <div className="card-body text-sm mt-6">
            <div className="flex flex-col gap-4 font-semibold">
              <p className="flex gap-3">
                <Icons name="ticket" /> Standart ticket &#x2022; 1 Adult
              </p>
              <div className="flex gap-3">
                <Icons name="calendar" />
                <p className="flex flex-col gap-1.5">
                  13th February, 2022
                  <span className="text-[#60646C] text-xs font-normal">
                    Duration: 6 hours
                  </span>
                </p>
              </div>
              <div className="flex gap-3">
                <Icons name="clock" />
                <p className="flex flex-col gap-1.5">
                  12:00 PM
                  <span className="text-[#60646C] text-xs font-normal">
                    Operating hours: 9:00 AM - 6:00 PM
                  </span>
                </p>
              </div>
              <p className="flex gap-3">
                <Icons name="users" /> 5 Guest
              </p>
            </div>
            <hr className="border-1 mt-3 border-dashed " />
            <div className="text-[#60646C] flex justify-between pt-3 pb-1">
              <p className="text-sm font-semibold underline">
                View payment summary
              </p>
              <span className="relative top-1">
                <Icons name="plus" size="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
        <div className="card-footer lg:w-96 p-4">
          <div className="flex justify-between">
            <p className="font-semibold flex flex-col gap-1.5">
              <span className="text-lg">Total Payable</span>
              <span className="flex gap-2 text-xs p-1 bg-[#E9F9EE] text-[#299764] rounded-full justify-center items-center">
                <Icons size="w-[14px] h-[12px]" name="piggy-bank" color="" />{" "}
                You saved $10
              </span>
            </p>
            <p className="text-lg font-semibold">$ 30.00</p>
          </div>
          <p className="text-xs text-[#60646C] flex gap-2 items-center mt-5 mb-8 underline">
            You will be charged in AED{" "}
            <Icons name="info" size="w-[15px] h-[15px]" />
          </p>
          <div className="hidden lg:block mb-2">
            <p className="text-xs text-[#60646C] mb-5">
              By clicking “confirm & pay”, you agree to{" "}
              <a
                className="text-[#3A5CCC] underline"
                href="https://www.tickete.co/terms/"
              >
                Tickete’s general terms and conditions
              </a>{" "}
              and{" "}
              <a
                className="text-[#3A5CCC] underline"
                href="https://www.tickete.co/cancellation/"
              >
                cancellation policy.
              </a>
            </p>
            <Button placeholder="" fullWidth>
              Confirm & pay
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
};

function Icon({ id, open }: { id: number; open: number }) {
  if (id === open) {
    return <Icons name="radio-selected" size="w-4 h-4" />;
  }
  return <Icons name="radio-unselected" size="w-4 h-4" />;
}

const PaymentSection = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section className="payment-section ">
      <h3 className="text-2xl mb-4">Select your mode of payment</h3>
      <p className="text-[#60646C] font-normal">
        Payments with Tickete are secure and encrypted.
      </p>
      <SectionGap gap="40px" />
      <div className="flex flex-col gap-2 border-b border-[#DDDDE3] pb-8">
        <Accordion
          placeholder=""
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className={`mb-2 rounded-lg border-[1px] border-[${
            open === 1 ? "#1C2024" : "#D3D4DB"
          }] px-4`}
        >
          <AccordionHeader
            placeholder=""
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors ${open === 1}`}
          >
            <div className="flex gap-2 font-semibold text-base">
              <Icons name="card" size="w-7 h-7" />
              Credit & debit card
            </div>
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            <div className="flex gap-2 mb-6">
              <Icons name="visa" size="w-7 h-7" />
              <Icons name="mastercard" size="w-7 h-7" />
              <Icons name="diners-club" size="w-7 h-7" />
            </div>
            <form action="" className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Input label="Name on card" size="lg" crossOrigin="" required />
                <Input label="Card number" size="lg" crossOrigin="" required />
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <Input label="Expiry date" size="lg" crossOrigin="" required />
                <Input label="CVV" size="lg" crossOrigin="" required />
              </div>

              <div className="card-footer border-t pt-3">
                <div className="flex justify-between">
                  <p className="font-semibold">
                    <span className="text-lg ">Total Payable: $30</span>
                  </p>
                  <p className="text-lg font-semibold">
                    <span className="flex gap-2 text-xs p-1 px-2 bg-[#299764] text-white rounded-full justify-center items-center">
                      <Icons
                        size="w-[14px] h-[12px]"
                        name="piggy-bank"
                        color=""
                      />{" "}
                      You saved $10
                    </span>
                  </p>
                </div>
                <p className="text-xs text-[#60646C] flex gap-2 items-center mt-2 mb-8 underline">
                  You will be charged in AED{" "}
                  <Icons name="info" size="w-[15px] h-[15px]" />
                </p>
                <div className="mb-2">
                  <p className="text-xs text-[#60646C] mb-5">
                    By clicking “confirm & pay”, you agree to{" "}
                    <a
                      className="text-[#3A5CCC] underline"
                      href="https://www.tickete.co/terms/"
                    >
                      Tickete’s general terms and conditions
                    </a>{" "}
                    and{" "}
                    <a
                      className="text-[#3A5CCC] underline"
                      href="https://www.tickete.co/cancellation/"
                    >
                      cancellation policy.
                    </a>
                  </p>
                  <div className="hidden lg:block">
                    <Button placeholder="">Confirm & pay</Button>
                  </div>
                  <div className="block lg:hidden">
                    <Button placeholder="" fullWidth>
                      Confirm & pay
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </AccordionBody>
        </Accordion>
        <Accordion
          placeholder=""
          open={open === 2}
          icon={<Icon id={2} open={open} />}
          className="mb-2 rounded-lg bg-[#F9F9FB] border border-[#D3D4DB] px-4"
        >
          <AccordionHeader
            placeholder=""
            disabled
            className={`border-b-0 transition-colors ${open === 2}`}
          >
            <div className="flex gap-2 font-semibold text-base">
              <Icons name="apple-pay" size="w-7 h-7" />
              coming soon
            </div>
          </AccordionHeader>
        </Accordion>
        <Accordion
          placeholder=""
          open={open === 3}
          icon={<Icon id={3} open={open} />}
          className="rounded-lg bg-[#F9F9FB] border border-[#D3D4DB] px-4"
        >
          <AccordionHeader
            placeholder=""
            disabled
            className={`border-b-0 transition-colors ${open === 3}`}
          >
            <div className="flex gap-2 font-semibold text-base">
              <Icons name="google-pay" size="w-7 h-7" />
              coming soon
            </div>
          </AccordionHeader>
        </Accordion>
      </div>
      <SectionGap gap="40px" />
      <div className="">
        <div className="flex flex-col mb-4">
          <span className="flex mb-4 lg:hidden w-max gap-2 text-xs p-0.5 px-2 border-[0.5px] border-[#299764] bg-[#E9F9EE] text-[#299764] rounded-full justify-center items-center">
            <Icons size="w-[14px] h-[12px]" name="piggy-bank" color="" /> You
            saved $10
          </span>
          <p className="font-semibold lg:text-2xl text-xl">
            Total Payable: $30.00
          </p>
        </div>
        <div className="p-4 border rounded-2xl bg-[#FCFCFD] flex gap-2">
          <div className="relative top-1">
            <Icons name="info-fill" size="w-[15px] h-[15px]" />
          </div>
          <div className="text-sm">
            <p className="text-semibold">You will be charged in AED</p>
            <p className="text-[#60646C]">
              The price shown here is in US Dollar (USD) as per the current
              conversion rate. You will be charged in United Arab Emirates
              Dirham (AED).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FaqAccordion = ({
  title,
  body,
  open,
  id,
  handleOpen,
}: {
  title: string;
  body: string;
  open: number;
  id: number;
  handleOpen: (value: number) => void;
}) => {
  return (
    <Accordion
      placeholder=""
      open={open === id}
      className={` rounded-lg border-[1px] border-[#D3D4DB] px-6`}
    >
      <AccordionHeader
        placeholder=""
        onClick={() => handleOpen(id)}
        className={`border-b-0 transition-colors ${open === id}`}
      >
        <div className="flex items-center gap-4 font-semibold text-base">
          <div>
            {open === id ? (
              <p className="text-xl relative font-medium -top-0.5">x</p>
            ) : (
              <p className="text-xl">+</p>
            )}
          </div>
          <p>{title}</p>
        </div>
      </AccordionHeader>
      <AccordionBody className="pt-0 !pb-4 text-sm font-normal">
        <p className="ml-6">{body}</p>
      </AccordionBody>
    </Accordion>
  );
};

const FaqSection = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <section className="faq-section flex flex-col lg:flex-row gap-10 lg:gap-4">
      <div className="grow">
        <h3 className="lg:text-2xl text-xl mb-4">Frequently asked questions</h3>
        <p className="text-[#60646C] font-normal">
          Here are some of our most asked questions.
        </p>
        <div className="hidden lg:block">
          <div className="support-cta max-w-[450px] mt-10 bg-[#F9F9FB] p-4 rounded-3xl flex">
            <div className="w-60 p-5">
              <h4 className="lg:text-lg mb-4">
                Still need help? We’re here for you.
              </h4>
              <Button placeholder="">Chat with us</Button>
            </div>
            <div>
              <Icons
                name="support-illustration"
                size="w-[125px] h-[80] lg:w-[160px] lg:h-[100]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[650px] flex flex-col gap-4">
        <FaqAccordion
          title="What should I do on my first trip to Rome?"
          body="Embarking on your first trip to Rome opens the door to a captivating
          journey through ancient wonders and vibrant culture. Explore the
          Colosseum and Roman Forum, marvel at the Vatican City's treasures, and
          make a wish at the Trevi Fountain. Delight in authentic Italian cuisine,
          wander through historic districts like Trastevere, and savor the essence
          of Rome's timeless charm. From the Pantheon to the Spanish Steps, each
          corner reveals a piece of the city's rich history."
          open={open}
          id={1}
          handleOpen={handleOpen}
        />

        <FaqAccordion
          title="What are some hidden gems to see in Rome?"
          body="Rome is packed with hidden gems. If you love art, don't miss the Galleria
          Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well 
          worth a quick visit. If you love the ancient stuff, don't miss the Domus Romana at 
          Palazzo Valentini, the Domus Aurea, and the Baths of Caracalla. For even more hidden 
          gems, take a tour of Trastevere, a fascinating neighborhood full of history and ambiance."
          open={open}
          id={2}
          handleOpen={handleOpen}
        />

        <FaqAccordion
          title="How much time should I spend in Rome?"
          body="The ideal duration for a trip to Rome depends on your preferences and the pace at 
          which you wish to explore the city. Generally, spending around 4 to 5 days allows you to 
          cover major attractions like the Colosseum, Vatican City, Roman Forum, and iconic landmarks. 
          This timeframe also permits leisurely strolls through charming neighborhoods, indulging in 
          delicious Italian cuisine, and absorbing the city's unique atmosphere. However, if you have 
          a specific list of must-see places or prefer a more relaxed schedule, you can tailor your 
          visit accordingly."
          open={open}
          id={3}
          handleOpen={handleOpen}
        />

        <FaqAccordion
          title="What food is Rome known for?"
          body="Rome is celebrated for its culinary delights, offering a delectable journey into Italian cuisine. 
          The city is famed for its pasta perfection, with must-try dishes like Cacio e Pepe, Carbonara, 
          and Amatriciana. Pizza enthusiasts will relish in the local pizzerias, savoring authentic flavors. 
          Rome's food markets, such as Campo de' Fiori, provide a vibrant array of fresh produce, cheeses, and meats. 
          Don't forget to indulge in traditional Roman dishes, complemented by the city's excellent wines. 
          From espresso at historic cafes to gelato at quaint parlors, Rome's food scene is a gastronomic 
          adventure that captivates the senses."
          open={open}
          id={4}
          handleOpen={handleOpen}
        />

        <FaqAccordion
          title="What is the best way to get around Rome?"
          body="The best way to navigate Rome is a combination of walking and using public transportation. 
          The city's historic center is best explored on foot, allowing you to immerse yourself in its charming 
          streets and discover hidden gems. Rome's extensive public transport system, including buses and the metro, 
          is efficient and can swiftly take you to iconic landmarks and distant neighborhoods. Consider purchasing a 
          Roma Pass for unlimited access to public transport and free entry to many museums and archaeological sites. 
          Taxis are available, but they can be pricey."
          open={open}
          id={5}
          handleOpen={handleOpen}
        />
      </div>
      <div className="lg:hidden grow border-b border-[#DDDDE3] pb-8 flex justify-center">
        <div className="support-cta max-w-[450px] bg-[#F9F9FB] p-3 rounded-3xl flex justify-between">
          <div className="min-w-56 max-w-60 p-4">
            <h4 className="lg:text-lg mb-4">
              Still need help? <br /> We’re here for you.
            </h4>
            <Button placeholder="">Chat with us</Button>
          </div>
          <div>
            <Icons
              name="support-illustration"
              size="w-[125px] h-[80] lg:w-[160px] h-[100]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
