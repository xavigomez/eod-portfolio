import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

interface ProcessItem {
  title: string;
  content: string;
}

interface ProcessAccordionProps {
  process: ProcessItem[];
  images: string[];
  projectSlug: string;
  className?: string;
}

export function ProcessAccordion({
  process,
  images,
  projectSlug,
  className,
}: ProcessAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={`flex gap-23 ${className || ""}`}>
      <div
        className="gallery-item hidden md:block rounded-4xl w-50 h-67 lg:w-70 lg:h-93 xl:w-90 xl:h-120 shrink-0 relative overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`rounded-4xl w-full h-full object-cover absolute inset-0 transition-all duration-300 ease-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="flex-1 space-y-6">
        <Accordion
          type="single"
          defaultValue={`${projectSlug}-1`}
          onValueChange={(value) => {
            const index = parseInt(value.split("-").pop() || "1", 10) - 1;
            setActiveIndex(index);
          }}
        >
          {process.map((item, index) => {
            const order = index + 1;
            return (
              <AccordionItem key={order} value={`${projectSlug}-${order}`}>
                <AccordionTrigger className="cursor-pointer">
                  <h3 className="text-2xl font-semibold">
                    0{order}. {item.title}
                  </h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p
                    className="text-base"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
