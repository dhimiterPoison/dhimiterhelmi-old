import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";

const sections = Inter({ subsets: ['latin'] });

export const sectionTitleClassname = `text-xl font-medium tracking-wider mt-4 h-10 ${GeistSans.className}`;