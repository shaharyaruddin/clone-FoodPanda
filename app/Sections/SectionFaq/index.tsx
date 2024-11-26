import React from "react";
import Faq from "../../common/faq.json";
import BaseText from "@/app/Components/BaseText";

function SectionFaq() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-12">
      <BaseText size="text-2xl" weight="font-semibold">
        Frequently Asked Questions
      </BaseText>
      {Faq.faqs.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-4">
            <div className="mt-5">
              <BaseText size="text-xl" weight="font-semibold">
                {item.question}
              </BaseText>
            </div>
            <div>
              <BaseText size="text-md" color="text-gray-700">
                {item.answer}
              </BaseText>
            </div>
          </div>
        );
      })}
      <BaseText weight="font-semibold" additionalClasses="">
        Order food and groceries online with foodpanda now and enjoy a great
        dining experience!
      </BaseText>
    </div>
  );
}

export default SectionFaq;
