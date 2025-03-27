'use client';

import { useState } from 'react';
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProgramSectionProps {
  events: { id: string; summary: string; start: string; description?: string }[];
}

export default function ProgramSection({ events }: ProgramSectionProps) {
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});
    const router = useRouter();


  const toggleDay = (date: string) => {
    setExpandedDays(prev => ({
      ...prev,
      [date]: !prev[date]
    }));
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });
    return time.toLowerCase();
  };

  const formatDayName = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", { weekday: "long" });
  };

  const formatDayAndMonth = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", { day: "numeric", month: "long" });
  };

  const eventsByDay = events.reduce((acc, event) => {
    const date = new Date(event.start).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  const handleBookClick = async (eventId: string) => {
    try {
      const request = await fetch('/api/payments/checkout', {
        method: "POST",
        body: JSON.stringify({
          eventId: eventId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!request.ok) {
        throw new Error("Failed to handle payment");
      }
      const url = await request.json();
      router.push(url.url);
      
    } catch (error) {
      console.error("Failed to handle payment", error);
      return;
    }
  }
  return (
    <>
      <section id="program" className="bg-teal-700 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-16">
          <h2 className="text-teal-50 text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">
            Program
          </h2>
          <p className="text-teal-50 text-center text-sm md:text-base mb-12 md:mb-16">
            Samimi bir atmosferde, sizin için özel olarak tasarlanmış İngilizce
            pratik oturumlarına katılmaya davetlisiniz!
          </p>
          <div className="space-y-8 md:space-y-12">
            {Object.entries(eventsByDay).map(([date, dayEvents], index) => (
              <div key={date}>
                <div className="flex flex-col mb-4 md:mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <h3 className="text-xl md:text-2xl font-bold text-teal-50">
                        {formatDayName(dayEvents[0].start)}
                      </h3>
                      <span className="text-teal-50"/>
                      <h3 className="text-xl md:text-2xl font-bold text-teal-50">
                        {formatDayAndMonth(dayEvents[0].start)}
                      </h3>
                    </div>
                    <button 
                      onClick={() => toggleDay(date)}
                      className="text-teal-50 hover:text-teal-200 transition-colors"
                    >
                      {expandedDays[date] ? <CaretUp size={24} weight="bold" /> : <CaretDown size={24} weight="bold" />}
                    </button>
                  </div>
                  <div className="border-b border-teal-50 mt-3 md:mt-4"></div>
                </div>
                {expandedDays[date] && (
                  <div className="space-y-4 md:space-y-6">
                    {dayEvents.map((event, eventIndex) => (
                      <div key={event.id}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
                          <div className="text-sm md:text-base font-light text-teal-50">
                            {formatTime(event.start)}
                          </div>
                          <div className="flex-1">
                            <p className="text-base md:text-lg font-bold text-teal-50">{event.summary}</p>
                          </div>
                          <button className="w-full md:w-auto bg-teal-600 text-teal-50 px-4 md:px-6 py-2 rounded-md hover:bg-teal-100 text-sm md:text-base" onClick={() => handleBookClick(event.id)}>
                            Book
                          </button>
                        </div>
                        {eventIndex < dayEvents.length - 1 && (
                          <div className="hidden md:block border-b border-teal-50 my-3 md:my-4"></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {index < Object.entries(eventsByDay).length - 1 && expandedDays[date] && (
                  <div className="hidden md:block border-b border-teal-50 my-6 md:my-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-teal-800 py-4 md:py-6">
  <div className="container mx-auto px-4 md:px-16">
    <div className="flex flex-col items-center justify-center min-h-[160px] py-12">
      <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6">
        <h3 className="text-teal-50 text-lg md:text-xl font-bold text-center">LOGO</h3>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-2">
          <a href="mailto:hello@talkeasy.com" className="text-teal-400 text-sm hover:text-teal-300 transition-colors mb-2 md:mb-0">
            Get in Touch: hello@talkeasy.com
          </a>
        </div>
        <div className="border-b border-teal-700 w-full mb-3 md:mb-4"></div>
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center gap-3 md:gap-0">
          <p className="text-teal-400 text-xs order-2 md:order-1">
            © 2025 relume. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 order-1 md:order-2">
            <Link href="/policies/privacy-policy" className="text-teal-400 text-sm hover:text-teal-300 transition-colors">Privacy Policy</Link>
            <Link href="/policies/terms-of-service" className="text-teal-400 text-sm hover:text-teal-300 transition-colors">Terms of Service</Link>
            <Link href="/policies/cookie-policy" className="text-teal-400 text-sm hover:text-teal-300 transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

