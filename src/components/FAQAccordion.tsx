import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { FaqItem } from '../content/siteContent';

interface FAQAccordionProps {
  items: FaqItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string>(items[0]?.id ?? '');

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = item.id === openId;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.03]"
          >
            <h3>
              <button
                aria-controls={`${item.id}-panel`}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium text-white transition hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-mint/70 md:px-6"
                onClick={() => setOpenId(isOpen ? '' : item.id)}
                type="button"
              >
                <span className="pr-8">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-mint transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  id={`${item.id}-panel`}
                  initial={{ height: 0, opacity: 0 }}
                  role="region"
                >
                  <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-mist md:px-6">
                    {item.answer}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
