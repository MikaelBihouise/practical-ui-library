import React, { useState } from 'react';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className: string;
  itemsCN: string,
  itemsTitleCN: string,
  itemsContentCN: string,
}

export default function Accordion({
  items, className, itemsCN, itemsTitleCN, itemsContentCN,
}: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordionItem = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const handleAccordionKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === 'Enter') {
      toggleAccordionItem(index);
    }
  };

  return (
    <div className={`${itemsCN} ${className || ''}`}>
      {items.map((item: AccordionItem) => (
        <div key={item.id} className={itemsCN}>
          <div
            className={`${itemsTitleCN} ${activeIndex === item.id ? 'active' : ''}`}
            onClick={() => toggleAccordionItem(item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => handleAccordionKeyDown(event, item.id)}
          >
            {item.title}
          </div>
          <div
            className={`${itemsContentCN} ${
              activeIndex === item.id ? 'active' : 'inactive'
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
