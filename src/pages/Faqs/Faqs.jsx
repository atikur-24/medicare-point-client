import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import Lottie from "lottie-react";
import "react-accessible-accordion/dist/fancy-example.css"; // Import the default styles
import faqsAnimation from "../../assets/Lottie/faqs.json";
import faqsAnimation2 from "../../assets/Lottie/faqs2.json";

const Faqs = () => {
  const faqsData = [
    {
      question: "Can I return or exchange medicines?",
      answer:
        "Due to safety regulations, we can't accept returns/exchanges on medicines. Contact us for help with wrong/damaged items.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Reach out via the 'Contact Us' page on our website or email us at [customer support email address].",
    },
    {
      question: "Can I get personalized health advice on your website?",
      answer:
        "While we provide general health tips, personalized advice requires consultation with a healthcare professional.",
    },
    {
      question: "How do I track my order once it's placed?",
      answer:
        "After processing, you'll get a confirmation email with a tracking link for monitoring order status and estimated delivery date.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit/debit cards and secure online payment platforms like PayPal.",
    },
    {
      question: "Is my personal information secure when I make a purchase?",
      answer:
        "Yes, we use secure encryption to protect your personal and payment information.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Currently, we offer shipping within [your country/region]. International customers, please contact customer support.",
    },
    {
      question: "What should I do about medication side effects?",
      answer:
        "Stop using the medication and consult a healthcare professional if you experience adverse reactions. Contact us for guidance too.",
    },
    {
      question: "Can I return or exchange medicines?",
      answer:
        "Due to safety regulations, we can't accept returns/exchanges on medicines. Contact us for help with wrong/damaged items.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Reach out via the 'Contact Us' page on our website or email us at [customer support email address].",
    },
  ];

  const faqsDataTwo = [
    {
      question: "How can I place an order for medicine on your website?",
      answer:
        "To place an order, browse our selection, add items to your cart, and proceed to checkout. Follow the prompts to provide shipping and payment details.",
    },
    {
      question: "What types of medicines do you offer?",
      answer:
        "We offer a wide range of prescription and over-the-counter medicines for various health conditions like allergies, pain relief, cold and flu, and more.",
    },
    {
      question: "How can I place an order for medicine on your website?",
      answer:
        "To place an order, browse our selection, add items to your cart, and proceed to checkout. Follow the prompts to provide shipping and payment details.",
    },
    {
      question: "What types of medicines do you offer?",
      answer:
        "We offer a wide range of prescription and over-the-counter medicines for various health conditions like allergies, pain relief, cold and flu, and more.",
    },
    {
      question: "Are the medicines on your website safe and authentic?",
      answer:
        "Yes, we source medicines from reputable manufacturers and ensure they undergo quality checks for authenticity and safety.",
    },
    {
      question: "Can I get personalized health advice on your website?",
      answer:
        "While we provide general health tips, personalized advice requires consultation with a healthcare professional.",
    },
    {
      question: "How do I track my order once it's placed?",
      answer:
        "After processing, you'll get a confirmation email with a tracking link for monitoring order status and estimated delivery date.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit/debit cards and secure online payment platforms like PayPal.",
    },
    {
      question: "Is my personal information secure when I make a purchase?",
      answer:
        "Yes, we use secure encryption to protect your personal and payment information.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Currently, we offer shipping within [your country/region]. International customers, please contact customer support.",
    },
    {
      question: "What should I do about medication side effects?",
      answer:
        "Stop using the medication and consult a healthcare professional if you experience adverse reactions. Contact us for guidance too.",
    },
  ];

  return (
    <div className="my-container">
      <div className="grid grid-cols-1 items-start justify-center gap-4 md:grid-cols-2">
        <div>
          <div className="my-10">
            <div className="flex items-center justify-between ">
              <div className="space-y-2">
                <h2 className="text-xl font-bold uppercase  text-[#111a28]  lg:text-2xl">
                  Frequently Asked Questions Basic
                </h2>
                <hr className="w-40 border-2 border-[#10847e]" />
              </div>
            </div>
          </div>
          <Accordion allowZeroExpanded>
            {faqsDataTwo?.map((faq, index) => (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="font-bold">{faq.question}</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{faq.answer}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="order-first mt-4 hidden w-full md:order-last md:mt-20 md:block">
          <div className="">
            <Lottie animationData={faqsAnimation} loop />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start justify-center gap-4 md:grid-cols-2">
        <div>
          <div className="my-10">
            <div className="flex items-center justify-between ">
              <div className="space-y-2">
                <h2 className="text-xl font-bold uppercase  text-[#111a28]  lg:text-2xl">
                  Frequently Asked Questions Advance
                </h2>
                <hr className="w-40 border-2 border-[#10847e]" />
              </div>
            </div>
          </div>

          <Accordion allowZeroExpanded>
            {faqsData?.map((faq, index) => (
              <AccordionItem key={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span className="font-bold">{faq.question}</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{faq.answer}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="order-first  mt-4 w-full md:mt-20">
          <div className="">
            <Lottie animationData={faqsAnimation2} loop />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
