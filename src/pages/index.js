
import Link from "next/link";
import styles  from '../styles/home.module.css'
//components 
import HeaderHero from "@/ui/header-hero/HeaderHero";
import About from "@/ui/about/About";
import Skills from "@/ui/skills/Skills";

export default function Page() {
  return (
    <>
        <HeaderHero/>
        <About />
        <Skills />

    </>
  )
}