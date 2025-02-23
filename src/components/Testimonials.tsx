import { Marquee3D } from "./ui/marqueedialog";

const Testimonials = () => {
  return (
    <div className="Yellow h-screen">
      <div className="Yellow container mx-auto py-8">
        <div className="my-8 max-w-[320px] rounded-xl border-[3px] border-black bg-[#fffcee] p-8 text-4xl font-semibold text-teal-700 shadow-custom">
          <p className="cursor-pointer transition-all duration-150 hover:underline hover:underline-offset-auto">
            Testimonials
          </p>
        </div>
        <div className="mt-24">
          <Marquee3D />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
