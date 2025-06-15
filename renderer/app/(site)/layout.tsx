import Footer from "@/components/footer";



export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    <div className="bg-gradient-to-br from-blue-50 to-indigo-50">
      {children}
      <Footer />
    </div>

  )
}
