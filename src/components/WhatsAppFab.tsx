import { whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./BrandIcons";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hello Poshbee, I'd like to enquire about an event.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
