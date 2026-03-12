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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group h-full"
    >
      <div className="glass-card rounded-xl p-7 h-full flex flex-col hover:border-primary/30 transition-all duration-300 hover:glow-gold">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <h3 className="font-heading font-extrabold text-xl text-foreground mb-1.5 tracking-tight">{title}</h3>
            <p className="text-base text-muted-foreground font-medium">{description}</p>
          </div>
        </div>

        {/* Services list - always visible */}
        <div className="border-t border-border/50 pt-5 flex-1">
          <ul className="grid grid-cols-1 gap-2">
            {services.map((service) => (
              <li key={service} className="flex items-start gap-2.5 text-base font-medium text-secondary-foreground">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools footer */}
        {tools && (
          <div className="mt-5 pt-4 border-t border-border/30">
            <p className="text-sm font-semibold text-muted-foreground">
              <span className="text-primary font-bold">Tools:</span> {tools}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
