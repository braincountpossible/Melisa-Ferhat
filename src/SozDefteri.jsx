import React, { useRef } from "react";
import { Book } from "react-pageflip";
import { Button } from "@/components/ui/button";
import { Upload, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Page = ({ children }) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-white shadow-inner p-6 rounded-2xl">
    {children}
  </div>
);

export default function SozDefteri() {
  const book = useRef(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f3] p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold mb-4 text-center"
      >
        Kalpten Kalbe – Melisa & Ferhat’ın Söz Defteri
      </motion.h1>

      <Book width={600} height={400} ref={book} className="shadow-lg">
        {/* COVER */}
        <Page>...</Page>
        {/* Additional pages as in prototype */}
      </Book>
    </div>
  );
}
