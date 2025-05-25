export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div >
       <div className="absolute -top-24 right-44 -z-10 size-[31.25rem] rounded-full bg-[#f8caf4] blur-[10rem] sm:w-[68.75rem] " />
        <div className="absolute -top-4 left-[-35rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#b4abf7] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:-left-60 2xl:-left-20 "/>
      {children}
    </div>

  )
}
