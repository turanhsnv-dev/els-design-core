"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "@/components/shared/ui/Container";
import GradientText from "@/components/shared/ui/GradientText";
import { RevealContainer, RevealItem } from "@/components/shared/motion/Reveal";
import { REVIEWS, type Review } from "@/constants/testimonials";

export default function Testimonials() {
  const [featured, ...rest] = REVIEWS;

  return (
    <section
      id="testimonials"
      className="relative w-full py-14 md:py-24 overflow-hidden bg-background-dark"
    >
      <Container>
        <RevealContainer stagger={0.08}>
          <RevealItem className="text-center mb-10 md:mb-16">
            <p className="text-xs font-medium text-primary/80 uppercase tracking-[0.3em] mb-4">
              Trusted By The Best
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Client <GradientText variant="white">Echoes</GradientText>
            </h3>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="w-full lg:w-2/5">
                <ReviewCard review={featured} isLarge />
              </div>
              <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-5">
                {rest.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </RevealItem>
        </RevealContainer>
      </Container>
    </section>
  );
}

function ReviewCard({ review, isLarge = false }: { review: Review; isLarge?: boolean }) {
  return (
    <div
      className={`w-full h-full ${
        isLarge ? "p-6 md:p-9 lg:p-11" : "p-5 md:p-7"
      } rounded-2xl bg-[#0e0e13] border border-white/6 hover:border-white/12 transition-all duration-700 cursor-default relative overflow-hidden group`}
    >
      <Quote
        size={isLarge ? 52 : 38}
        className="text-white/4 absolute top-6 left-6 group-hover:text-primary/8 transition-colors duration-700"
      />
      <div className="relative z-10 flex flex-col h-full justify-between pt-10">
        <p
          className={`text-slate-300 ${
            isLarge ? "text-lg md:text-xl lg:text-2xl" : "text-sm md:text-base"
          } leading-relaxed mb-6 md:mb-8 font-light`}
        >
          {review.text}
        </p>
        <div className="flex items-center gap-4">
          <div
            className={`relative ${
              isLarge ? "w-12 h-12" : "w-10 h-10"
            } rounded-full overflow-hidden border border-white/10 group-hover:border-white/18 transition-colors duration-500 shrink-0`}
          >
            <Image src={review.avatar} alt={review.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className={`text-white font-medium ${isLarge ? "text-base" : "text-sm"}`}>
              {review.name}
            </h4>
            <p
              className={`text-slate-600 ${
                isLarge ? "text-xs" : "text-[11px]"
              } uppercase tracking-wider`}
            >
              {review.role}
            </p>
          </div>
          <div className="ml-auto flex gap-0.5 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`${isLarge ? "w-2 h-2" : "w-1.5 h-1.5"} rounded-full bg-white`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
