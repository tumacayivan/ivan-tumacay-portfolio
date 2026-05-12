import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group h-full border border-border/70 bg-card/70 p-5 transition-colors hover:border-primary/60 hover:bg-surface-hover"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="text-xl font-black leading-tight text-foreground">{title}</h3>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>

        <ul className="mt-5 grid gap-2 border-t border-border/60 pt-5">
          {services.map((service) => (
            <li key={service} className="flex items-start gap-2 text-sm font-semibold leading-relaxed text-secondary-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
              {service}
            </li>
          ))}
        </ul>

        {tools && (
          <p className="mt-auto border-t border-border/60 pt-4 font-mono text-xs font-bold text-muted-foreground">
            TOOLKIT: <span className="text-accent">{tools}</span>
          </p>
        )}
      </div>
    </motion.article>
  );
};

export default ServiceCard;
