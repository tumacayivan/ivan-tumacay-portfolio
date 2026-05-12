import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  services: string[];
  icon: LucideIcon;
  tools?: string;
  index: number;
}

const ServiceCard = ({ title, description, services, icon: Icon, tools, index }: ServiceCardProps) => {
  // Mild rotation for variety
  const rot = (index % 3) - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="group h-full"
      style={{ transform: `rotate(${rot * 0.4}deg)` }}
    >
      <div className="paper-card-cream p-6 h-full flex flex-col relative paper-grain transition-transform duration-300 hover:!rotate-0 hover:-translate-y-1">
        {/* tape pieces */}
        <div className="tape tape-yellow w-12 h-3 -top-1.5 left-4 rotate-[-3deg]" />

        {/* dossier number */}
        <span className="absolute top-2 right-3 font-courier text-[13px] tracking-widest text-ink-brown">
          OPS-{String(index + 1).padStart(3, "0")}
        </span>

        {/* Header */}
        <div className="flex items-start gap-3 mb-4 border-b-2 border-dashed-ink pb-3">
          <div className="p-2 border-2 border-ink bg-paper text-ink shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <h3 className="font-blackops text-lg sm:text-xl text-ink uppercase tracking-[0.05em] leading-tight mb-1">
              {title}
            </h3>
            <p className="font-typewriter text-base text-ink/80 leading-snug">{description}</p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="flex-1">
          <div className="font-blackops text-[13px] tracking-[0.25em] text-ink mb-2">
            ▣ VERIFIED CAPABILITIES
          </div>
          <ul className="grid grid-cols-1 gap-1.5">
            {services.map((service) => (
              <li
                key={service}
                className="flex items-start gap-2 font-courier text-base text-ink leading-snug"
              >
                <span className="font-blackops text-ink shrink-0 mt-0.5">▸</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools footer */}
        {tools && (
          <div className="mt-4 pt-3 border-t border-dashed-ink">
            <p className="font-courier text-sm text-ink">
              <span className="font-blackops text-[13px] tracking-widest text-ink">
                ◉ TOOLKIT:
              </span>{" "}
              {tools}
            </p>
          </div>
        )}

        {/* status footer */}
        <div className="mt-3 flex items-center justify-between font-courier text-[11px] tracking-widest text-ink-brown border-t border-ink/30 pt-2">
          <span>◉ APPROVED FOR DEPLOYMENT</span>
          <span className="text-ink">CLEARANCE ✓</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
